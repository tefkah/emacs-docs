#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { convert } from "./converter.ts"

// ── config ─────────────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, "..")
const RAW_DIR = path.join(ROOT_DIR, "raw_manuals")
const DOCS_DIR = path.join(ROOT_DIR, "docs")

interface ManualConfig {
	url: string
	outputName: string
}

// single-page manuals that can be downloaded directly
const SIMPLE_MANUALS: ManualConfig[] = [
	{
		url: "https://www.gnu.org/software/emacs/manual/html_mono/emacs.html",
		outputName: "emacs",
	},
	{
		url: "https://www.gnu.org/software/emacs/manual/html_mono/elisp.html",
		outputName: "elisp",
	},
	{
		url: "https://www.gnu.org/software/emacs/manual/html_mono/org.html",
		outputName: "org",
	},
	{
		url: "https://elpa.gnu.org/packages/doc/auctex.html",
		outputName: "auctex",
	},
]

// magit needs special handling: multi-page manual that we concatenate
const MAGIT_ROOT_URL = "https://docs.magit.vc/magit/"
const MAGIT_OUTPUT_NAME = "magit"

// ── fetch helpers ──────────────────────────────────────────────────────────────

async function fetchText(url: string): Promise<string> {
	console.log(`  fetching ${url}`)
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`failed fetching "${url}" (${response.status} ${response.statusText})`)
	}

	return response.text()
}

async function fetchBinary(url: string): Promise<ArrayBuffer> {
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(`failed fetching image "${url}" (${response.status} ${response.statusText})`)
	}

	return response.arrayBuffer()
}

// ── image downloading ──────────────────────────────────────────────────────────

async function downloadImages(
	imageSrcs: string[],
	baseUrl: string,
	outputDir: string,
): Promise<void> {
	if (!imageSrcs.length) return

	for (const src of imageSrcs) {
		const imageUrl = new URL(src, baseUrl).toString()
		const destPath = path.join(outputDir, src)

		console.log(`  downloading image ${imageUrl} -> ${destPath}`)

		try {
			const data = await fetchBinary(imageUrl)
			fs.mkdirSync(path.dirname(destPath), { recursive: true })
			fs.writeFileSync(destPath, Buffer.from(data))
		} catch (err) {
			console.warn(`  warning: could not download image ${imageUrl}: ${err}`)
		}
	}
}

// ── magit multi-page concatenation ─────────────────────────────────────────────

function extractAllTocLinks(html: string, baseUrl: string): string[] {
	const links: string[] = []
	const dedupe = new Set<string>()

	const hrefRegex = /<a\b[^>]*href="([^"]+\.html)"/gi
	// only look inside the TOC section
	const tocStart = html.indexOf('class="toc-numbered-mark"')
	const tocEnd = html.indexOf("</div>", html.indexOf("</ul>", tocStart))
	const tocHtml = tocStart >= 0 && tocEnd >= 0 ? html.slice(tocStart, tocEnd) : ""

	if (!tocHtml) return links

	for (const match of tocHtml.matchAll(hrefRegex)) {
		const href = match[1]

		if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
			continue
		}

		const absoluteUrl = new URL(href, baseUrl).toString()

		if (!dedupe.has(absoluteUrl)) {
			dedupe.add(absoluteUrl)
			links.push(absoluteUrl)
		}
	}

	return links
}

function extractBodyInnerHtml(html: string): string {
	const bodyMatch = /<body\b[^>]*>([\s\S]*?)<\/body>/i.exec(html)
	if (!bodyMatch) {
		throw new Error("could not extract <body>...</body> from fetched page")
	}

	return bodyMatch[1].trim()
}

async function fetchMagitConcatenated(): Promise<string> {
	console.log("fetching magit manual (multi-page)...")

	const rootHtml = await fetchText(MAGIT_ROOT_URL)
	const allLinks = extractAllTocLinks(rootHtml, MAGIT_ROOT_URL)

	console.log(`  found ${allLinks.length} linked pages in TOC`)

	const pagesToFetch = [MAGIT_ROOT_URL, ...allLinks]

	const pages = await Promise.all(
		pagesToFetch.map(async (url) => {
			const html = await fetchText(url)
			return { url, html }
		}),
	)

	const bodySegments = pages.flatMap((page) => [
		`<!-- source: ${page.url} -->`,
		extractBodyInnerHtml(page.html),
		'<div class="header"></div>',
	])

	return [
		"<!DOCTYPE html>",
		"<html>",
		"<head>",
		'<meta charset="utf-8">',
		"<title>Magit User Manual (concatenated)</title>",
		"</head>",
		"<body>",
		bodySegments.join("\n\n"),
		"</body>",
		"</html>",
		"",
	].join("\n")
}

// ── main pipeline ──────────────────────────────────────────────────────────────

async function main(): Promise<void> {
	fs.mkdirSync(RAW_DIR, { recursive: true })

	// download all simple manuals
	console.log("downloading manuals...\n")

	for (const manual of SIMPLE_MANUALS) {
		const destPath = path.join(RAW_DIR, `${manual.outputName}.html`)

		console.log(`[${manual.outputName}]`)
		const html = await fetchText(manual.url)
		fs.writeFileSync(destPath, html)
		console.log(`  saved to ${destPath}\n`)
	}

	// download and concatenate magit
	console.log("[magit]")
	const magitHtml = await fetchMagitConcatenated()
	const magitPath = path.join(RAW_DIR, "magit.html")
	fs.writeFileSync(magitPath, magitHtml)
	console.log(`  saved to ${magitPath}\n`)

	// convert all manuals
	console.log("\nconverting manuals...\n")

	for (const manual of [...SIMPLE_MANUALS, { url: "", outputName: MAGIT_OUTPUT_NAME }]) {
		const inputPath = path.join(RAW_DIR, `${manual.outputName}.html`)
		const outputDir = path.join(DOCS_DIR, manual.outputName)

		console.log(`\n[${manual.outputName}]`)

		const imageSrcs = await convert(inputPath, outputDir)

		// download any images referenced in the html
		if (imageSrcs.length) {
			const baseUrl = manual.url || MAGIT_ROOT_URL
			await downloadImages(imageSrcs, baseUrl, outputDir)
		}
	}

	console.log("\nall done.")
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
