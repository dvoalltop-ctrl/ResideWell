# Google Sheets MCP Setup (Example / Notes)

> **Not required for week 1.** The manual flow — edit the Google Sheet in the browser — is the system until the CRM passes ~30 properties. This file exists so setup is a 15-minute task when the time comes.

---

## What it enables

- Agent reads the `ResideWell Pipeline` sheet and answers "who do I contact today?"
- Agent appends researched properties as new rows (still [VERIFY]-gated)
- Agent updates Status / Next Follow-Up Date after you report outreach

---

## Least-privilege recommendation

| Setting       | Recommendation                                                                                                                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope         | **One spreadsheet only** — `ResideWell Pipeline`. Never account-wide Sheets or full Drive scope.                                                                                                                                                    |
| Access        | Read-write on that one sheet (the whole point is updating rows)                                                                                                                                                                                     |
| Sharing model | If the server uses a service account: share only the pipeline sheet with the service-account email. If OAuth: choose the narrowest scope offered (`drive.file` — only files the app creates/opens — over `spreadsheets` full scope where possible). |

---

## Setup outline

1. Cursor Settings → MCP → add a Google Sheets server (marketplace or vendor instructions).
2. Authenticate via OAuth in the browser — grant the narrowest scope offered.
3. If service-account based: put the credential JSON in a local file **outside the repo** (or in `.env`, which is gitignored) — never commit it.
4. Test with a read: "List the first 3 rows of ResideWell Pipeline."
5. Confirm the agent follows `SAFE_ACCESS_RULES.md` — no writes without your instruction.

---

## Env template (if the server needs variables)

Create a local `.env` (gitignored). Example placeholders only:

```
# .env.example — copy to .env and fill locally. NEVER commit .env.
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-here
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=/absolute/path/outside/repo/key.json
```
