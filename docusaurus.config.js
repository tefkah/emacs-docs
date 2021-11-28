// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
//const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const darkCodeTheme = require('./src/css/doom-one')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Emacs docs',
  tagline: 'Emacs documentation for the 21st century',
  url: 'https://emacsdocs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
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
            position: 'left',
            label: 'Emacs',
          },
          {
            type: 'doc',
            docId: 'elisp/Emacs Lisp',
            position: 'left',
            label: 'Elisp',
          },
          {
            type: 'doc',
            docId: 'org/The Org Manual',
            position: 'left',
            label: 'Org-Mode',
          },
          {
            type: 'doc',
            docId: 'auctex/AUCTeX',
            position: 'left',
            label: 'AUCTeX',
          },
          {
            type: 'doc',
            docId: 'magit/1 Introduction',
            position: 'left',
            label: 'Magit',
          },
          //{ to: "/blog", label: "Blog", position: "left" },
          {
            href: 'https://github.com/ThomasFKJorna/emacsdocs',
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

  plugins: [
    // ... Your other plugins.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
}

function prefixParser(file) {
  const [prefix, filename] =
    file?.replaceAll(/(\w+\/)?(Appendix )?([A-H\d\.]+) (.*?)/g, '$3@$4')?.split('@') || []

  return { prefix, filename }
}

/**
 * @param {import("@docusaurus/plugin-content-docs/src/types").NumberPrefixParser} numberPrefixParser
 * @param {import("@docusaurus/plugin-content-docs/src/sidebars/types").SidebarItem[]} unsortedItems
 */
function createSidebarDirs(numberPrefixParser, unsortedItems) {
  const firstItem = unsortedItems?.[0]
  if (firstItem.type === 'link' || firstItem.type === 'category') return

  const dir = firstItem?.id?.replaceAll(/(\w+\/).*/g, '$1')

  const items = unsortedItems.sort((a, b) => {
    const compareUnits = [a, b]
    const [newa, newb] = compareUnits.map((unit) => {
      if (unit.type !== 'doc') return
      let pref = prefixParser(unit.id).prefix?.split('.') || ['300']

      if (pref[0].replaceAll(/[^A-H]/g, '')) return 300
      return parseInt(pref.map((p) => (p.length === 1 ? '0' + p : p)).join(''))
    })

    return newa - newb
  })

  const itemsWhichNeedCategories = Array.from(
    new Set(
      items.map((item) => {
        if (item.type !== 'doc') return undefined

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
      if (categoryName.type !== 'doc') return prefix
      const lab = categoryName?.id?.replaceAll(/\w+\//g, '') || undefined
      return {
        type: 'category',
        label: lab,
        collapsed: true,
        collapsible: true,
        items: [],
      }
    })
    .filter((cat) => cat.label)

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

        return !cat.items.some((sub) => sub?.label === item?.id?.replaceAll(/\w+\//g, ''))
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
    'Magit User Manual',
    'Table of Contents',
    'AUCTeX',
    'Copying',
  ]

  const notAppendices = ['Function Index', 'Footnotes', 'Copying', 'Concept Index']

  const withSpecialItems = withNoOneMemberCategories.reduce((acc, item) => {
    const label = item.label.replaceAll(/Appendix /g, '')
    if (firstItems.includes(label)) {
      return [{ ...item, label: label }, ...acc]
    }
    if (notAppendices.includes(label)) {
      return [...acc, { ...item, label: label }]
    }
    acc.push(item)
    return acc
  }, [])

  return withSpecialItems
}

module.exports = config
