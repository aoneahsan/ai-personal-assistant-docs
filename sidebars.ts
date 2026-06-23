import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for AI Personal Assistant (AIPA) documentation.
 * Every entry below maps 1:1 to a file under `docs/`. Keep them in sync
 * (the build runs with `onBrokenLinks: 'throw'`).
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/account-and-sync',
      ],
    },
    {
      type: 'category',
      label: 'AI Setup',
      collapsed: false,
      items: ['ai/bring-your-own-key'],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/productivity',
        'features/ai-and-content',
        'features/finance-and-health',
        'features/learning-and-collaboration',
        'features/utilities',
      ],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      collapsed: true,
      items: [
        'guides/track-your-habits',
        'guides/plan-your-day',
        'guides/use-the-pomodoro-timer',
        'guides/manage-your-budget',
      ],
    },
    'privacy-and-data',
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: ['about-the-author'],
    },
  ],
};

export default sidebars;
