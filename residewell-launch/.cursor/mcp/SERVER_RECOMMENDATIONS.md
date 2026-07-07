# MCP Server Recommendations

> Five servers worth knowing about, why each helps ResideWell, and the safe scope for each. **None are required for week 1.**

---

## 1. Filesystem

|                    |                                                                                  |
| ------------------ | -------------------------------------------------------------------------------- |
| **Why useful**     | Read/write the CRM CSVs, templates, and checklists in this workspace             |
| **ResideWell use** | Already covered — Cursor's agent has built-in file tools scoped to the workspace |
| **Safe scope**     | This project folder only. Never the home directory.                              |
| **Verdict**        | No separate install needed                                                       |

## 2. Git

|                    |                                                                            |
| ------------------ | -------------------------------------------------------------------------- |
| **Why useful**     | Version history for every template and CRM change; easy rollback           |
| **ResideWell use** | Already covered by Cursor's built-in git support on this repo              |
| **Safe scope**     | This repository only; no force-push; founder approves anything destructive |
| **Verdict**        | No separate install needed                                                 |

## 3. Fetch / Web

|                    |                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **Why useful**     | Pull property websites, amenity pages, and reviews during research                                                    |
| **ResideWell use** | Speeds up the 15-min property research workflow at volume                                                             |
| **Safe scope**     | Read-only fetching of public pages. No form submissions, no logins. Fetched data still gets [VERIFY] before outreach. |
| **Verdict**        | Nice-to-have once researching 10+ properties/week                                                                     |

## 4. Google Drive / Sheets

|                    |                                                                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Why useful**     | Agent reads/updates the `ResideWell Pipeline` sheet directly; exports proposals to PDF via Docs                                              |
| **ResideWell use** | CRM updates without copy-paste; automated proposal export                                                                                    |
| **Safe scope**     | **Sheets:** the pipeline spreadsheet only. **Drive:** one dedicated `ResideWell` folder, read-only unless exporting. Never full-Drive scope. |
| **Setup**          | `google-sheets-setup.example.md` and `google-drive-setup.example.md`                                                                         |
| **Verdict**        | Add when the CRM passes ~30 properties                                                                                                       |

## 5. Memory

|                    |                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------- |
| **Why useful**     | Persistent context about prospects, objections heard, and preferences across sessions |
| **ResideWell use** | Remembers per-property nuances between research and proposal sessions                 |
| **Safe scope**     | Business facts only — no credentials, no personal data about residents                |
| **Verdict**        | Optional; CRM Notes column covers most of this need                                   |

---

## Already connected in this environment

- **Canva** — generate designed one-pagers/flyers from the markdown templates. Safe scope: create/edit designs only; founder reviews before sending.
- **Slack** — post weekly dashboard summaries. Safe scope: draft messages for founder review; no auto-send to external channels.

---

## Decision rule

Install an integration only when it saves more time than it costs to set up — and never during week 1. The CSV + Google Sheets manual flow is the system until the first pilot closes.
