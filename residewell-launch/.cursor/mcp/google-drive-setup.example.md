# Google Drive MCP Setup (Example / Notes)

> **Not required for week 1.** Manual PDF export via Google Docs (see `../../proposal/export-instructions.md`) covers proposal delivery until volume justifies automation.

---

## What it enables

- Agent saves proposal drafts into a Drive folder
- Automated Docs → PDF export for proposals and monthly reports
- Reading pilot artifacts (photos, signed agreements) for reporting

---

## Least-privilege recommendation

| Setting | Recommendation                                                                                  |
| ------- | ----------------------------------------------------------------------------------------------- |
| Scope   | **One dedicated folder** — create `ResideWell` in My Drive and grant access to that folder only |
| Access  | **Read-only to start.** Upgrade to read-write only when you actually want automated exports     |
| Never   | Full-Drive scope, access to personal folders, or account-wide file listing                      |

---

## Setup outline

1. In Google Drive, create a folder named `ResideWell` with subfolders: `Proposals`, `Reports`, `Agreements`.
2. Cursor Settings → MCP → add a Google Drive server.
3. Authenticate via OAuth — if the server offers folder-restricted or `drive.file` scope, choose it over full `drive` scope.
4. If service-account based: share only the `ResideWell` folder with the service-account email; keep the key file outside the repo.
5. Test with a read: "List files in the ResideWell/Proposals folder."

---

## Rules of use

- Proposals are **drafted** by the agent, **reviewed and sent** by the founder — always.
- Nothing from Drive enters the CRM without [VERIFY].
- No resident personal data is stored in Drive files the agent can read, beyond what reporting requires.

---

## Env template

```
# .env.example — copy to .env and fill locally. NEVER commit .env.
GOOGLE_DRIVE_FOLDER_ID=your-residewell-folder-id-here
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=/absolute/path/outside/repo/key.json
```
