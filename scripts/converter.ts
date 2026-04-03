#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import { unified } from "unified"
import rehypeRemark from "rehype-remark"
import remarkStringify from "remark-stringify"
import remarkGfm from "remark-gfm"
import { fromHtml } from "hast-util-from-html"
import { select, selectAll, matches } from "hast-util-select"
import { isElement } from "hast-util-is-element"
import { visit, SKIP } from "unist-util-visit"
import { toString as toText } from "hast-util-to-string"
import type { Handle } from "hast-util-to-mdast"
import type { Root, Element, RootContent, Nodes } from "hast"

// ── types ──────────────────────────────────────────────────────────────────────

export interface Section {
	id: string
	title: string
	numberPrefix: string
	slug: string
	content: Root
	footnoteIds: string[]
}

interface Footnote {
	id: string
	content: Root
}

type Format = "texinfo7" | "texinfo6"

const EXTENT_SELECTOR =
	".chapter-level-extent, .section-level-extent, .subsection-level-extent, " +
	".subsubsection-level-extent, .appendix-level-extent, .unnumbered-level-extent"

const TEXINFO6_HEADING_SELECTOR =
	"h2.chapter, h2.unnumbered, h2.appendix, " +
	"h3.section, h3.appendixsec, h3.unnumbered, h3.heading, " +
	"h4.subsection, h4.appendixsubsec, h4.unnumberedsubsubsec, " +
	"h4.subsubheading, h4.unnumbered, h4.heading"

// ── format detection ───────────────────────────────────────────────────────────

function detectFormat(tree: Root): Format {
	const hasExtentDivs = selectAll(EXTENT_SELECTOR, tree).length > 0
	return hasExtentDivs ? "texinfo7" : "texinfo6"
}

// ── footnote extraction ────────────────────────────────────────────────────────

function parseFootnotes(tree: Root): Map<string, Footnote> {
	const footnotes = new Map<string, Footnote>()
	const headings = selectAll(".footnotes-segment h5.footnote-body-heading", tree)

	for (const heading of headings) {
		const anchor = select("a[id]", heading)
		const id = (anchor?.properties?.id as string) ?? ""
		if (!id) continue

		const parent = findParent(tree, heading)
		if (!parent) continue

		const headingIdx = childIndex(parent, heading)
		const contentNodes: RootContent[] = []
		let i = headingIdx + 1

		while (i < parent.children.length) {
			const sibling = parent.children[i]
			if (isElement(sibling, "h5") && matches(".footnote-body-heading", sibling)) break

			contentNodes.push(sibling as RootContent)
			i++
		}

		footnotes.set(id, {
			id,
			content: { type: "root", children: contentNodes },
		})
	}

	return footnotes
}

// ── image collection ───────────────────────────────────────────────────────────

export function collectImageSrcs(tree: Root): string[] {
	const srcs: string[] = []

	visit(tree, "element", (node) => {
		if (!isElement(node, "img")) return

		const src = (node.properties?.src as string) ?? ""
		if (src && !src.startsWith("http://") && !src.startsWith("https://") && !src.startsWith("data:")) {
			srcs.push(src)
		}
	})

	return [...new Set(srcs)]
}

// ── section extraction: top-level intro page ───────────────────────────────────

function extractTopSection(tree: Root): Section | null {
	const topHeading = select("h1.top", tree)
	if (!topHeading) return null

	const id = (topHeading.properties?.id as string) ?? "Top"
	const title = cleanText(toText(topHeading))
	if (!title) return null

	const parent = findParent(tree, topHeading)
	if (!parent) return null

	const headingIdx = childIndex(parent, topHeading)
	const contentNodes: RootContent[] = []

	for (let i = headingIdx + 1; i < parent.children.length; i++) {
		const node = parent.children[i]

		if (isElement(node)) {
			const isStopPoint =
				matches(".element-contents, .region-contents, #SEC_Contents", node) ||
				matches(EXTENT_SELECTOR, node)

			if (isStopPoint) break
			if (matches(".nav-panel", node) || node.tagName === "hr") continue
		}

		contentNodes.push(node as RootContent)
	}

	return {
		id,
		title,
		numberPrefix: "",
		slug: id,
		content: { type: "root", children: contentNodes },
		footnoteIds: [],
	}
}

// ── section extraction: texinfo 7 format (*-level-extent divs) ─────────────────

function extractSectionsTexinfo7(tree: Root): Section[] {
	const sections: Section[] = []
	const sectionDivs = selectAll(EXTENT_SELECTOR, tree)

	for (const div of sectionDivs) {
		const id = (div.properties?.id as string) ?? ""
		if (!id || id === "Top" || id === "SEC_Contents") continue

		const heading = select("h1, h2, h3, h4, h5", div)
		if (!heading) continue

		const isDirectChild = div.children.includes(heading)
		if (!isDirectChild) continue

		const headingText = cleanText(toText(heading))
		const { prefix, title } = parseHeadingPrefix(headingText)
		if (!title) continue

		const ownChildren = div.children.filter((child) => {
			if (child === heading) return false
			if (!isElement(child)) return true

			if (matches(EXTENT_SELECTOR, child)) return false
			if (matches(".nav-panel", child)) return false
			if (matches("ul.mini-toc", child)) return false
			if (matches(".footnotes-segment", child)) return false
			if (child.tagName === "hr") return false

			return true
		})

		const sectionRoot: Root = { type: "root", children: [...ownChildren] }

		const footnoteIds: string[] = []
		visit(sectionRoot, "element", (node) => {
			if (!isElement(node, "a")) return

			const href = (node.properties?.href as string) ?? ""
			const footMatch = href.match(/#(FOOT\d+)/)
			if (footMatch) footnoteIds.push(footMatch[1])
		})

		sections.push({
			id,
			title,
			numberPrefix: prefix,
			slug: id,
			content: sectionRoot,
			footnoteIds,
		})
	}

	return sections
}

// ── section extraction: texinfo 6 format (<a name=""> anchors) ─────────────────

function extractSectionsTexinfo6(tree: Root): Section[] {
	const sections: Section[] = []
	const headings = selectAll(TEXINFO6_HEADING_SELECTOR, tree)

	for (const heading of headings) {
		const parent = findParent(tree, heading)
		if (!parent) continue

		const headingIdx = childIndex(parent, heading)

		let prevAnchor: Element | null = null
		for (let j = headingIdx - 1; j >= 0; j--) {
			const candidate = parent.children[j]

			if (candidate.type === "text" && !(candidate as { value: string }).value.trim()) continue

			if (isElement(candidate, "a") && candidate.properties?.name) {
				prevAnchor = candidate
			}

			break
		}

		const rawId = (prevAnchor?.properties?.name as string) ?? ""
		if (!rawId) continue

		const id = rawId.replace(/-1$/, "")
		if (id === "Top" || id === "SEC_Contents") continue

		const headingText = cleanText(toText(heading))
		const { prefix, title } = parseHeadingPrefix(headingText)
		if (!title) continue

		const contentNodes: RootContent[] = []
		let i = headingIdx + 1

		while (i < parent.children.length) {
			const sibling = parent.children[i]

			if (isElement(sibling, "hr")) break

			if (isElement(sibling) && matches(".header", sibling)) {
				i++
				continue
			}

			if (isElement(sibling, "a") && sibling.properties?.name) {
				let peek = i + 1

				while (peek < parent.children.length) {
					const candidate = parent.children[peek]
					if (candidate.type === "text" && !(candidate as { value: string }).value.trim()) {
						peek++
						continue
					}

					break
				}

				if (peek < parent.children.length) {
					const next = parent.children[peek]
					if (isElement(next) && matches(TEXINFO6_HEADING_SELECTOR, next)) break
				}
			}

			if (isElement(sibling, "table") && matches("table.menu", sibling)) {
				i++
				continue
			}

			contentNodes.push(sibling as RootContent)
			i++
		}

		const sectionRoot: Root = { type: "root", children: contentNodes }

		const footnoteIds: string[] = []
		visit(sectionRoot, "element", (node) => {
			if (!isElement(node, "a")) return

			const href = (node.properties?.href as string) ?? ""
			const footMatch = href.match(/#(FOOT\d+)/)
			if (footMatch) footnoteIds.push(footMatch[1])
		})

		sections.push({
			id,
			title,
			numberPrefix: prefix,
			slug: id,
			content: sectionRoot,
			footnoteIds,
		})
	}

	return sections
}

// ── tree helpers ───────────────────────────────────────────────────────────────

interface NodeWithChildren {
	children: Nodes[]
}

function findParent(tree: Root, target: Nodes): NodeWithChildren | null {
	let found: NodeWithChildren | null = null

	visit(tree, (node) => {
		if (!("children" in node)) return

		const parent = node as NodeWithChildren

		for (const child of parent.children) {
			if (child === target) {
				found = parent
				return false
			}
		}
	})

	return found
}

function childIndex(parent: NodeWithChildren, target: Nodes): number {
	return parent.children.indexOf(target)
}

// ── unified pipeline: hast -> markdown ─────────────────────────────────────────

function buildProcessor(manualName: string) {
	const handlers = {

		kbd(_state: unknown, node: Element) {
			return { type: "inlineCode", value: toText(node) }
		},

		var(_state: unknown, node: Element) {
			return { type: "emphasis", children: [{ type: "text", value: toText(node) }] }
		},

		samp(_state: unknown, node: Element) {
			return { type: "inlineCode", value: toText(node) }
		},

		dl(state: { all: (n: Element) => unknown[]; one: (n: Element) => unknown }, node: Element) {
			const results: unknown[] = []

			for (const child of node.children) {
				if (!isElement(child)) continue

				if (child.tagName === "dt") {
					results.push({
						type: "heading",
						depth: 3,
						children: state.all(child),
					})
				} else if (child.tagName === "dd") {
					results.push(...state.all(child))
				}
			}

			return results
		},

		a(state: { all: (n: Element) => unknown[] }, node: Element) {
			const href = (node.properties?.href as string) ?? ""
			const children = state.all(node)

			if (!children.length) return children

			const footMatch = href.match(/#FOOT(\d+)/)
			if (footMatch) {
				return { type: "text", value: `[^${footMatch[1]}]` }
			}

			return {
				type: "link",
				url: resolveLink(href, manualName),
				children,
			}
		},

		pre(_state: unknown, node: Element) {
			const text = toText(node)

			const classStr = String(node.properties?.className ?? "")
			const firstChild = node.children[0]
			const childClassStr =
				isElement(firstChild)
					? String(firstChild.properties?.className ?? "")
					: ""

			// explicitly non-lisp: C code, shell, etc. would need specific classes
			// but texinfo manuals almost exclusively contain lisp examples
			const isLisp = classStr.includes("lisp") || childClassStr.includes("lisp")
			const isExample = classStr.includes("example") || childClassStr.includes("example")

			let lang: string | null = null

			if (isLisp) {
				lang = "lisp"
			} else if (isExample) {
				lang = "lisp"
			}

			return {
				type: "code",
				lang,
				value: text,
			}
		},

		img(_state: unknown, node: Element) {
			const src = (node.properties?.src as string) ?? ""
			const alt = (node.properties?.alt as string) ?? ""

			return {
				type: "image",
				url: src,
				alt,
			}
		},

		span(state: { all: (n: Element) => unknown[] }, node: Element) {
			if (node.properties?.id && !node.children.length) {
				return []
			}

			return state.all(node)
		},

		div(state: { all: (n: Element) => unknown[] }, node: Element) {
			const classes = (node.properties?.className as string[]) ?? []

			if (classes.includes("nav-panel") || classes.includes("header")) {
				return []
			}

			return state.all(node)
		},
	}

	return unified()
		.use(function removeCopiableLinks() {
			return (tree: Root) => {
				visit(tree, "element", (node, index, parent) => {
					if (typeof index !== "number" || !parent) return

					const shouldRemove =
						(isElement(node, "a") &&
							(node.properties?.className as string[])?.includes("copiable-link")) ||
						(isElement(node, "span") &&
							node.properties?.id &&
							node.children.length === 0)

					if (shouldRemove) {
						parent.children.splice(index, 1)
						return [SKIP, index]
					}
				})
			}
		})
		.use(rehypeRemark, { handlers: handlers as Record<string, Handle> })
		.use(remarkGfm)
		.use(remarkStringify, {
			bullet: "-",
			emphasis: "*",
			strong: "*",
			rule: "-",
			fences: true,
		})
}

async function hastToMarkdown(
	content: Root,
	manualName: string,
	footnotes: Map<string, Footnote>,
	footnoteIds: string[],
): Promise<string> {
	const processor = buildProcessor(manualName)
	const mdast = await processor.run(structuredClone(content))
	let md = processor.stringify(mdast)

	if (footnoteIds.length > 0) {
		const parts = await Promise.all(
			footnoteIds.map(async (fid, i) => {
				const fn = footnotes.get(fid)
				if (!fn) return ""

				const fnMdast = await processor.run(structuredClone(fn.content))
				const fnContent = processor.stringify(fnMdast).trim().replace(/\n/g, " ")
				return `[^${i + 1}]: ${fnContent}`
			}),
		)

		const validParts = parts.filter(Boolean)

		if (validParts.length) {
			md += "\n\n" + validParts.join("\n\n")
		}
	}

	return cleanMarkdown(md)
}

// ── link resolution ────────────────────────────────────────────────────────────

function resolveLink(href: string, manualName: string): string {
	if (!href) return ""

	if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
		return href
	}

	if (href.startsWith("/") && !href.startsWith("/docs/")) {
		return `https://www.gnu.org${href}`
	}

	if (href.includes(".html")) {
		const match = href.match(/(?:.*\/)?([^/]+)\.html(#.*)?$/)

		if (match) {
			const file = match[1]
			const hash = match[2] ?? ""

			if (file === "index") return `/docs/${manualName}/`

			return `/docs/${manualName}/${file}${hash}`
		}
	}

	if (href.startsWith("#")) {
		const anchor = href.slice(1)
		return `/docs/${manualName}/${anchor}`
	}

	return href
}

// ── text utilities ─────────────────────────────────────────────────────────────

function cleanText(text: string): string {
	return text
		.replace(/\s+/g, " ")
		.replace(/\u00b6/g, "")
		.trim()
}

function parseHeadingPrefix(heading: string): { prefix: string; title: string } {
	const match = heading.match(
		/^(?:Appendix\s+)?([A-Z\d]+(?:\.\d+(?:\.\d+(?:\.\d+)?)?)?)\s+(.+)$/,
	)

	if (match) {
		return { prefix: match[1], title: match[2] }
	}

	return { prefix: "", title: heading }
}

function cleanMarkdown(md: string): string {
	return md
		.replace(/\n{4,}/g, "\n\n\n")
		.replace(/\u201c/g, '"')
		.replace(/\u201d/g, '"')
		.replace(/\u2018/g, "'")
		.replace(/\u2019/g, "'")
		.replace(/\u2014/g, "---")
		.replace(/\u2013/g, "--")
		.replace(/\u2026/g, "...")
		.replace(/\u00a0/g, " ")
		.trim()
}

// ── file naming ────────────────────────────────────────────────────────────────

function buildFilename(section: Section): string {
	const safeName = section.title
		.replace(/[?]/g, "")
		.replace(/\//g, " and ")
		.replace(/%/g, "percent")
		.replace(/\.\s/g, " ")

	if (section.numberPrefix) {
		return `${section.numberPrefix} ${safeName}.md`
	}

	return `${safeName}.md`
}

// ── main conversion pipeline ───────────────────────────────────────────────────

export async function convert(inputPath: string, outputDir: string): Promise<string[]> {
	const html = fs.readFileSync(inputPath, "utf-8")
	const manualName = path.basename(outputDir)

	console.log(`converting ${inputPath} -> ${outputDir}/`)

	const tree = fromHtml(html, { fragment: false })
	const format = detectFormat(tree)
	const footnotes = parseFootnotes(tree)
	const imageSrcs = collectImageSrcs(tree)

	console.log(`  detected format: ${format}`)

	const topSection = extractTopSection(tree)
	const bodySections =
		format === "texinfo7"
			? extractSectionsTexinfo7(tree)
			: extractSectionsTexinfo6(tree)

	const sections = topSection ? [topSection, ...bodySections] : bodySections

	console.log(`  found ${sections.length} sections, ${footnotes.size} footnotes`)

	if (imageSrcs.length) {
		console.log(`  found ${imageSrcs.length} image(s): ${imageSrcs.join(", ")}`)
	}

	fs.mkdirSync(outputDir, { recursive: true })

	for (const section of sections) {
		const md = await hastToMarkdown(section.content, manualName, footnotes, section.footnoteIds)

		const frontmatter = `---\nslug: ${section.slug}\n---\n\n`
		const filename = buildFilename(section)
		const fullPath = path.join(outputDir, filename)

		fs.writeFileSync(fullPath, frontmatter + md + "\n")
		console.log(`  wrote ${filename}`)
	}

	console.log(`done. ${sections.length} files written to ${outputDir}/`)

	return imageSrcs
}

// ── cli entry ──────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
	const [inputPath, outputDir] = process.argv.slice(2)

	if (!inputPath || !outputDir) {
		console.error("usage: converter.ts <input.html> <output-dir>")
		console.error("  e.g. converter.ts raw_manuals/emacs.html docs/emacs")
		process.exit(1)
	}

	if (!fs.existsSync(inputPath)) {
		console.error(`input file not found: ${inputPath}`)
		process.exit(1)
	}

	await convert(inputPath, outputDir)
}

const isDirectRun = process.argv[1]?.endsWith("converter.ts") || process.argv[1]?.endsWith("converter.js")

if (isDirectRun) {
	main()
}
