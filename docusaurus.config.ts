import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// AI Personal Assistant (AIPA) — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com) · Zaions
// Live app: https://aipa.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://ai-personal-assistant-docs.aoneahsan.com';
const APP_URL = 'https://aipa.aoneahsan.com';
const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.aipa';
const REPO_URL = 'https://github.com/aoneahsan/ai-personal-assistant-docs';

const config: Config = {
  title: 'AI Personal Assistant',
  tagline:
    'Your private, AI-powered productivity workspace — 40+ tools in one app.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting + GitHub Pages.
  url: SITE_URL,
  baseUrl: '/',

  // GitHub metadata (drives deploy + OG tags + edit-this-page links)
  organizationName: 'aoneahsan',
  projectName: 'ai-personal-assistant-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. Injected into <head> of every page on top
  // of the per-page metadata Docusaurus already emits. The JSON-LD payloads
  // (WebSite, Organization, SoftwareApplication) help Google Rich Results,
  // Perplexity, ChatGPT, and Claude extract structured entity data.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: `${SITE_URL}/`,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/xml',
        title: 'AI Personal Assistant Docs — Sitemap',
        href: `${SITE_URL}/sitemap.xml`,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: 'AI Personal Assistant Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: 'AIPA Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#6366f1',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AI Personal Assistant Documentation',
        url: SITE_URL,
        description:
          'Documentation for AI Personal Assistant (AIPA) — 40+ productivity, AI, finance, health, learning, and utility tools in one private app for web, Android, and iOS. Author: Ahsan Mahmood (Zaions).',
        inLanguage: 'en',
        publisher: {
          '@type': 'Organization',
          name: 'Zaions',
          url: 'https://aoneahsan.com',
          founder: {
            '@type': 'Person',
            name: 'Ahsan Mahmood',
            url: 'https://aoneahsan.com',
            email: 'aoneahsan@gmail.com',
            sameAs: [
              'https://linkedin.com/in/aoneahsan',
              'https://github.com/aoneahsan',
              'https://www.npmjs.com/~aoneahsan',
            ],
          },
        },
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'AI Personal Assistant',
        alternateName: 'AIPA',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'Web, Android, iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        url: APP_URL,
        sameAs: [APP_URL, PLAY_URL],
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zaions',
          url: 'https://aoneahsan.com',
        },
        description:
          'A private, AI-powered productivity workspace bundling 40+ tools — tasks, notes, planners, habits, AI chat and writing, finance and health trackers, flashcards, file utilities, and more — into one app for web, Android, and iOS. AI features run on a user-supplied Google Gemini key (bring-your-own-key).',
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Zaions',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
        },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: `${REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for AI Personal Assistant (AIPA) — 40+ productivity, AI, finance, health, learning, and utility tools in one private app for web, Android, and iOS. AI runs on your own free Google Gemini key. Built by Ahsan Mahmood (Zaions).',
      },
      {
        name: 'keywords',
        content:
          'ai personal assistant, aipa, productivity app, all-in-one app, to-do list, notes app, habit tracker, pomodoro timer, ai chat, ai writing assistant, expense tracker, budget planner, flashcards, bring your own key, gemini api key, capacitor app, privacy-first productivity',
      },
      { name: 'author', content: 'Ahsan Mahmood' },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'AI Personal Assistant Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'AI Personal Assistant',
      logo: {
        alt: 'AI Personal Assistant logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/getting-started/quick-start',
          label: 'Quick Start',
          position: 'left',
        },
        {
          to: '/ai/bring-your-own-key',
          label: 'AI Setup',
          position: 'left',
        },
        {
          href: APP_URL,
          label: 'Open App',
          position: 'right',
        },
        {
          href: PLAY_URL,
          label: 'Play Store',
          position: 'right',
        },
        {
          href: REPO_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Installation', to: '/getting-started/installation' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'AI: Bring Your Own Key', to: '/ai/bring-your-own-key' },
            { label: 'Privacy & Data', to: '/privacy-and-data' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open the App', href: APP_URL },
            { label: 'Get it on Google Play', href: PLAY_URL },
            { label: 'Docs source', href: REPO_URL },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood (Zaions)',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `© 2024–${new Date().getFullYear()} Ahsan Mahmood (Zaions). Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'diff'],
    },
    announcementBar: {
      id: 'aipa-live',
      content:
        'AI Personal Assistant is live on the web and Google Play — <a target="_blank" rel="noopener" href="https://aipa.aoneahsan.com">open the app</a>.',
      backgroundColor: '#6366f1',
      textColor: '#ffffff',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
