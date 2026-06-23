---
id: intro
slug: /intro
title: What is AI Personal Assistant (AIPA)?
description: AI Personal Assistant (AIPA) is a private all-in-one app that bundles 40+ productivity, AI, finance, health, learning, and utility tools into one workspace for web, Android, and iOS.
keywords:
  - ai personal assistant
  - aipa
  - all-in-one productivity app
  - productivity tools
  - ai app
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# What is AI Personal Assistant (AIPA)?

**AI Personal Assistant (AIPA) is a single app that bundles more than 40 personal-productivity tools — tasks, notes, planners, habits, AI chat and writing, finance and health trackers, study tools, and file utilities — into one private workspace that runs on the web, Android, and iOS.** Instead of juggling a dozen single-purpose apps, you open one launcher and pick the tool you need.

This documentation explains what each tool does (and does not do), how to sign in and sync your data, and how AIPA's AI features work using your own free Google Gemini key.

- **Open the live app:** [aipa.aoneahsan.com](https://aipa.aoneahsan.com)
- **Get it on Google Play:** [AI Personal Assistant on Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.aipa)

## Who AIPA is for

AIPA is built for anyone who wants their day-to-day tools in one place without paying for a stack of subscriptions:

- **Knowledge workers and students** who plan tasks, take notes, study with flashcards, and need an AI writing assistant.
- **People building habits** — daily planners, a habit tracker with streaks, a Pomodoro focus timer, and goal tracking.
- **People watching money and well-being** — an expense tracker and budget planner alongside mood, sleep, water, and exercise logging.
- **Tinkerers and makers** who want quick utilities (QR codes, currency conversion, PDF annotation, a code-snippet store) without installing one app each.

## Platforms

AIPA is one codebase shipped to multiple surfaces:

| Platform | How to use it |
| --- | --- |
| **Web** | Open [aipa.aoneahsan.com](https://aipa.aoneahsan.com) in any modern browser — nothing to install. |
| **Android** | Install from [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.aipa). |
| **iOS** | Built with Capacitor for iOS; availability follows the App Store listing. |
| **Browser extension** | A companion extension (Chrome MV3 / Firefox MV2) provides quick access; it authenticates with the Chrome Identity API. |

## The "40+ tools in one app" idea

AIPA's tools are grouped into five categories. Each category has its own reference page:

- **[Productivity](/features/productivity)** — tasks, quick notes, rich-text notes, diary, goals, projects, daily and weekly planners, time tracker, reminders, smart calendar, bookmarks, mind map, Pomodoro timer, and a habit tracker.
- **[AI & Content](/features/ai-and-content)** — AI Brain, AI chat, voice notes, translator, speech (text-to-speech / speech-to-text), writing assistant, document scanner (OCR), AI image generator, and a markdown editor.
- **[Finance & Health](/features/finance-and-health)** — expense tracker and budget planner, savings tracker, and a health hub for meditation, mood, sleep, water, and exercise.
- **[Learning & Collaboration](/features/learning-and-collaboration)** — flashcards, quiz creator, vocabulary builder, personal wiki, code snippets, polls, whiteboard, and a speed-reading trainer.
- **[Utilities](/features/utilities)** — PDF annotator, cloud file manager, file tools, QR code studio, currency converter, event countdown, time-zone converter, and a gratitude journal.

## How AIPA handles your data and AI

Two honest points that shape everything else in these docs:

1. **Your data is yours.** When you sign in, your content is stored under your own account on Firebase's free tier. Device-only preferences are kept in on-device storage. See [Privacy & Data](/privacy-and-data) for specifics and how to delete your account.
2. **AI runs on your own key.** AIPA's AI tools call Google Gemini using an API key **you** supply (bring-your-own-key). There is no developer-funded paid LLM, so your AI usage stays on your own free Gemini quota. See [Bring Your Own Key](/ai/bring-your-own-key).

## Where to go next

- New here? Start with [Installation](/getting-started/installation) and the [Quick Start](/getting-started/quick-start).
- Want AI features? Set up your [Gemini key](/ai/bring-your-own-key).
- Curious about a specific tool? Jump into the [Features](/features/productivity) section.

## FAQ

### Is AI Personal Assistant free?
The app itself is free to use on its free tier. AI features use your own Google Gemini API key, which has its own free quota from Google — so you only ever pay Google if you exceed their free allowance. AIPA does not charge a subscription for the core tools documented here.

### Do I need an account to use it?
You can open the app and explore, but signing in with Google lets your data sync across the web, Android, and iOS. See [Account & Sync](/getting-started/account-and-sync).

### Does AIPA work offline?
Many tools work with locally stored data, and the app caches what it can. Cross-device sync and AI features need a connection. Real-time collaboration tools (like the whiteboard) need network access and degrade to local use when offline.

### Who builds AIPA?
AIPA is built and maintained by [Ahsan Mahmood](https://aoneahsan.com) (Zaions). See [About the Author](/about-the-author).
