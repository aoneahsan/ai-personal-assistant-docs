---
id: privacy-and-data
slug: /privacy-and-data
title: Privacy & Data
description: What AI Personal Assistant stores and where — Firebase free-tier account data, on-device settings, FilesHub file uploads, AI prompts to Google Gemini — and how to delete your account.
keywords:
  - aipa privacy
  - data deletion
  - account deletion
  - firebase data
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Privacy & Data

**This page summarizes what AI Personal Assistant stores, where it lives, and how to delete it — so you can see exactly what happens to your data.** For the formal, legally binding documents, use the app's own policy pages linked below.

## Where your data lives

| Data | Where it's stored | Notes |
| --- | --- | --- |
| **Your tool content** (tasks, notes, trackers, etc.) | Your own account on **Firebase (Firestore) free tier** | Stored under your signed-in account; syncs across devices. |
| **Device-only settings** (preferences, theme, caches) | **On-device storage** (Capacitor Preferences on native; equivalent on web) | Stays on the device; not your account's source of truth. |
| **Uploaded files** (e.g., cloud file manager) | **FilesHub** file storage | Deleting a file in the app removes it from storage. |
| **AI prompts** (AI Brain, chat, writing, translation, image) | Sent to **Google Gemini** under **your own API key** | Only when you use an AI tool and have set a key. See [Bring Your Own Key](/ai/bring-your-own-key). |

## Analytics and error reporting

AIPA may use privacy-respecting analytics and error reporting (for example Firebase Analytics, Microsoft Clarity, Amplitude, and Sentry) to understand usage and fix crashes. These activate only when configured. The app's formal [Privacy Policy](https://aipa.aoneahsan.com/privacy) is the authoritative list of providers actually wired in your region/build.

## Permissions AIPA may request

The app requests sensitive permissions only when you use the feature that needs them, never just at launch:

- **Notifications** — for reminders you opt into.
- **Camera** — for the QR scanner and document scanner.
- **Microphone** — for voice notes and speech-to-text.

Each has a non-permission fallback where practical (for example, generating a QR code doesn't need the camera; you can type instead of dictating).

## Deleting your account and data

You are in control of deletion:

1. Use the in-app account/data-deletion flow, **or**
2. Visit the app's deletion page: **[Account / Data Deletion](https://aipa.aoneahsan.com/data-deletion)**.

Deleting your account removes your account-associated data; uploaded files are removed from storage as part of the deletion. AI prompts you sent to Google under your own key are governed by Google's policies, not AIPA.

## The authoritative policy pages

These app pages are the binding documents — this docs page is a plain-language summary:

- **Privacy Policy:** [aipa.aoneahsan.com/privacy](https://aipa.aoneahsan.com/privacy)
- **Terms of Service:** [aipa.aoneahsan.com/terms-of-service](https://aipa.aoneahsan.com/terms-of-service)
- **Account / Data Deletion:** [aipa.aoneahsan.com/data-deletion](https://aipa.aoneahsan.com/data-deletion)

## FAQ

### Does AIPA sell my data?
No. Your tool data is stored under your own account for your use and sync. See the app's [Privacy Policy](https://aipa.aoneahsan.com/privacy) for the binding statement.

### Who sees my AI prompts?
Google, because the AI tools use your own Google Gemini key. AIPA doesn't run a separate AI model on your prompts. See [Bring Your Own Key](/ai/bring-your-own-key).

### How do I delete everything?
Use the in-app deletion flow or the [deletion page](https://aipa.aoneahsan.com/data-deletion). This removes your account data and uploaded files.

### Is my data encrypted in transit?
Data moves over HTTPS to Firebase, FilesHub, and Google. For the formal security statement, see the app's [Privacy Policy](https://aipa.aoneahsan.com/privacy).
