// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
//const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const darkCodeTheme = require('./src/css/doom-one')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Emacs Docs',
  tagline: 'The modern documentation website Emacs deserves.',
  url: 'https://emacsdocs.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'ThomasFKJorna', // Usually your GitHub org/user name.
  projectName: 'emacs-docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // numberPrefixParser: true,
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            numberPrefixParser,
            item,
            version,
            docs,
            options,
          }) {
            // Example: return an hardcoded list of static sidebar items
            const initialItems = await defaultSidebarItemsGenerator({
              options,
              item,
              version,
              docs,
              numberPrefixParser,
            })
            const dirs = createSidebarDirs(numberPrefixParser, initialItems)
            return dirs
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      sitemap: { changefreq: 'weekly', priority: 0.5, trailingSlash: false },

      image: 'img/Banner.png',
      metadata: [{ name: 'summary', content: 'The modern documentation website Emacs deserves.' }],
      hideableSidebar: true,
      navbar: {
        hideOnScroll: true,
        title: 'Emacs Docs',
        logo: {
          alt: 'Emacs',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'emacs/The Emacs Editor',
            position: 'right',
            label: 'Emacs',
            className: 'emacs',
          },
          {
            type: 'doc',
            docId: 'elisp/Emacs Lisp',
            position: 'right',
            label: 'Elisp',
            className: 'elisp',
          },
          {
            type: 'doc',
            docId: 'org/The Org Manual',
            position: 'right',
            label: 'Org-Mode',
            className: 'org',
          },
          {
            type: 'doc',
            docId: 'auctex/AUCTeX',
            position: 'right',
            label: 'AUCTeX',
            className: 'auctex',
          },
          {
            type: 'doc',
            docId: 'magit/Magit User Manual',
            position: 'right',
            label: 'Magit',
            className: 'magit',
          },
          //{ to: "/blog", label: "Blog", position: "left" },
          {
            href: 'https://github.com/ThomasFKJorna/emacs-docs',
            className: 'github-icon',
            position: 'right',
            icon: 'github',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Emacs',
                to: '/docs/emacs/The-Emacs-Editor',
              },
              {
                label: 'Elisp',
                to: '/docs/elisp/Emacs-Lisp',
              },
              {
                label: 'Org-Mode',
                to: '/docs/org/The-Org-Manual',
              },
              {
                label: 'AUCTeX',
                to: '/docs/auctex/Top',
              },
              {
                label: 'Magit',
                to: '/docs/magit/Magit-User-Manual',
              },
            ],
          },
          {
            title: 'FSF',
            items: [
              {
                label: 'GNU website',
                href: 'https://www.gnu.org/',
              },
              {
                label: 'FSF Shop',
                href: 'https://shop.fsf.org/',
              },
              {
                label: 'Donate to FSF',
                href: 'https://my.fsf.org/donate',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'FAQ',
                to: '/blog/FAQ',
              },
              {
                label: 'License',
                to: '/blog/License',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ThomasFKJorna/emacs-docs',
              },
            ],
          },
        ],
        copyright: `Copyright Website © ${new Date().getFullYear()} Thomas F. K. Jorna. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lisp'],
      },
      respectsPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      },
    }),
  // typesense: {
  //   typesenseCollectionName: 'emacs-docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

  //   typesenseServerConfig: {
  //     nodes: [
  //       {
  //         host: 'xxx-1.a1.typesense.net',
  //         port: 443,
  //         protocol: 'https',
  //       },
  //       {
  //         host: 'xxx-2.a1.typesense.net',
  //         port: 443,
  //         protocol: 'https',
  //       },
  //       {
  //         host: 'xxx-3.a1.typesense.net',
  //         port: 443,
  //         protocol: 'https',
  //       },
  //     ],
  //     apiKey: 'xyz',
  //   },

  //   // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.html#arguments
  //   typesenseSearchParameters: {},

  //   // Optional
  //   contextualSearch: true,
  // },

  plugins: [
    // ... Your other plugins.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: 'en',
        docsRouteBasePath: ['docs/org', 'docs/auctex', 'docs/emacs', 'docs/elisp'],
        docsDir: ['docs/org', 'docs/auctex', 'docs/emacs', 'docs/elisp'],

        // When indexing your documents, their content is split into "tokens".
        // Text entered into the search box is also tokenized.
        // This setting configures the separator used to determine where to split the text into tokens.
        // By default, it splits the text at whitespace and dashes.
        //
        // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
      },
    ],
  ],
}

function prefixParser(file) {
  const [prefix, filename] =
    file?.replace(/(\w+\/)?(Appendix )?([A-H\d\.]+) (.*?)/g, '$3@$4')?.split('@') || []

  return { prefix, filename }
}

/**
 * @param {import("@docusaurus/plugin-content-docs/src/types").NumberPrefixParser} numberPrefixParser
 * @param {import("@docusaurus/plugin-content-docs/src/sidebars/types").SidebarItem[]} unsortedItems
 */
function createSidebarDirs(numberPrefixParser, unsortedItems) {
  const firstItem = unsortedItems?.[0]
  if (firstItem?.type === 'link' || firstItem?.type === 'category') return

  const id = firstItem?.id || ''
  const dir = id.replace(/(\w+\/).*/g, '$1')

  const items = unsortedItems.sort((a, b) => {
    const compareUnits = [a, b]
    const [newa, newb] = compareUnits.map((unit) => {
      if (unit?.type !== 'doc') return
      let pref = prefixParser(unit.id).prefix?.split('.') || ['300']

      if (pref[0].replace(/[^A-H]/g, '')) return 300
      return parseInt(pref.map((p) => (p.length === 1 ? '0' + p : p)).join(''))
    })

    return newa - newb
  })

  const itemsWhichNeedCategories = Array.from(
    new Set(
      items.map((item) => {
        if (item?.type !== 'doc') return undefined

        const { prefix, filename } = prefixParser(item?.id)

        if (!prefix) return undefined

        const splitpref = prefix.split('.')

        if (splitpref.length > 2) return splitpref.slice(0, 2).join('.')

        if (splitpref.length === 1) return splitpref[0]

        return undefined
      }),
    ),
  )
    ?.map((prefix) => {
      const categoryName = items.find((item) => {
        if (item.type !== 'doc') return false
        const namePrefix = prefixParser(item.id).prefix
        return namePrefix === prefix
      })
      if (categoryName?.type !== 'doc') return prefix
      const lab = categoryName?.id?.replace(/\w+\//g, '') || undefined
      return {
        type: 'category',
        label: lab,
        collapsed: true,
        collapsible: true,
        items: [],
      }
    })
    .filter((cat) => cat?.label)

  const manualLabelPrefixes = itemsWhichNeedCategories.map(
    ({ label }) => prefixParser(label).prefix,
  )

  // add the docs to their corresponding categories
  const thingsAddedInDirs = itemsWhichNeedCategories.map((category) => {
    const catPrefix = prefixParser(category.label).prefix

    const directDescendant = items.find((item) => {
      if (item.type !== 'doc') return
      const itemPrefix = prefixParser(item.id).prefix
      return catPrefix === itemPrefix
    })

    const backupDesc = { type: 'doc', id: `${dir}${category.label}` }
    const introfiedDirectDescendant = {
      ...(directDescendant || backupDesc),
      label: 'Introduction',
    }

    const splitCatPrefix = catPrefix.split('.')

    // const forbiddenPrefixes = manualLabelPrefixes.reduce((acc, labelPrefix) => {
    //   if (splitCatPrefix.length > 1) return []

    //   const splitLabelPrefix = labelPrefix.split('.')
    //   splitLabelPrefix[0] === splitCatPrefix[0] && acc.push(labelPrefix)
    //   return acc
    // }, [])

    const subItems = items.reduce((acc, item) => {
      if (item.type !== 'doc') return acc
      const itemPrefix = prefixParser(item.id).prefix
      const splitItemPrefix = itemPrefix?.split('.')

      // if (forbiddenPrefixes.includes(itemPrefix)) return acc;
      if (splitItemPrefix.length <= splitCatPrefix.length) return acc

      if (splitCatPrefix.length > 1 && splitItemPrefix.length > 2) {
        itemPrefix !== catPrefix &&
          splitItemPrefix.length > 2 &&
          splitItemPrefix[0] === splitCatPrefix[0] &&
          splitItemPrefix[1] === splitCatPrefix[1] &&
          acc.push(item)
        return acc
      }

      splitItemPrefix !== splitCatPrefix &&
        splitItemPrefix.length < 3 &&
        splitItemPrefix[0] === splitCatPrefix[0] &&
        acc.push(item)
      return acc
    }, [])

    return { ...category, items: [introfiedDirectDescendant, ...subItems] }
  })
  //console.dir(thingsAddedInDirs.slice(-10), { depth: null })

  // prepare lists of dirs and subdirs so we can put the former in the latter later
  const { dirs, subdirs } = thingsAddedInDirs.reduce(
    (acc, curr) => {
      const { dirs, subdirs } = acc

      const isSubdir = prefixParser(curr.label).prefix.split('.').length > 1
      isSubdir ? subdirs.push(curr) : dirs.push(curr)

      return { dirs, subdirs }
    },
    { dirs: [], subdirs: [] },
  )

  //put dirs in subdirs
  const final = dirs.map((dir) => ({
    ...dir,
    items: dir.items.reduce((acc, curr, index) => {
      if (curr.label === 'Introduction') return [curr]

      acc.push(curr)
      const currPrefix = prefixParser(curr.id).prefix.split('.')

      const nextDir = subdirs.find((subdir) => {
        const subdirPrefix = prefixParser(subdir.label).prefix.split('.')
        return (
          subdirPrefix[0] === currPrefix[0] &&
          parseInt(subdirPrefix[1]) === parseInt(currPrefix[1]) + 1
        )
      })

      nextDir && acc.push(nextDir)

      return acc
    }, []),
  }))
  //console.log(final)

  // filter out all the double categories/entries
  const filtered = final.map((cat) => {
    if (!cat.items?.length) {
      return cat
    }
    return {
      ...cat,
      items: cat.items.filter((item) => {
        if (item.type === 'category') return true

        return !cat.items.some((sub) => sub?.label === item?.id?.replace(/\w+\//g, ''))
      }),
    }
  })

  // now that we have sorted everything nicely we can get rid of all the prefixes
  const withoutPrefs = filtered.map((cat) => {
    const { prefix: catPrefix, filename: catLabel } = prefixParser(cat.label)
    const isAppendix = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(catPrefix[0])
    const categoryLabel = isAppendix ? `Appendix ${cat.label}` : catLabel || cat.label

    if (!cat.items?.length) {
      return { ...cat, label: categoryLabel }
    }
    return {
      ...cat,
      label: categoryLabel,
      items: cat?.items?.map((subCat) => {
        const subCatLabel = prefixParser(subCat.label || subCat.id).filename
        if (subCat.type === 'doc') {
          if (subCat.label) return subCat
          return { ...subCat, label: subCatLabel }
        }
        return {
          ...subCat,
          label: subCatLabel || subCat.label,
          items: subCat?.items?.map((subsubCat) => {
            const subsubCatLabel = prefixParser(subsubCat.id).filename
            if (subsubCat.label) return subsubCat
            return { ...subsubCat, label: subsubCatLabel }
          }),
        }
      }),
    }
  })

  const withNoOneMemberCategories = withoutPrefs.map((category) => {
    if (!category?.items?.length) return category
    if (category?.items?.length > 1) return category

    return { label: category.label, type: 'doc', id: category.items?.[0]?.id || 'intro' }
  })

  const firstItems = [
    'The Emacs Editor',
    'The Org Manual',
    'Emacs Lisp',
    'Table of Contents',
    'AUCTeX',
    'Copying',
    'Distribution',
    'Magit User Manual',
  ]

  const notAppendices = [
    'Acknowledgments',
    'Command and Function Index',
    'Command-Line Option Index',
    'Distribution',
    'Function Index',
    'Footnotes',
    'Copying',
    'Concept Index',
    'Glossary',
  ]

  const withSpecialItems = withNoOneMemberCategories.reduce((acc, item) => {
    const label = item.label.replace(/Appendix /g, '')
    if (firstItems.includes(label)) {
      return [{ ...item, label: label }, ...acc]
    }
    if (notAppendices.includes(label)) {
      return [...acc, { ...item, label: label }]
    }
    acc.push(item)
    return acc
  }, [])

  // gross manual modifications
  // Difficult to get auctex's first three files in the right order
  console.log(items[0])
  if (items?.[0]?.type === 'doc' && items[0].id.replace(/(\w+)\/.*/g, '$1') === 'auctex') {
    console.log('aaaaaa')
    const firstThree = withSpecialItems.slice(0, 3)
    const last = withSpecialItems.slice(3)
    return [...firstThree.reverse(), ...last]
  }

  if (items?.[0]?.type === 'doc' && items[0].id.replace(/(\w+)\/.*/g, '$1') === 'emacs') {
    const finalOrder = [
      'Appendix A',
      'Appendix B',
      'Appendix C',
      'Appendix D',
      'Appendix E',
      'Appendix F',
      'Appendix G',
      'GNU Manifesto',
      'Glossary',
      'Ack',
      'Key',
      'Command-Line',
      'Function',
      'Variable',
      'Concept',
    ]

    const firstItems = withSpecialItems.slice(0, -finalOrder.length - 1)
    const lastItems = withSpecialItems.slice(-finalOrder.length - 1)
    console.dir(lastItems)
    const sortedLastItems = finalOrder.map(
      (item, index) => lastItems.find((uitem) => uitem.label.includes(item)) || lastItems[index],
    )

    return [...firstItems, ...sortedLastItems]
  }

  return withSpecialItems
}

module.exports = config
