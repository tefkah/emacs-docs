//import mdProcessor from '../htmlToMDX.js'
import fs from 'fs'
import path from 'path'
import remarkMdx from 'remark-mdx'
import mdxMetadata from 'remark-mdx-metadata'
import rehypeAttributes from 'rehype-attributes'
import { select } from 'unist-util-select'
import { Node, Element, Root, toString } from 'hast-util-to-string'
//export const converter = (dir) =>

import remarkFrontmatter from 'remark-frontmatter'
import remarkGFM from 'remark-gfm'
import { reporter } from 'vfile-reporter'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkStringify from 'remark-stringify'
import { visit } from 'unist-util-visit'
import { Content, ElementContent } from 'hast'
import fetch from 'node-fetch'
import { BlockContent, Heading, Content as MdastContent } from 'mdast'

import { similarity } from './findSimilarity'

const license =
  'This is the GNU Emacs Lisp Reference Manual\ncorresponding to Emacs version 27.2.\n\nCopyright (C) 1990-1996, 1998-2021 Free Software Foundation,\nInc.\n\nPermission is granted to copy, distribute and/or modify this document\nunder the terms of the GNU Free Documentation License, Version 1.3 or\nany later version published by the Free Software Foundation; with the\nInvariant Sections being "GNU General Public License," with the\nFront-Cover Texts being "A GNU Manual," and with the Back-Cover\nTexts as in (a) below.  A copy of the license is included in the\nsection entitled "GNU Free Documentation License."\n\n(a) The FSF\'s Back-Cover Text is: "You have the freedom to copy and\nmodify this GNU manual.  Buying copies from the FSF supports it in\ndeveloping GNU and promoting software freedom." '

const rehypeProcessor = unified()
  .use(rehypeRemark, {
    handlers: {
      comment: (h, node) => h(node, 'text', ''),
    },
  })

  .use(() => (node) => {
    visit(node, 'code', (element) => {
      element.lang = 'lisp'
    })
  })
  .use(remarkGFM)

  .use(remarkMdx)
  .use(() => (node) => {
    visit(node, 'text', (text) => {
      if (text.value.includes('<') || text.value.includes('>')) {
        text.value = text.value.replaceAll(/</g, '\\<')
        text.value = text.value.replaceAll(/(?<!\\)>/g, '\\>')
      }
    })
  })
  .use(() => (node) => {
    // visit from unist-util-visit
    visit(node, 'root', (root) => {
      const childs = root.children

      const newChilds: MdastContent[] = childs.flatMap((child: MdastContent) => {
        if (child.type !== 'list') return child

        if (child.ordered) return child
        const items = child.children

        const reworkedList = items.flatMap((listItem) => {
          const listItemContents = listItem?.children

          const heading = listItemContents?.[0]
          if (heading.type !== 'paragraph') return listItem.children

          const headingWordNode = heading?.children?.[0]
          if (headingWordNode.type !== 'text') return listItem.children

          const headingWord = headingWordNode.value

          if (!headingWord?.includes(':')) return listItem.children

          if (heading?.type !== 'paragraph') return listItemContents

          const newHeading = Object.fromEntries([
            ['type', 'heading'],
            ['depth', 3],
            ['children', heading?.children || []],
          ])

          return [newHeading, ...listItemContents.slice(1)]
        })

        return reworkedList
      })
      root.children = newChilds
    })
  })
  .use(() => (tree) => fs.writeFileSync('test', JSON.stringify(tree, null, 2)))
  .use(remarkStringify)

interface BigFileProcessor {
  parseThing: any
  dir: string
  dirContents: { [dir: string]: string[] }
  destDir: string
}
const bigFileProcessor = (props: BigFileProcessor) => {
  const { parseThing, dir, dirContents, destDir } = props
  return unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      duplicateAttribute: false,
    })
    .use(() => (node) => {
      visit(node, 'element', (link) => {
        if (link.tagName !== 'a') return
        const href = link?.properties?.href as string

        if (href?.includes('FOOT')) return

        const cleanerLink = href?.replaceAll(/.*?#/g, '')

        const comparedNames = (list, name) => {
          const unsorted = list.map((filename) => ({
            filename,
            sim: similarity(filename || '', name || ''),
          }))
          const sorted = unsorted.sort((a, b) => a.sim - b.sim)
          return sorted.reverse()
        }

        const goodLinks = () => {
          if (dirContents[dir].includes(cleanerLink)) return cleanerLink

          //console.log('___________________________________')
          // console.log(cleanerLink)
          // console.log(comparedNames(emacsNames, cleanerLink))
          return comparedNames(dirContents[dir], cleanerLink)?.[0]?.filename
        }
        const newLink = goodLinks()
        if (!link?.properties?.href) return

        link.properties.href = newLink || cleanerLink
      })
    })
    .use(() => (node) => {
      visit(node, 'element', (bod) => {
        if (bod.properties?.id !== 'content') return
        let isCollecting = false
        let nodes: ElementContent[] = []
        let firstHeader: Element | null = null

        let alreadyDone: string[] = []
        fs.writeFileSync('bod', JSON.stringify(bod, null, 2))
        const content = bod.children

        content.forEach((item: ElementContent) => {
          const elementItem = item as Element
          const isHeader =
            elementItem?.tagName === 'div' &&
            (elementItem?.properties?.className as string)?.includes('header')

          if (!isHeader) {
            if (
              ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(elementItem?.tagName) &&
              !firstHeader
            ) {
              firstHeader = elementItem!
              if (item.type === 'element') {
                item.tagName = 'h2'
              }
              const headerTitle = toString(elementItem)
              const pref = getPrefix(headerTitle).prefix
              if (pref.length === 4) {
                nodes.push(item)
              }
              return
            }

            nodes.push(item)
            return
          }

          const newTree: Root = {
            type: 'root',
            children: [
              {
                type: 'element',
                tagName: 'body',
                children: nodes,
              },
            ],
          }

          const title = firstHeader ? toString(firstHeader) : 'empty'
          isCollecting = false
          nodes = []
          if (!firstHeader) return

          firstHeader = null

          rehypeProcessor.run(newTree).then((f) => {
            if (title === 'empty') return

            if (alreadyDone.includes(title)) return
            alreadyDone.push(title)
            let cleanTitle = title.replaceAll(/\?/g, '')
            cleanTitle = cleanTitle.replaceAll(/\//g, ' and ')
            cleanTitle = cleanTitle.replaceAll(/\%/g, 'precentage')
            const { prefix, title: formattedTitle } = getPrefix(cleanTitle)

            const rawFile = rehypeProcessor.stringify(f)
            const formattedTitleWithDashes = formattedTitle?.replaceAll(/ /g, '-')
            const fileWithMetadata = `---\nslug: ${formattedTitleWithDashes}\n---
            
            ${String(rawFile)}`

            // This is kind of jank but it works 🤷‍♀️
            if (prefix.length > 3) {
              const directory = fs.readdirSync(destDir)
              const ogFile = directory.find((file) => {
                const filePrefix = getPrefix(file).prefix
                return (
                  filePrefix[0] === prefix[0] &&
                  filePrefix[1] === prefix[1] &&
                  filePrefix[2] === prefix[2]
                )
              })
              ogFile && fs.appendFileSync(`${destDir}/${ogFile}`, rawFile)
              return
            }

            fs.writeFileSync(`${destDir}/${cleanTitle}.md`, fileWithMetadata)
          })
        })
      })
    })
}

const main = () => {
  const manualBaseUrl = 'https://www.gnu.org/software/emacs/manual/html_mono/'
  const rawDir = '../raw_manuals/'
  const destDir = '../docs.'
  const dirs = ['org', 'elisp', 'emacs']

  const dirContents = dirs.reduce<{ [dir: string]: string[] }>((acc, dir) => {
    acc[dir] = JSON.parse(fs.readFileSync(`${rawDir}/${dir}.json`, { encoding: 'utf8' }))
    return acc
  }, {})

  const big = fs.readdirSync(rawDir)

  dirs.forEach((manualName) => {
    const rawHTML = fetch(`${manualBaseUrl}/${manualName}.html`)
      .then((res) => res.text())
      .then((file) => {
        // const file = fs.readFileSync(`${rawDir}/${filepath}`, {
        //   encoding: 'utf8',
        // })

        const proc = bigFileProcessor({ parseThing: file, dir: manualName, dirContents, destDir })
        const tree = proc.parse()

        const newProc = bigFileProcessor({
          parseThing: tree,
          dir: manualName,
          dirContents,
          destDir,
        })
        newProc.data('type', manualName)

        fs.existsSync(`${destDir}/${manualName}`) || fs.mkdirSync(`${destDir}/${manualName}`)

        newProc.run(tree).then((r) => {})
      })
  })
}

main()

export function getPrefix(str) {
  const [pref, title] = str.replaceAll(/(\w+\/)?([\d\.]+) (.*?)/g, '$2@$3').split('@')

  return { prefix: pref.split('.'), title }
}

//module.exports = { getPrefix }
