import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Template",
  tagline: "This is the template",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://beaverhouse.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docusaurus-template/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BeaverHouse", // Usually your GitHub org/user name.
  projectName: "docusaurus-template", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
  },

  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "extra",
        path: "extra",
        routeBasePath: "extra",
        editUrl: "https://github.com/BeaverHouse/docusaurus-template/tree/main",
        editLocalizedFiles: true,
        sidebarPath: require.resolve("./sidebarsExtra.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/BeaverHouse/docusaurus-template/tree/main",
          editLocalizedFiles: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Template",
      logo: {
        alt: "My Site Logo",
        src: "img/template.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/extra/part1",
          position: "left",
          label: "Extra",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/BeaverHouse/docusaurus-template",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Start Docs",
              to: "/docs/get_started",
            },
          ],
        },
        {
          title: "Other Sites",
          items: [],
        },
        {
          title: "More about HU-Lee",
          items: [
            {
              label: "Blog",
              to: "https://blog.haulrest.me/",
            },
            {
              label: "Profile",
              to: "https://profile.haulrest.me/",
            },
            {
              label: "GitHub",
              href: "https://github.com/HU-Lee",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HU-Lee. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
