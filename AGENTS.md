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
