import fs from 'fs'
import path from 'path'
import remarkMdx from 'remark-mdx'
import mdxMetadata from 'remark-mdx-metadata'
import rehypeAttributes from 'rehype-attributes'
import { selectAll } from 'unist-util-select'
import { toString } from 'hast-util-to-string'
//export const converter = (dir) =>

import { all } from 'hast-util-to-mdast'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGFM from 'remark-gfm'
import { reporter } from 'vfile-reporter'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkStringify from 'remark-stringify'
import { visit } from 'unist-util-visit'

import { link } from 'fs/promises'
import { findAndReplace } from 'mdast-util-find-and-replace'

export default function badConverter({ filepath, file }) {
  const proc = unified()
    .use(rehypeParse)
    .use(() => (node) => {
      visit(node, 'element', (item) => {
        if (item.tagName === 'p') {
          item.children = []
        }
        if (item.tagName === 'hr') {
          item.tagName = 'p'
          item.children = []
        }
        const isHeader =
          (item.tagName === 'div' &&
            item.properties?.className?.includes('header')) ||
          (item.tagName === 'table' &&
            item?.properties?.cellSpacing == '1' &&
            item?.properties?.cellPadding == '1' &&
            item?.properties?.border == '0')

        if (isHeader) {
          item.children = []
          item.tagName = 'p'
          item.properties = {}
        }
      })
      visit(node, 'element', (link) => {
        if (link?.tagName !== 'a') return
        if (!link.properties) return

        if (link.properties?.name) {
          link.tagName = 'p'
        }
        const cleanerLink = link.properties?.href?.replace(/\.html/g, '') || ''
        const cl = cleanerLink.replace(/(.)\#.*/g, '$1') || ''
        link.properties.href = cl
      })
    })
    .use(rehypeRemark, {
      handlers: {
        comment: (h, node) => h(node, 'text', ''),
      },
    })
    .use(remarkMdx)
    .use(remarkGFM)
    .use(remarkStringify)

  const betterpath = path.basename(filepath, '.html')
  proc
    .process(file)
    .then((res) => fs.writeFileSync(`${betterpath}.md`, String(res)))
}
