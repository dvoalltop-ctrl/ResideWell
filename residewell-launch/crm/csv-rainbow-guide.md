# CSV Guide (Rainbow CSV)

Open any `.csv` in Cursor to see **color-coded columns**. Each color = one field.

---

## Files

| File                                         | Use for                                                                                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `target-properties-week1.csv`                | **Start here** — 20 working columns (adds Outreach Angle, Contact Verified, Discovery Call Date) |
| `target-properties-template.csv`             | Master 36-column template — canonical column set for scaling to 50 properties                    |
| `target-properties-example.csv`              | 3 rows marked EXAMPLE / [VERIFY] — format reference only, delete before real outreach            |
| `../operations/class-attendance-tracker.csv` | Log classes after pilot launches                                                                 |

---

## Column groups (`target-properties-template.csv` — 36 columns)

| Columns | Group            | Key fields                                                   |
| ------- | ---------------- | ------------------------------------------------------------ |
| 1–7     | Property         | Name, City, Submarket, Address, Website, Units, Class        |
| 8–9     | Ownership        | Management Co., Ownership Co. ([VERIFY] is fine)             |
| 10–12   | PM contact       | Name, Email, LinkedIn                                        |
| 13–15   | Regional contact | Name, Email, LinkedIn                                        |
| 16–22   | Amenities        | List + Yes/No flags                                          |
| 23–26   | Research         | Events, Rating, Review Themes, Pain Point                    |
| 27–28   | Score            | Fit Score (1–5), Priority Level                              |
| 29–32   | Pipeline         | Status, Last Contact, Next Follow-Up, Notes                  |
| 33–36   | Deal             | Proposed Offer, Proposal Sent, Deal Value, Close Probability |

---

## Field rules

| Field             | Allowed values                                    |
| ----------------- | ------------------------------------------------- |
| Fit Score         | `1`–`5` (see `fit-score-formula.md`)              |
| Contact Verified  | `Yes` / `No` — **No = do not email** (week-1 CSV) |
| Status            | 10 values in `crm-field-definitions.md`           |
| Priority Level    | `High` / `Medium` / `Low`                         |
| Unverifiable data | Literal text `[VERIFY]` — never a guess           |
| Dates             | `YYYY-MM-DD`                                      |
| Deal Value        | `4000` (default pilot)                            |

---

## Google Sheets tip

After import, add Data validation on Status and Contact Verified (see `week-1-crm-setup.md`). Rainbow CSV is best for local editing; Sheets is better for mobile and filter views.
