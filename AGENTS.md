# AGENTS.md — ai-personal-assistant-docs

Mirror of `CLAUDE.md` for non-Claude AI agents. See `CLAUDE.md` for the full canonical version. Keep both in sync.

> ⚠️ **PUBLIC repo — never commit secrets.** No `.env`, no API keys, no service accounts, no tokens. The product app's private config stays in the private app repo, NOT here.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

## TL;DR

- Docusaurus 3 docs site for **AI Personal Assistant (AIPA)** — 40+ tools in one app for web/Android/iOS.
- Live app: https://aipa.aoneahsan.com · Google Play: `com.aoneahsan.aipa`.
- Docs URL: https://ai-personal-assistant-docs.aoneahsan.com (Firebase Hosting `ai-personal-assistant-docs` + GitHub Pages mirror via `.github/workflows/deploy.yml`, custom domain `static/CNAME`).
- Repo: `aoneahsan/ai-personal-assistant-docs` (**PUBLIC**), remote `o`.
- yarn only · `nodeLinker: node-modules` · dev ports start **5962** / serve **5963**.
- Source of truth for features: the PRIVATE app repo `/home/ahsan/Documents/01-code/projects/ai-personal-assistant` (`src/config/featureCatalog.ts` + `README.md`). Read it; never invent features.
- AI features = bring-your-own Google Gemini key (no developer-funded LLM). Document this honestly.
- Honest framing: say what a tool does NOT do; no fabricated stats/screenshots.
- Build gates: `yarn typecheck` exit 0 · `yarn build` exit 0. Agent does NOT run dev/serve servers.
- ONE commit per task, push to `o main`.

## Hard checks before editing

1. Is this a PUBLIC repo? Yes — confirm you are about to commit NO secret.
2. Are you documenting a real feature? Cross-check the app repo's `featureCatalog.ts` first.
3. Did you keep AI framing honest (BYO Gemini key, free client-side fallbacks where applicable)?
4. Will `yarn build` still pass (no broken sidebar refs / broken links — `onBrokenLinks: 'throw'`)?

## Dual hosting

- **Firebase Hosting** (primary): `firebase.json` (public `build`) + `.firebaserc` target `ai-personal-assistant-docs`; `yarn firebase:deploy`.
- **GitHub Pages** (mirror): `.github/workflows/deploy.yml` (build + deploy on push to `main`); `static/CNAME`. Enable: Settings → Pages → Source = "GitHub Actions".

## Content tracker

`docs/tracking/ai-personal-assistant-docs-content-tracker.json` — baseline pages + remaining/next-batch enrichment notes.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Last Updated

2026-06-23
