# MCP Install Notes

> **Documentation only.** No MCP server is required to run this workspace — everything works as plain files. Install servers only when they remove real friction.

---

## Current status in this environment

| Server                            | Status                    | Notes                                                                    |
| --------------------------------- | ------------------------- | ------------------------------------------------------------------------ |
| Canva                             | Connected                 | Can generate designed versions of the one-pager / flyers                 |
| Slack                             | Connected                 | Could post weekly dashboard summaries                                    |
| Google Drive / Sheets             | **Not connected**         | See `google-drive-setup.example.md` and `google-sheets-setup.example.md` |
| Filesystem / Git / Fetch / Memory | Built into Cursor's agent | No separate install needed for this workspace                            |

---

## How to add an MCP server in Cursor

1. Open **Cursor Settings → MCP** (or Tools & Integrations).
2. Add the server (browse the marketplace or paste a config).
3. Authenticate when prompted — OAuth flows open in your browser.
4. Grant the **narrowest scope offered** (see `SAFE_ACCESS_RULES.md`).
5. Restart the MCP server from settings if tools don't appear.

Configuration lives in Cursor's own settings. `permissions.example.json` in this folder is an **illustrative template only** — it is not read by any tool.

---

## Recommended order of adoption

1. **Nothing** — week 1 needs zero integrations. Sell first.
2. **Google Sheets** — once the CRM outgrows manual copy-paste (30+ properties).
3. **Google Drive** — when proposals/reports need automated PDF export.
4. **Fetch/Web** — if property research volume justifies automated page reads.
5. **Memory** — optional, for persistent prospect context across sessions.

Full rationale per server: `SERVER_RECOMMENDATIONS.md`.

---

## Secrets

- Never paste API keys, tokens, or service-account JSON into markdown, CSVs, or chat.
- Store real secrets only in a local `.env` (already ignored by `.gitignore`).
- Commit only `.env.example` templates with placeholder values.
