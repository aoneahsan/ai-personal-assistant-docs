---
id: account-and-sync
title: Account & Sync
description: How accounts, Google sign-in, cross-device sync, and offline behavior work in AI Personal Assistant. Understand where your data lives and how it follows you.
keywords:
  - aipa account
  - cross-device sync
  - google sign in
  - offline support
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Account & Sync

**Your AIPA account is a Google sign-in that ties your data to a private space on Firebase's free tier and syncs it across every device you sign in on.** This page explains how that works, what stays on the device, and how offline use behaves.

## Signing in

AIPA uses Google sign-in:

- **On the web**, sign-in uses the Firebase Authentication popup flow.
- **On native apps (Android/iOS)**, sign-in uses the native Google sign-in flow and resolves to the same Firebase user, so the rest of the app behaves identically on every platform.

You sign in once per device. After that, AIPA keeps you signed in until you sign out.

## What syncs

When you're signed in, the content you create in cloud-backed tools is stored under your own account and syncs across devices. That includes things like your tasks, notes, goals, habits, trackers, and other tool data that is meant to persist.

Open a tool on your laptop, add an item, then open the same tool on your phone signed in with the same Google account — the item is there.

## What stays on the device

Not everything needs the cloud. AIPA keeps device-local data in on-device storage (via Capacitor Preferences on native and the equivalent on web):

- **Preferences and settings** that are specific to that device or browser.
- **Caches** that make the app feel fast and allow limited offline use.

Device-local data is not your account's source of truth; it's there for speed and per-device behavior.

## Offline behavior

AIPA is built to stay useful when the network is poor:

- **Locally cached data** remains visible, and many tools let you keep working with what's already loaded.
- **Changes** you make are stored and reconciled when you reconnect.
- **Sync and AI** require a connection — AI calls Google Gemini's API, and cross-device sync needs to reach your account.
- **Real-time collaboration** (for example, the collaborative whiteboard) needs network access and a signaling path; without it, the tool degrades to local use.

Treat offline as "keep working with what you have" rather than "every feature works with no internet."

## Using AIPA on multiple devices

1. Install or open AIPA on each device (web, Android, iOS).
2. Sign in with the **same** Google account on each.
3. Your cloud-backed data appears everywhere; per-device settings (like theme) are set per device.

## Signing out

Signing out stops syncing on that device and clears the active session. Device-local preferences may remain so the app still looks the way you left it; your cloud data stays safe under your account and returns when you sign back in.

## Deleting your account

You control deletion. AIPA provides an account/data-deletion flow, and the same is available from the app's deletion page. See [Privacy & Data](/privacy-and-data) for what gets removed and how.

## FAQ

### Is my data private to me?
Yes. Cloud-backed data is stored under your own account. See [Privacy & Data](/privacy-and-data) for specifics.

### Why didn't something sync?
Sync needs a connection and the same signed-in account on both devices. Check that you're online and signed in with the same Google account, then reopen the tool.

### Does signing out delete my data?
No. Signing out ends the session on that device. Your cloud data stays under your account; deleting data is a separate, explicit action.

### Can I use more than one Google account?
Each account is its own separate space. Sign in with the account whose data you want to see.
