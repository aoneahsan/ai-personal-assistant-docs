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


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
