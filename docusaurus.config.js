import { themes } from "prism-react-renderer";
import doomOne from "./src/css/doom-one.js";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Emacs Docs",
	tagline: "The modern documentation website Emacs deserves.",
	url: "https://emacsdocs.org",
	baseUrl: "/",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.svg",
	organizationName: "tefkah",
	projectName: "emacs-docs",
	trailingSlash: false,

	markdown: {
		format: "md",
	},

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarItemsGenerator: async function ({
						defaultSidebarItemsGenerator,
						numberPrefixParser,
						item,
						version,
						docs,
						options,
					}) {
						const initialItems = await defaultSidebarItemsGenerator({
							options,
							item,
							version,
							docs,
							numberPrefixParser,
						});
						return createSidebarDirs(numberPrefixParser, initialItems);
					},
					sidebarPath: "./sidebars.js",
				},
				blog: {
					showReadingTime: true,
				},
				sitemap: {
					changefreq: "weekly",
					priority: 0.5,
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themes: [
		[
			"@easyops-cn/docusaurus-search-local",
			{
				hashed: true,
				language: ["en"],
				indexBlog: false,
				docsRouteBasePath: "/docs",
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: "img/Banner.png",
			metadata: [
				{
					name: "summary",
					content: "The modern documentation website Emacs deserves.",
				},
			],

			docs: {
				sidebar: {
					hideable: true,
				},
			},

			navbar: {
				hideOnScroll: true,
				title: "Emacs Docs",
				logo: {
					alt: "Emacs",
					src: "img/favicon.svg",
				},
				items: [
					{
						type: "doc",
						docId: "emacs/The Emacs Editor",
						position: "right",
						label: "Emacs",
						className: "emacs",
					},
					{
						type: "doc",
						docId: "elisp/Emacs Lisp",
						position: "right",
						label: "Elisp",
						className: "elisp",
					},
					{
						type: "doc",
						docId: "org/The Org Manual",
						position: "right",
						label: "Org-Mode",
						className: "org",
					},
					{
						type: "doc",
						docId: "auctex/AUCTeX",
						position: "right",
						label: "AUCTeX",
						className: "auctex",
					},
					{
						type: "doc",
						docId: "magit/Magit User Manual",
						position: "right",
						label: "Magit",
						className: "magit",
					},
					{
						href: "https://github.com/tefkah/emacs-docs",
						className: "github-icon",
						position: "right",
						"aria-label": "GitHub repository",
					},
				],
			},

			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{ label: "Emacs", to: "/docs/emacs/The-Emacs-Editor" },
							{ label: "Elisp", to: "/docs/elisp/Emacs-Lisp" },
							{ label: "Org-Mode", to: "/docs/org/The-Org-Manual" },
							{ label: "AUCTeX", to: "/docs/auctex/AUCTeX" },
							{ label: "Magit", to: "/docs/magit/Magit-User-Manual" },
						],
					},
					{
						title: "FSF",
						items: [
							{ label: "GNU website", href: "https://www.gnu.org/" },
							{ label: "FSF Shop", href: "https://shop.fsf.org/" },
							{ label: "Donate to FSF", href: "https://my.fsf.org/donate" },
						],
					},
					{
						title: "More",
						items: [
							{ label: "FAQ", to: "/blog/FAQ" },
							{ label: "License", to: "/blog/License" },
							{
								label: "GitHub",
								href: "https://github.com/tefkah/emacs-docs",
							},
						],
					},
				],
				copyright: `Copyright Website \u00A9 ${new Date().getFullYear()} Thomas F. K. Jorna. Built with Docusaurus.`,
			},

			prism: {
				theme: themes.github,
				darkTheme: doomOne,
				additionalLanguages: ["lisp"],
			},

			colorMode: {
				respectPrefersColorScheme: true,
			},
		}),
	future: {
		experimental_faster: true,
		v4: {
			removeLegacyPostBuildHeadAttribute: true,
		},
	},
};

function prefixParser(file) {
	const [prefix, filename] =
		file
			?.replace(/(\w+\/)?(Appendix )?([A-H\d.]+) (.*?)/g, "$3@$4")
			?.split("@") || [];

	return { prefix, filename };
}

function createSidebarDirs(numberPrefixParser, unsortedItems) {
	const firstItem = unsortedItems?.[0];
	if (firstItem?.type === "link" || firstItem?.type === "category")
		return unsortedItems;

	const id = firstItem?.id || "";
	const dir = id.replace(/(\w+\/).*/g, "$1");

	const items = unsortedItems.sort((a, b) => {
		const compareUnits = [a, b];
		const [newa, newb] = compareUnits.map((unit) => {
			if (unit?.type !== "doc") return undefined;
			let pref = prefixParser(unit.id).prefix?.split(".") || ["300"];

			if (pref[0].replace(/[^A-H]/g, "")) return 300;
			return parseInt(pref.map((p) => (p.length === 1 ? "0" + p : p)).join(""));
		});

		return newa - newb;
	});

	const itemsWhichNeedCategories = Array.from(
		new Set(
			items.map((item) => {
				if (item?.type !== "doc") return undefined;

				const { prefix } = prefixParser(item?.id);

				if (!prefix) return undefined;

				const splitpref = prefix.split(".");

				if (splitpref.length > 2) return splitpref.slice(0, 2).join(".");
				if (splitpref.length === 1) return splitpref[0];

				return undefined;
			}),
		),
	)
		?.map((prefix) => {
			const categoryName = items.find((item) => {
				if (item.type !== "doc") return false;
				const namePrefix = prefixParser(item.id).prefix;
				return namePrefix === prefix;
			});

			if (categoryName?.type !== "doc") return prefix;
			const lab = categoryName?.id?.replace(/\w+\//g, "") || undefined;

			return {
				type: "category",
				label: lab,
				collapsed: true,
				collapsible: true,
				items: [],
			};
		})
		.filter((cat) => cat?.label);

	const manualLabelPrefixes = itemsWhichNeedCategories.map(
		({ label }) => prefixParser(label).prefix,
	);

	const thingsAddedInDirs = itemsWhichNeedCategories.map((category) => {
		const catPrefix = prefixParser(category.label).prefix;

		const directDescendant = items.find((item) => {
			if (item.type !== "doc") return;
			const itemPrefix = prefixParser(item.id).prefix;
			return catPrefix === itemPrefix;
		});

		const backupDesc = { type: "doc", id: `${dir}${category.label}` };
		const introfiedDirectDescendant = {
			...(directDescendant || backupDesc),
			label: "Introduction",
		};

		const splitCatPrefix = catPrefix.split(".");

		const subItems = items.reduce((acc, item) => {
			if (item.type !== "doc") return acc;
			const itemPrefix = prefixParser(item.id).prefix;
			const splitItemPrefix = itemPrefix?.split(".");

			if (splitItemPrefix.length <= splitCatPrefix.length) return acc;

			if (splitCatPrefix.length > 1 && splitItemPrefix.length > 2) {
				itemPrefix !== catPrefix &&
					splitItemPrefix.length > 2 &&
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

		return { ...category, items: [introfiedDirectDescendant, ...subItems] };
	});

	const { dirs, subdirs } = thingsAddedInDirs.reduce(
		(acc, curr) => {
			const { dirs, subdirs } = acc;

			const isSubdir = prefixParser(curr.label).prefix.split(".").length > 1;
			isSubdir ? subdirs.push(curr) : dirs.push(curr);

			return { dirs, subdirs };
		},
		{ dirs: [], subdirs: [] },
	);

	const final = dirs.map((dir) => ({
		...dir,
		items: dir.items.reduce((acc, curr, index) => {
			if (curr.label === "Introduction") return [curr];

			acc.push(curr);
			const currPrefix = prefixParser(curr.id).prefix.split(".");

			const nextDir = subdirs.find((subdir) => {
				const subdirPrefix = prefixParser(subdir.label).prefix.split(".");
				return (
					subdirPrefix[0] === currPrefix[0] &&
					parseInt(subdirPrefix[1]) === parseInt(currPrefix[1]) + 1
				);
			});

			nextDir && acc.push(nextDir);

			return acc;
		}, []),
	}));

	const filtered = final.map((cat) => {
		if (!cat.items?.length) return cat;

		return {
			...cat,
			items: cat.items.filter((item) => {
				if (item.type === "category") return true;
				return !cat.items.some(
					(sub) => sub?.label === item?.id?.replace(/\w+\//g, ""),
				);
			}),
		};
	});

	const withoutPrefs = filtered.map((cat) => {
		const { prefix: catPrefix, filename: catLabel } = prefixParser(cat.label);
		const isAppendix = /[A-Z]/.test(catPrefix[0]);

		const categoryLabel = isAppendix
			? `Appendix ${cat.label}`
			: /\d+/.test(cat.label)
				? `${catPrefix}\. ${catLabel}`
				: cat.label;

		if (!cat.items?.length) return { ...cat, label: categoryLabel };

		return {
			...cat,
			label: categoryLabel,
			items: cat?.items?.map((subCat) => {
				const subCatLabel = prefixParser(subCat.label || subCat.id).filename;
				if (subCat.type === "doc") {
					if (subCat.label) return subCat;
					return { ...subCat, label: subCatLabel };
				}
				return {
					...subCat,
					label: subCatLabel || subCat.label,
					items: subCat?.items?.map((subsubCat) => {
						const subsubCatLabel = prefixParser(subsubCat.id).filename;
						if (subsubCat.label) return subsubCat;
						return { ...subsubCat, label: subsubCatLabel };
					}),
				};
			}),
		};
	});

	const withNoOneMemberCategories = withoutPrefs.map((category) => {
		if (!category?.items?.length) return category;
		if (category?.items?.length > 1) return category;

		return {
			label: category.label,
			type: "doc",
			id: category.items?.[0]?.id || "intro",
		};
	});

	const firstItems = [
		"The Emacs Editor",
		"The Org Manual",
		"Emacs Lisp",
		"Table of Contents",
		"AUCTeX",
		"Copying",
		"Distribution",
		"Magit User Manual",
	];

	const notAppendices = [
		"Acknowledgments",
		"Command and Function Index",
		"Command-Line Option Index",
		"Distribution",
		"Function Index",
		"Footnotes",
		"Copying",
		"Concept Index",
		"Glossary",
	];

	const withSpecialItems = withNoOneMemberCategories.reduce((acc, item) => {
		const label = item.label.replace(/Appendix /g, "");
		if (firstItems.includes(label)) {
			return [{ ...item, label: label }, ...acc];
		}
		if (notAppendices.includes(label)) {
			return [...acc, { ...item, label: label }];
		}
		acc.push(item);
		return acc;
	}, []);

	if (
		items?.[0]?.type === "doc" &&
		items[0].id.replace(/(\w+)\/.*/g, "$1") === "auctex"
	) {
		const firstThree = withSpecialItems.slice(0, 3);
		const last = withSpecialItems.slice(3);
		return [...firstThree.reverse(), ...last];
	}

	if (
		items?.[0]?.type === "doc" &&
		items[0].id.replace(/(\w+)\/.*/g, "$1") === "emacs"
	) {
		const finalOrder = [
			"Appendix A",
			"Appendix B",
			"Appendix C",
			"Appendix D",
			"Appendix E",
			"Appendix F",
			"Appendix G",
			"GNU Manifesto",
			"Glossary",
			"Ack",
			"Key",
			"Command-Line",
			"Function",
			"Variable",
			"Concept",
		];

		const firstItems = withSpecialItems.slice(0, -finalOrder.length - 1);
		const lastItems = withSpecialItems.slice(-finalOrder.length - 1);
		const sortedLastItems = finalOrder.map(
			(item, index) =>
				lastItems.find((uitem) => uitem.label.includes(item)) ||
				lastItems[index],
		);

		return [...firstItems, ...sortedLastItems];
	}

	return withSpecialItems;
}

export default config;
