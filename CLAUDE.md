# CLAUDE.md — ai-personal-assistant-docs

Public Docusaurus documentation site for **AI Personal Assistant (AIPA)**.

> ⚠️ **PUBLIC repo — never commit secrets.** No `.env`, no API keys, no service accounts, no tokens. The product app's private config stays in the private app repo, NOT here.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

## Identity

| Key | Value |
|---|---|
| Repo | `aoneahsan/ai-personal-assistant-docs` (**PUBLIC**) · remote `o` |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Product | AI Personal Assistant (AIPA) — 40+ tools in one app (web/Android/iOS) |
| Live app | https://aipa.aoneahsan.com |
| Google Play | https://play.google.com/store/apps/details?id=com.aoneahsan.aipa |
| Docs URL | https://ai-personal-assistant-docs.aoneahsan.com (Firebase Hosting site `ai-personal-assistant-docs` + GitHub Pages mirror) |
| Source app repo | `/home/ahsan/Documents/01-code/projects/ai-personal-assistant` (**PRIVATE** — read-only from here) |
| Feature source of truth | app repo `src/config/featureCatalog.ts` + `README.md` |
| Package manager | yarn (NEVER npm/pnpm) · `nodeLinker: node-modules` |
| Node | >=18 (CI pins 22) |
| Author | Ahsan Mahmood / Zaions ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)) |
| Dev ports | start **5962**, serve **5963** |
| Content tracker | `docs/tracking/ai-personal-assistant-docs-content-tracker.json` |

## Critical rules

| Rule | Detail |
|---|---|
| Secrets | PUBLIC repo — NEVER commit any secret. Docusaurus config has none; keep it that way. |
| Yarn only | Never `npm install` / `pnpm add`. Only `yarn.lock`. |
| No dev server | Per global rule, the agent does NOT run `yarn start`/`serve`. Verify with one-shot `yarn typecheck` + `yarn build`. |
| Honest framing | Document ONLY features that exist (read the app's `featureCatalog.ts`). Say what a tool does NOT do. AI = bring-your-own Gemini key (no developer-funded LLM). No fabricated stats/screenshots. |
| Single source of truth | Feature facts come from the app repo, not memory. |
| One commit per task | ONE commit per prompt, then push to `o main`. |

## Dual hosting

- **Firebase Hosting** (primary): `firebase.json` serves `build`; deploy with `yarn firebase:deploy` (project `ai-personal-assistant-docs`). Hosting target in `.firebaserc`.
- **GitHub Pages** (mirror): `.github/workflows/deploy.yml` builds Docusaurus and deploys to Pages on push to `main`. Custom domain via `static/CNAME` (`ai-personal-assistant-docs.aoneahsan.com`). Enable once: repo Settings → Pages → Source = "GitHub Actions".

## Verification commands

```bash
yarn install
yarn typecheck   # tsc --noEmit (must exit 0)
yarn build       # docusaurus build → ./build (must exit 0)
```

## SEO + AEO

- `static/robots.txt` allows all major search + AI bots; `Sitemap:` points to the absolute sitemap.
- `static/llms.txt` is the llmstxt.org index. JSON-LD (WebSite, Organization, SoftwareApplication) in `docusaurus.config.ts` `headTags`.
- Every page hits the per-page SEO floor: distinct title + meta description, definition-first intro, use cases, FAQ, `last_update`.

## Content map

- `docs/intro.md`, `docs/getting-started/*` (installation, quick-start, account-and-sync)
- `docs/ai/bring-your-own-key.md` (Gemini BYOK)
- `docs/features/*` (one page per category: productivity, ai-and-content, finance-and-health, learning-and-collaboration, utilities)
- `docs/guides/*` (track-your-habits, plan-your-day, use-the-pomodoro-timer, manage-your-budget)
- `docs/privacy-and-data.md`, `docs/about-the-author.md`

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## Last Updated

2026-06-23
