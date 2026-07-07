# Safe Access Rules (MCP & Agent)

> These rules protect the founder's accounts and data. They apply to any MCP server connected to this workspace and to agent file access generally.

---

## File access

1. Work **only inside this project folder** (`residewell-launch/` and the repo root).
2. Do **not** access personal files, the home directory, or any folder outside the project unless explicitly authorized in the conversation.
3. Never read or write another application's credential stores, browser profiles, or SSH keys.

## Credentials & secrets

4. Never expose credentials in plaintext — not in files, commits, chat, or logs.
5. Real secrets live only in a local `.env` (gitignored). Repos carry `.env.example` placeholders only.
6. If a tool response contains a token or key, do not copy it into any project file.

## Scope minimization

7. Grant each MCP server the **narrowest scope that works** (see per-server guidance in `SERVER_RECOMMENDATIONS.md`).
8. Google Drive: single dedicated folder, read-only where possible.
9. Google Sheets: access limited to the `ResideWell Pipeline` spreadsheet, not the whole Drive.
10. Prefer read-only scopes until a write need is proven.

## Version safety

- Commit to Git **before any bulk edit** — agent changes stay reversible.
- Prefer Sheets-only access before any Drive access; add Drive only when exports demand it.

## Write safety

11. No MCP tool sends outbound communication (email, Slack, LinkedIn) without the founder's explicit go-ahead in that session.
12. Destructive operations (delete, overwrite, bulk update) require confirmation with the specific target named.
13. Financial, legal, and contractual documents are drafted only — the founder reviews and sends.

## Data integrity

14. Data fetched via MCP (web, Sheets) is still subject to the [VERIFY] rule — no fetched contact enters outreach without human verification.
15. Never write invented property contacts, unit counts, or management details into the CRM.
