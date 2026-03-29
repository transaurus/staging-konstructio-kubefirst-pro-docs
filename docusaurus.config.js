// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kubefirst Pro Documentation",
  tagline: "Kubefirst Pro Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kubefirst-pro.konstruct.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "docs",
  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "2.10",
          versions: {
            current: {
              label: "2.11 (Next)",
              path: "next",
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    "docusaurus-theme-search-typesense",
    "@saucelabs/theme-github-codeblock",
  ],

  plugins: [
    function () {
      return {
        name: "postcss-tailwindcss-loader",
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: "link",
                attributes: {
                  rel: "stylesheet",
                  href: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css",
                },
              },
            ],
          };
        },
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));

          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: "Kubefirst Pro Docs",
          src: "img/kubefirst-pro.svg",
          href: "https://kubefirst-pro.konstruct.io/docs",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://konstruct.io/kubefirst-pro",
            label: "Website",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
            items: [
              {
                label: `Slack`,
                href: `http://konstruct.io/slack`,
              },
              {
                label: `Twitter`,
                href: `https://x.com/konstruct.io`,
              },
              {
                label: `LinkedIn`,
                href: `https://www.linkedin.com/company/konstructio`,
              },
            ],
          },
          {
            title: `More Resources`,
            items: [
              {
                label: `Blog`,
                href: `https://blog.konstruct.io`,
              },
              {
                label: `GitHub`,
                href: `https://github.com/konstructio/kubefirst`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Konstruct`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      typesense: {
        typesenseCollectionName: "kubefirst-pro",
        typesenseServerConfig: {
          nodes: [
            {
              host: "typesense.konstruct.io",
              port: 443,
              protocol: "https",
            },
          ],
          apiKey: "PWv5k8DNj11mGd0UleXlvl8ipFGy7ffV",
        },
        contextualSearch: true,
      },
    }),
};

export default config;
