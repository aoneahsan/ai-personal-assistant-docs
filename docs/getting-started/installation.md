---
id: installation
title: Install AI Personal Assistant
description: Use AI Personal Assistant (AIPA) on the web with no install, or get the Android app from Google Play. Step-by-step setup for every platform.
keywords:
  - install ai personal assistant
  - aipa download
  - productivity app android
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Install AI Personal Assistant

**Installing AIPA means choosing one of its surfaces — the web app (nothing to install), the Android app from Google Play, or the companion browser extension.** All surfaces share the same account, so your data follows you between them.

## Option 1 — Use the web app (fastest)

The web app is the quickest way to start. There is nothing to download.

1. Open **[aipa.aoneahsan.com](https://aipa.aoneahsan.com)** in any modern browser (Chrome, Edge, Firefox, Safari).
2. Sign in with Google to enable cross-device sync (optional to explore, required to sync).
3. Open the feature launcher and pick any tool.

On Chrome, Edge, and other Chromium browsers you can also install the web app as a Progressive Web App (PWA) from the address-bar **Install** icon, which adds it to your apps list and launches it in its own window.

## Option 2 — Install the Android app

1. Open the listing: **[AI Personal Assistant on Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.aipa)** (package `com.aoneahsan.aipa`).
2. Tap **Install**, then **Open**.
3. Sign in with Google to sync with your web data.

The Android app is built with Capacitor and uses native push notifications. Notification permission is requested in-app when you first opt into reminders.

## Option 3 — iOS

AIPA is built for iOS with Capacitor. When the App Store build is published, install it the same way as any App Store app and sign in with the same Google account. Until then, use the web app on iOS Safari.

## Option 4 — Browser extension (companion)

A companion browser extension gives you quick access from your toolbar:

- **Chrome / Edge:** Manifest V3 build.
- **Firefox:** Manifest V2 build.

The extension authenticates with the browser's Chrome Identity API rather than loading remote auth scripts, so it complies with Web Store remote-code rules.

## After installing

- Continue to the **[Quick Start](/getting-started/quick-start)** to sign in and open your first tool.
- If you want AI features (chat, writing assistant, image generation), set up your **[Gemini key](/ai/bring-your-own-key)** — it takes a couple of minutes and is free.
- Learn how syncing works in **[Account & Sync](/getting-started/account-and-sync)**.

## What installation does *not* require

To keep expectations honest:

- **No payment.** The core tools are free; you never enter a card to install.
- **No separate AI account beyond Google.** AI uses a Google Gemini API key you generate for free.
- **No special permissions at launch.** Sensitive permissions (notifications, camera for the document scanner / QR scanner) are requested only when you use the feature that needs them.

## FAQ

### Which browsers does the web app support?
Current versions of Chrome, Edge, Firefox, and Safari. The app targets modern browsers; very old browsers may not render every tool.

### Do I need to install anything to try it?
No. The web app at [aipa.aoneahsan.com](https://aipa.aoneahsan.com) runs without any install.

### Is the Android app the same as the web app?
Yes — same account, same tools, same data. The Android build adds native features like push notifications.

### How big is the app?
The Android app is a standard Capacitor app; download size is shown on its Google Play listing, which is the authoritative source.
