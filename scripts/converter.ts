#! /usr/bin/node

//import mdProcessor from '../htmlToMDX.js'
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
import replaceHeadings from './replaceHeadings'
import badConverter from './badconverter'
import { getPrefix } from './getPrefix'

const rehypeProcessor = unified()
  // .use(remarkGFM)
  .use(remarkMdx)
  .use(remarkGFM)
  .use(rehypeRemark, {
    handlers: {
      // comment: (h, node) => h(node, 'text', ''),
      footnoteReference(h, node) {
        return h(node, 'footnoteReference', {
          label: node.label,
          identifier: node.identifier,
        })
      },
      footnoteDefinition(h, node) {
        const wrapped = h.wrapText
        h.wrapText = false
        const result = h(
          node,
          'footnoteDefinition',
          { label: node.label, identifier: node.identifier },
          all(h, node),
        )
        h.wrapText = wrapped
        return result
      },
    },
  })

  .use(() => (node) => {
    visit(node, 'code', (element) => {
      if (!element.value) {
        element.type = 'text'
        element.value = ''
        return
      }
      element.lang = 'lisp'
    })
  })

  // get rid of those dang tables in auctex, like whyyyyyy the tables,
  // this isn't gosh darn 2003
  .use(() => (node) => {
    visit(node, 'table', (table) => {
      fs.writeFileSync('./table', JSON.stringify(table, null, 2))
      let codeBlocksTrappedInTables = []
      visit(table, 'code', (code) => {
        codeBlocksTrappedInTables.push(code)
      })
      if (codeBlocksTrappedInTables.length !== 1) return

      const trappedCode = codeBlocksTrappedInTables[0]
      Object.assign(table, trappedCode)
    })
  })
  // .use(() => (node) => {
  //   visit(node, 'text', (text) => {
  //     if (text.value.includes('<') || text.value.includes('>')) {
  //       text.value = text.value.replaceAll(/</g, '\\<')
  //       text.value = text.value.replaceAll(/(?<!\\)>/g, '\\>')
  //     }
  //   })
  // })
  .use(() => (node) => {
    visit(node, 'heading', (heading) => {
      // Auctex hides the keyword in an emphasis tag , sneakyy
      const keywordIsTextNode = heading?.children?.[0].type === 'text'

      const headingWord = keywordIsTextNode
        ? heading?.children?.[0]?.value
        : heading?.children?.[0]?.children?.[0]?.value

      if (!headingWord?.includes(':')) return

      const [keyword, word] = headingWord.replaceAll(/(\w+):(.*?)/g, '$1@$2').split('@')

      if (keywordIsTextNode) {
        heading.children[0].value = word
      } else {
        heading.children = heading.children.slice(1)
      }

      const mdxEl = {
        type: 'mdxJsxTextElement',
        name: 'span',
        attributes: [
          {
            type: 'mdxJsXAttribute',
            name: 'className',
            value: `tag ${keyword.toLowerCase().replaceAll(/ /g, '')}`,
          },
        ],
        children: [{ type: 'inlineCode', value: keyword.toLowerCase() }],
      }

      const kids = [mdxEl, ...heading.children]

      heading.children = kids
    })
    // visit from unist-util-visit
    // visit(node, 'root', (root) => {
    //   const childs = root.children

    //   const newChilds = childs.flatMap((child) => {
    //     if (child.type !== 'list') return child

    //     if (child.ordered) return child
    //     const items = child.children

    //     const reworkedList = items.flatMap((listItem) => {
    //       const listItemContents = listItem?.children

    //       const heading = listItemContents?.[0]

    //       const kids = [mdxEl, ...heading.children]
    //       // if (heading?.type !== 'paragraph') return listItemContents

    //       const newHeading = Object.fromEntries([
    //         ['type', 'heading'],
    //         ['depth', 3],
    //         ['children', kids || []],
    //       ])

    //       return [newHeading, ...listItemContents.slice(1)]
    //     })

    //     return reworkedList
    //   })
    //   root.children = newChilds
    // })
    // fix the last fucking mistakes
    findAndReplace(node, '”', '"')
    findAndReplace(node, '>', '﹥')
    findAndReplace(node, '<', '﹤')
  })
  .use(remarkStringify)

const bigFileProcessor = (f, dir) =>
  unified()
    .use(rehypeParse, {
      emitParseErrors: true,
      duplicateAttribute: false,
    })
    .use(() => (node) => {
      dir === 'auctex' && fs.writeFileSync('./auctextree', JSON.stringify(node, null, 2))
      visit(node, 'element', (link) => {
        if (link.tagName !== 'a') return
        if (!link?.properties?.href) {
          link.tagName = 'span'
          link.properties.id = link.properties.name
          return
        }

        if (link?.properties?.href?.includes('FOOT')) return
        if (link?.properties?.href?.includes('https://')) return

        const cleanerLink = link.properties.href.replaceAll(/.*?#/g, '')

        // const comparedNames = (list, name) => {
        //   const unsorted = list.map((filename) => ({
        //     filename,
        //     sim: similarity(filename || '', name || ''),
        //   }))
        //   const sorted = unsorted.sort((a, b) => a.sim - b.sim)
        //   return sorted.reverse()
        // }

        // const goodLinks = () => {
        //   if (dirContents[dir].includes(cleanerLink)) return cleanerLink

        //   return comparedNames(dirContents[dir], cleanerLink)?.[0]?.filename
        // }
        //const newLink = goodLinks()
        // link.properties.href = newLink || cleanerLink
        link.properties.href = `/docs/${dir}/${cleanerLink}`
      })
    })
    .use(
      () => (node) =>
        // Make all the h4s into h3s so the heading structure is better
        // and the headers show up on the side

        //also make tags for kbds
        visit(node, 'element', (heading) => {
          if (heading?.tagName !== 'h4') return
          heading.tagName = 'h3'
          if (dir === 'org') heading.tagName = 'h2'
        }),
    )
    .use(() => (node) =>
      // Turn all lines which start with an inline code into a header, as these are usually
      // meant as headings
      // only really relevant for org files though, so we hard filter it
      {
        // if (dir !== 'org') return
        visit(node, 'element', (heading) => {
          if (heading?.tagName === 'dl') {
            heading.tagName = 'div'
            return
          }
          if (heading?.tagName === 'dd') {
            heading.tagName = 'div'
          }

          if (heading?.tagName === 'dt') {
            heading.tagName = 'h3'
            return
          }
        })
      },
    )
    // hmm yes very elegant solution
    // basically: loop through all the subnodes of the hast tree
    // chop up the tree in sections between "header" divs
    // parse, stringify and write those divs

    // i thought this would be easier than having to download all the individual files
    // from gnu, but it turns out this has more problems, such as needing to redo the links and footnotes
    // i 'solved" those but it's not ideal, for a second iteration i should just download all the files,
    // who cares if i ddos them a little
    .use(() => (node) => {
      let footNotes = {}
      visit(node, 'element', (heading) => {
        if (heading?.tagName !== 'div') return
        if (!heading?.properties?.className?.includes('footnote')) return

        const footNoteList = heading.children.reduce((acc, curr, index) => {
          if (curr.tagName !== 'h5') return acc

          const a = curr.children[0]
          // const thingy = toString(heading.children[index + 1])
          const thangy = heading.children[index + 2]
          //toString(heading.children[index + 1]) === '\n'
          // ?
          // : thingy
          acc[a.properties.id] = thangy
          return acc
        }, {})

        footNotes = footNoteList
      })

      //console.log(footNotes)
      visit(node, 'element', (bod) => {
        if (
          ['auctex', 'magit'].includes(dir)
            ? bod.tagName !== 'body'
            : bod.properties?.id !== 'content'
        )
          return
        let isCollecting = false
        let nodes = []
        let firstHeader = null
        let slugId = ''

        let alreadyDone = []
        // fs.writeFileSync('bod', JSON.stringify(bod, null, 2))
        const content = bod.children

        const headingObject = JSON.parse(
          fs.readFileSync('./headingsToReplace.json', { encoding: 'utf8' }),
        )
        content.forEach((item, index) => {
          const isHeader =
            dir !== 'auctex'
              ? item.tagName === 'div' && item.properties?.className?.includes('header')
              : item.tagName === 'table' &&
                item?.properties?.cellSpacing == '1' &&
                item?.properties?.cellPadding == '1' &&
                item?.properties?.border == '0'

          //<table cellpadding="1" cellspacing="1" border="0">

          if (!isHeader) {
            if (!slugId) {
              slugId = content[index - 2]?.properties?.id || content[index - 5]?.properties?.name
            }
            if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(item.tagName) && !firstHeader) {
              firstHeader = item
              item.tagName = 'h2'
              const headerTitle = replaceHeadings({
                heading: toString(item),
                headingObject,
              })
              const pref = getPrefix(headerTitle).prefix
              if (pref.length === 4) {
                nodes.push(item)
              }
              return
            }
            // magit has a lot of empty links, which need to be removed
            if (item.tagName === 'a' && !item?.properties?.href) return
            if (item.tagName === 'hr') return

            nodes.push(item)
            return
          }

          const newTreeBeforeFootNotes = {
            type: 'root',
            children: [
              {
                type: 'element',
                tagName: 'body',
                children: nodes,
              },
            ],
          }

          let footNoteCounter = 0
          let footNoteLinks = []

          visit(newTreeBeforeFootNotes, 'element', (footnote) => {
            const href = footnote?.properties?.href
            if (!href) return
            if (!href.includes('#FOOT')) return

            footNoteLinks.push(href.replaceAll(/#/g, ''))
            footNoteCounter++

            // footnote.properties.href = `#f${footNoteCounter}`
            // footnote.properties.id = `l$${footNoteCounter}`
            footnote.label = footNoteCounter
            footnote.identifier = footNoteCounter
            footnote.tagName = 'footnoteReference'
            footnote.children = []
            footnote.properties = {}
          })

          const feet = {
            type: 'element',
            tagName: 'div',
            className: 'footnotediv',
            children: footNoteLinks.map((link, index) => {
              const textnode = footNotes[link]

              return {
                type: 'element',
                tagName: 'footnoteDefinition',
                children: textnode
                  ? [textnode]
                  : [
                      {
                        type: 'element',
                        tag: 'p',
                        children: [{ type: 'text', value: 'ERROR' }],
                      },
                    ],

                identifier: `${index + 1}`,
                label: `${index + 1}`,
                // properties: { id: `f${index}` },
              }
            }) || [
              {
                type: 'element',
                tag: 'p',
                children: [{ type: 'text', value: 'ERROR' }],
              },
            ],
          }

          const footsies = footNoteLinks?.length
            ? [...newTreeBeforeFootNotes.children, feet]
            : [...newTreeBeforeFootNotes.children]

          const newTree = {
            type: 'root',
            children: [
              {
                type: 'element',
                tagName: 'body',
                children: footsies,
              },
            ],
          }

          footNoteLinks.length && fs.writeFileSync('./footrefs', JSON.stringify(newTree, null, 2))
          footNoteLinks.length && fs.writeFileSync('./feet', JSON.stringify(feet, null, 2))
          const title = firstHeader
            ? replaceHeadings({
                heading: toString(firstHeader),
                headingObject,
              })
            : 'empty'
          isCollecting = false

          if (!firstHeader) return

          //slugId = content[index - 1]?.properties?.id

          //paste footnotes at the bottom of the files

          nodes = []
          firstHeader = null

          if (title === 'empty') return

          if (alreadyDone.includes(title)) return
          alreadyDone.push(title)

          let cleanTitle = title.replaceAll(/\?/g, '')
          cleanTitle = cleanTitle.replaceAll(/\//g, ' and ')
          cleanTitle = cleanTitle.replaceAll(/\%/g, 'precentage')
          cleanTitle = cleanTitle.replaceAll(/Appendix /g, '')
          cleanTitle = cleanTitle.replaceAll(/\. /g, ' ')
          const { prefix, title: formattedTitle } = getPrefix(cleanTitle)
          const titles = formattedTitle || cleanTitle

          let newSlug = slugId
          slugId = ''

          rehypeProcessor.run(newTree).then((f) => {
            const rawFile = rehypeProcessor.stringify(f)
            const formattedTitleWithDashes = titles?.replaceAll(/ /g, '-')
            const fileWithMetadata = `---\nslug: ${
              newSlug || formattedTitleWithDashes
            }\n---\n\n${String(rawFile)}`

            if (prefix.length > 3) {
              const directory = fs.readdirSync(dir)
              const ogFile = directory.find((file) => {
                const filePrefix = getPrefix(file).prefix
                return (
                  filePrefix[0] === prefix[0] &&
                  filePrefix[1] === prefix[1] &&
                  filePrefix[2] === prefix[2]
                )
              })
              ogFile && fs.appendFileSync(`${dir}/${ogFile}`, rawFile)
              return
            }

            fs.writeFileSync(`${dir}/${cleanTitle}.md`, fileWithMetadata)
          })
        })
      })
    })

const convertHtmlToMd = ({ file, filepath }) => {
  const tree = bigFileProcessor().parse(file)

  const dir = `${path.basename(filepath, '.html')}`

  const newProc = bigFileProcessor(tree, dir)
  newProc.data('type', dir)

  fs.existsSync(dir) || fs.mkdirSync(dir)

  newProc.run(tree).then((r) => console.log(r))
}

const parseLoop = (dir, filepath = null) => {
  if (!filepath) {
    const sub = fs.readdirSync(dir)
    sub.forEach((f) => parseLoop(dir, f))
    return
  }

  if (fs.lstatSync(path.join(dir, filepath)).isDirectory()) {
    const sub = fs.readdirSync(path.join(dir, filepath))
    sub.forEach((f) => parseLoop(dir, path.join(dir, filepath, f)))
    return
  }

  const file = fs.readFileSync(path.join(dir, filepath), {
    encoding: 'utf8',
  })

  if (['Index', '_'].some((thing) => filepath.includes(thing))) {
    badConverter({ filepath, file })
  }

  convertHtmlToMd({ file, filepath: path.join(dir, filepath) })
}
function main() {
  const dir = `../raw_manuals`

  parseLoop(dir)
}

main()

//module.exports = { getPrefix }
