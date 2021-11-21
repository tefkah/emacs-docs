// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Emacs docs",
  tagline: "Emacs documentation for the 21st century",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ThomasFKJorna", // Usually your GitHub org/user name.
  projectName: "emacs-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
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
            });
            const dirs = createSidebarDirs(numberPrefixParser, initialItems);
            // console.log(dirs);
            return dirs;
          },
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Emacs Docs",
        logo: {
          alt: "Emacs",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Emacs",
          },
          {
            type: "doc",
            docId: "elisp/1 Introduction",
            position: "left",
            label: "Elisp",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Org-Mode",
          },
          //{ to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lisp"],
      },
    }),
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
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
};

function prefixParser(file) {
  const [prefix, filename] =
    file?.replaceAll(/(\w+\/)?([\d\.]+) (.*?)/g, "$2@$3")?.split("@") || [];

  return { prefix, filename };
}

function createSidebarDirs(numberPrefixParser, unsortedItems) {
  // console.log(items);
  //console.log(Object.entries(items));
  //items.forEach((i) => console.log(i));

  const items = unsortedItems.sort((a, b) => {
    const prefa = prefixParser(a.id).prefix.split(".");
    const prefb = prefixParser(b.id).prefix.split(".");

    const newa = parseInt(
      prefa.map((p) => (p.length === 1 ? "0" + p : p)).join("")
    );
    const newb = parseInt(
      prefb.map((p) => (p.length === 1 ? "0" + p : p)).join("")
    );

    return newa - newb;
  });

  const itemsWhichNeedCategories = Array.from(
    new Set(
      items.map((item) => {
        // if (manual.type !== "category") return manual;
        // return {
        //   label: manual.label,
        //   collapsed: true,
        //   collapsible: true,
        //   type: "category",
        // items:
        //       manual?.items?.map((item) => {
        // console.log(numberPrefixParser(item));
        if (item.type === "category") return undefined;

        const [prefix, filename] =
          item?.id?.replaceAll(/\w+\/([\d\.]+) (.*?)/g, "$1@$2")?.split("@") ||
          [];

        if (!prefix) return undefined;

        const splitpref = prefix.split(".");

        if (splitpref.length > 2) return splitpref.slice(0, 2).join(".");

        if (splitpref.length === 1) return splitpref[0];

        return undefined;
      })
    )
  )?.map((prefix) => {
    //   if (!manual.items) return;

    const categoryName = items.find((item) => {
      const namePrefix = prefixParser(item.id).prefix;
      return namePrefix === prefix;
    });

    // const category = {
    //   type: "category",
    //   label: categoryName?.id?.replaceAll(/\w+\//g, "") || "uhh",
    //   collapsed: true,
    //   collapsable: true,
    //   items: [],
    // };

    return {
      type: "category",
      label: categoryName?.id?.replaceAll(/\w+\//g, "") || "uhh",
      collapsed: true,
      collapsible: true,
      items: [],
    };
  });

  // const thingsAddedInDirs = itemsWhichNeedCategories.map((manual, index) => {
  //   if (manual.type !== "category") return manual;
  const manualLabelPrefixes = itemsWhichNeedCategories.map(
    ({ label }) => prefixParser(label).prefix
  );
  //console.log(manualLabelPrefixes);
  // return {
  // ...manual,
  // items:
  const thingsAddedInDirs = itemsWhichNeedCategories.map((category) => {
    const catPrefix = prefixParser(category.label).prefix;
    //console.log(catPrefix);
    const directDescendant = items.find((item) => {
      const itemPrefix = prefixParser(item.id).prefix;
      return catPrefix === itemPrefix;
    });

    const introfiedDirectDescendant = {
      ...directDescendant,
      label: "Introduction",
    };

    const splitCatPrefix = catPrefix.split(".");
    const forbiddenPrefixes = manualLabelPrefixes.reduce((acc, labelPrefix) => {
      if (splitCatPrefix.length > 1) return [];

      const splitLabelPrefix = labelPrefix.split(".");
      splitLabelPrefix[0] === splitCatPrefix[0] && acc.push(labelPrefix);
      return acc;
    }, []);

    const subItems = items.reduce((acc, item) => {
      const itemPrefix = prefixParser(item.id).prefix;
      const splitItemPrefix = itemPrefix.split(".");

      if (forbiddenPrefixes.includes(itemPrefix)) return acc;
      if (splitItemPrefix.length <= splitCatPrefix.length) return acc;

      if (splitCatPrefix.length > 1 && splitItemPrefix.length > 2) {
        itemPrefix !== catPrefix && splitItemPrefix.length > 2;
        splitItemPrefix[0] === splitCatPrefix[0] &&
          splitItemPrefix[1] === splitCatPrefix[1] &&
          acc.push(item);
        return acc;
      }

      splitItemPrefix !== splitCatPrefix &&
        splitItemPrefix.length < 3 &&
        splitItemPrefix[0] === splitCatPrefix[0] &&
        acc.push(item);
      return acc;
    }, []);

    //console.log(introfiedDirectDescendant);
    return { ...category, items: [introfiedDirectDescendant, ...subItems] };
    //const itemsWhichNeedToGoIntoCategory = "";
  });

  const { dirs, subdirs } = thingsAddedInDirs.reduce(
    (acc, curr) => {
      const { dirs, subdirs } = acc;

      const isSubdir = prefixParser(curr.label).prefix.split(".").length > 1;
      isSubdir ? subdirs.push(curr) : dirs.push(curr);

      return { dirs, subdirs };
    },
    { dirs: [], subdirs: [] }
  );
  console.log(dirs);

  const final = dirs.map((dir) => ({
    ...dir,
    items: dir.items.reduce((acc, curr, index) => {
      if (curr.label === "Introduction") return [curr];

      acc.push(curr);
      const currPrefix = prefixParser(curr.id).prefix.split(".");
      console.log(currPrefix);
      console.log("-----------------------------");

      const nextDir = subdirs.find((subdir) => {
        const subdirPrefix = prefixParser(subdir.label).prefix.split(".");
        console.log(subdirPrefix);
        return (
          subdirPrefix[0] === currPrefix[0] &&
          parseInt(subdirPrefix[1]) === parseInt(currPrefix[1]) + 1
        );
      });
      console.log(nextDir);

      nextDir && acc.push(nextDir);

      return acc;
    }, []),
  }));

  return final;
}

module.exports = config;
