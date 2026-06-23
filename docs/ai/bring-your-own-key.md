---
id: bring-your-own-key
title: AI Setup — Bring Your Own Key (Gemini)
description: AIPA's AI features run on a Google Gemini API key you supply yourself. Learn where to get a free key, where to paste it, and which features use AI vs. run on free client-side APIs.
keywords:
  - gemini api key
  - bring your own key
  - byok ai app
  - google ai studio
  - ai personal assistant ai setup
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# AI Setup — Bring Your Own Key (Gemini)

**AIPA's AI features run on a Google Gemini API key that you provide yourself (bring-your-own-key), not on a developer-funded paid model.** That means your AI usage is billed against your own Google account — and Gemini has a free tier, so for normal personal use it usually costs nothing. You stay in control of cost and of which AI provider sees your prompts.

This page covers where to get a key, where to paste it, which features need it, and which AI-flavored features actually run for free on your device.

## Why bring-your-own-key?

A short, honest explanation:

- **Zero developer-funded LLM cost.** AIPA does not pay for a shared AI model on your behalf. If it did, it would have to charge a subscription or impose tight limits.
- **You own the quota.** Your prompts go to Google Gemini under your key, on your free quota. Heavy users can raise their own limits with Google directly.
- **Transparency.** You always know which provider (Google) processes your AI requests, because it's your key.

## Step 1 — Get a free Gemini API key

1. Go to **[Google AI Studio → API keys](https://aistudio.google.com/app/apikey)**.
2. Sign in with a Google account.
3. Click **Create API key** and copy the key (it looks like a long string).

Google's Gemini API has a free tier suitable for personal use. Review Google's current free-tier limits and pricing on Google's site — those terms are set by Google, not AIPA.

## Step 2 — Paste the key into AIPA

1. In AIPA, open the **AI settings** (the settings area for AI / API keys).
2. Paste your Gemini API key into the API-key field.
3. Save.

Your key is stored for the app to use when calling Gemini. Treat your API key like a password — don't share it, and rotate it in Google AI Studio if it's ever exposed.

## Step 3 — Use the AI features

Once the key is set, the AI tools light up. Features that call Gemini include:

- **AI Brain** — your personalized assistant and memory.
- **AI Chat** — conversational AI.
- **Writing Assistant** — suggestions and rewrites.
- **Translator** — language translation (model-assisted).
- **AI Image Generator** — generates SVG illustrations.
- **Summarization / content help** wherever a tool offers it.

If you open one of these without a key, AIPA will prompt you to add one rather than failing silently.

## What runs *without* a key (free, on-device or via free browser APIs)

To set honest expectations, several "smart" features don't depend on Gemini at all and work without any key:

- **Speech-to-text and text-to-speech** can use the browser's built-in Web Speech APIs where available.
- **Voice notes** capture and play audio locally; transcription quality depends on the available speech engine on your device/browser.
- **Document scanner (OCR)** can extract text using a client-side OCR engine in the browser.
- **QR generation and scanning, currency conversion, time-zone math, markdown preview**, and similar utilities are plain client-side logic — no AI, no key.

Where a capability has both a free client-side path and an optional Gemini-enhanced path, the free path keeps working without a key; the enhanced path needs one.

## Honest limits

- **Gemini's terms are Google's.** Free-tier limits, model availability, and pricing are controlled by Google and can change. AIPA simply calls the API with your key.
- **AI output can be wrong.** Treat AI suggestions, translations, and generated content as drafts to review — not as authoritative or professional advice.
- **A key is required for the AI tools above.** Without it, those specific tools won't run, but every non-AI tool in AIPA still works.

## FAQ

### Does AIPA charge me for AI?
No. AIPA does not charge for AI. You use your own Google Gemini key, billed (if at all) by Google. Gemini's free tier covers typical personal use.

### Where is my API key stored?
It's stored so the app can use it to call Gemini. Keep it private and rotate it in [Google AI Studio](https://aistudio.google.com/app/apikey) if needed.

### Which AI provider does AIPA use?
Google Gemini, via your own key. Your AI prompts go to Google.

### Can I use AIPA without any AI?
Absolutely. The majority of AIPA's 40+ tools are non-AI and need no key. AI is an optional layer.

### What if I exceed Gemini's free tier?
That's between you and Google. You can manage limits and billing in your Google account; AIPA does not gate or resell Gemini access.
