---
id: ai-and-content
title: AI & Content Tools
description: AIPA's AI and content tools — AI Brain, AI chat, voice notes, translator, speech, writing assistant, document scanner (OCR), AI image generator, and markdown editor.
keywords:
  - ai chat app
  - ai writing assistant
  - ocr document scanner
  - ai image generator
  - text to speech
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# AI & Content Tools

**The AI & Content category is AIPA's set of language-, voice-, and content-creation tools — from an AI chat and writing assistant to a document scanner and image generator.** The genuinely AI-powered tools here call Google Gemini using your own API key; a few "smart" tools run for free on your device using built-in browser capabilities.

Before using the AI tools, set up your key: [Bring Your Own Key](/ai/bring-your-own-key).

## The tools

| Tool | What it does | Needs Gemini key? |
| --- | --- | --- |
| **AI Brain** | A personalized AI assistant with memory of your context. | Yes |
| **AI Chat** | Conversational AI for questions and brainstorming. | Yes |
| **Writing Assistant** | Suggestions, rewrites, and improvements for your text. | Yes |
| **Translator** | Multi-language text translation. | Yes (model-assisted) |
| **AI Image Generator** | Generates custom SVG illustrations. | Yes |
| **Voice Notes** | Record voice notes and transcribe them. | No (uses device speech engine) |
| **Speech (TTS / STT)** | Text-to-speech and speech-to-text. | No (uses browser Web Speech APIs where available) |
| **Document Scanner (OCR)** | Extract text from images and PDFs. | No (client-side OCR) |
| **Markdown Editor** | Write and preview markdown content. | No |

## Common use cases

- **Draft faster.** Use the **Writing Assistant** to rework a rough paragraph, then polish it in the **Markdown Editor**.
- **Capture on the go.** Record a **Voice Note**, get a transcript, and turn it into a task or note.
- **Digitize paper.** Point the **Document Scanner** at a page to pull out the text, then store it in a note or the wiki.
- **Communicate across languages.** Drop text into the **Translator** to move between languages.
- **Brainstorm and create.** Ask **AI Chat** for ideas, ask **AI Brain** to keep your context in mind, and generate a simple illustration with the **AI Image Generator**.

## Honest notes on the AI tools

- **AI output is a draft.** Treat chat answers, rewrites, translations, and generated images as starting points to review — not as authoritative or professional advice.
- **Your prompts go to Google.** The AI tools send requests to Google Gemini under your key. See [Bring Your Own Key](/ai/bring-your-own-key) for the privacy and cost implications.
- **Free "smart" tools have device limits.** Speech and OCR quality depend on your browser/device's built-in engines; results vary by platform and language.
- **The image generator produces SVG illustrations**, which suit icons, diagrams, and simple graphics rather than photorealistic images.

## FAQ

### Which AI tools need a key?
AI Brain, AI Chat, Writing Assistant, Translator, and the AI Image Generator call Gemini and need your key. Voice notes, speech, OCR, and the markdown editor do not.

### Where do my AI prompts go?
To Google Gemini, using the API key you supply. See [Bring Your Own Key](/ai/bring-your-own-key).

### Is transcription accurate?
It depends on your device's speech engine and the audio quality. It's good for quick capture; verify important details.

### Can the image generator make photos?
It generates SVG illustrations — vector graphics — not photorealistic images.
