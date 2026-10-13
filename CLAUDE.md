# AI Personal Assistant documentation

**Last Updated:** 2026-10-13

| Context | Value |
|---|---|
| Repository | Public `aoneahsan/ai-personal-assistant-docs`, branch `main`, remote `origin` |
| Site | `https://aipa-docs.aoneahsan.com` from `static/CNAME` and `docusaurus.config.ts` |
| App evidence | Private sibling `../ai-personal-assistant-ai-project/` |
| Stack | Docusaurus 3, TypeScript, yarn 4 (`packageManager` in `package.json`) |
| Last optimized | 2026-10-13 |
| Next routine optimization eligible | 2026-11-12 |
| Mirror | `AGENTS.md` and `CLAUDE.md` are byte-identical. |

## Editing contract

This repository is public. Never commit a secret, environment file, token, service account, signing file,
private app configuration, or internal audit record. For a product claim, inspect the relevant route or
module in the sibling app. The old guide's `src/config/featureCatalog.ts` path does not exist. AI functions
use a user-provided Gemini key where the current app implements them; do not promise developer-funded AI or
an unverified feature. Keep content short, factual and linked to current behavior.

`docs/` holds published pages, `sidebars.ts` their navigation, `docusaurus.config.ts` the host and metadata,
and `docs/tracking/ai-personal-assistant-docs-content-tracker.json` the page work. Check only the relevant
page and source evidence. `static/robots.txt`, `static/llms.txt`, and config JSON-LD carry search metadata.

The tracked deployment is GitHub Pages through `.github/workflows/deploy-pages.yml`; `main` pushes publish.
No Firebase Hosting configuration is tracked here. Build and inspect the fresh site in a controlled browser
before a publishing push, including a direct route at desktop and mobile widths. Stop the local build server
after verification.

```bash
yarn install --immutable
yarn typecheck
yarn build
```

Fetch and merge `origin/main` before editing and again before commit and push. Keep docs commits separate
from the private app and root container. The [fleet tracker](../../../docs/tracking/fleet-maintenance-tracker.json)
records the current maintenance pass. Context optimization is ineligible before 2026-11-12 unless the owner
requests it, the tree changes, a hard cap is breached, or proven stale guidance risks incorrect work.
