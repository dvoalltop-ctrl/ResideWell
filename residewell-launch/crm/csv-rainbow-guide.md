# CSV Guide (Rainbow CSV)

Open any `.csv` in Cursor to see **color-coded columns**. Each color = one field.

---

## Files

| File                                         | Use for                                             |
| -------------------------------------------- | --------------------------------------------------- |
| `target-properties-week1.csv`                | **Start here** — 20 columns for week 1 outreach     |
| `target-properties-template.csv`             | Full 39-column pipeline — scaling to 50 properties  |
| `target-properties-example.csv`              | Format reference — delete rows before real outreach |
| `../operations/class-attendance-tracker.csv` | Log classes after pilot launches                    |

---

## Column groups (`target-properties-template.csv`)

| Columns | Group            | Key fields                                            |
| ------- | ---------------- | ----------------------------------------------------- |
| 1–7     | Property         | Name, City, Submarket, Address, Website, Units, Class |
| 8–9     | Ownership        | Management Co., Ownership Co. ("Unknown" is fine)     |
| 10–12   | PM contact       | Name, Email, LinkedIn                                 |
| 13–15   | Regional contact | Name, Email, LinkedIn                                 |
| 16–22   | Amenities        | List + Yes/No flags                                   |
| 23–26   | Research         | Events, Rating, Review Themes, Pain Point             |
| 27–30   | Score & angle    | Outreach Angle, Fit Score, Contact Verified, Priority |
| 31–35   | Pipeline         | Status, dates, Notes                                  |
| 36–39   | Deal             | Offer, Proposal Sent, Value, Probability              |

---

## Field rules

| Field            | Allowed values                                 |
| ---------------- | ---------------------------------------------- |
| Fit Score        | `1`–`5` (see `property-research-scorecard.md`) |
| Contact Verified | `Yes` / `No` — **No = do not email**           |
| Status           | 10 values in `crm-field-definitions.md`        |
| Priority Level   | `High` / `Medium` / `Low`                      |
| Unknown data     | Literal text `Unknown` — never a guess         |
| Dates            | `YYYY-MM-DD`                                   |
| Deal Value       | `4000` (default pilot)                         |

---

## Google Sheets tip

After import, add Data validation on Status and Contact Verified (see `week-1-crm-setup.md`). Rainbow CSV is best for local editing; Sheets is better for mobile and filter views.
