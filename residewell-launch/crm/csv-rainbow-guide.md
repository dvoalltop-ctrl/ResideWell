# CSV Guide (Rainbow CSV)

Open any `.csv` in Cursor to see **color-coded columns**. Each color = one field — scan across a row without losing your place.

---

## Files

| File                                         | Use for                                              |
| -------------------------------------------- | ---------------------------------------------------- |
| `target-properties-week1.csv`                | **Start here** — 19 columns for week 1 outreach      |
| `target-properties-template.csv`             | Full pipeline — import to Google Sheets when scaling |
| `target-properties-example.csv`              | Format reference only — delete before real outreach  |
| `../operations/class-attendance-tracker.csv` | Log classes after pilot launches                     |

---

## Column groups (`target-properties-template.csv`)

Rainbow CSV colors columns left-to-right. Groups are ordered so related fields sit together:

| Columns | Group                | Key fields                                            |
| ------- | -------------------- | ----------------------------------------------------- |
| 1–7     | **Property**         | Name, City, Submarket, Address, Website, Units, Class |
| 8–9     | **Ownership**        | Management Company, Ownership Company                 |
| 10–12   | **PM contact**       | Name, Email, LinkedIn                                 |
| 13–15   | **Regional contact** | Name, Email, LinkedIn                                 |
| 16–22   | **Amenities**        | Amenities list + Yes/No flags                         |
| 23–26   | **Research**         | Events, Rating, Reviews, Pain Point                   |
| 27–31   | **Score & hook**     | Quick Score, Fit Score, Verified, Hook, Priority      |
| 32–36   | **Pipeline**         | Status, dates, Notes                                  |
| 37–40   | **Deal**             | Offer, Proposal Sent, Value, Probability              |

---

## Week 1 workflow

1. Open `target-properties-week1.csv` in Cursor.
2. **File → Save a copy** or import to Google Sheets as `ResideWell Pipeline`.
3. Fill rows top-to-bottom — one property per row.
4. Filter on **Status** = `Contact Found` and **Contact Verified** = `Yes` before emailing.
5. Sort by **Quick Score** (high first).

---

## Field rules

| Field            | Allowed values                       |
| ---------------- | ------------------------------------ |
| Contact Verified | `Yes` / `No` — **No = do not email** |
| Quick Score      | `0`–`6`                              |
| Status           | See `crm-field-definitions.md`       |
| Priority Level   | `High` / `Medium` / `Low`            |
| Proposal Sent    | `Yes` / `No`                         |
| Deal Value       | `4000` (default pilot)               |
| Dates            | `YYYY-MM-DD`                         |

---

## Google Sheets tip

After import, add **Data validation** on Status and Contact Verified columns (see `week-1-crm-setup.md`). Rainbow CSV helps while editing locally; Sheets is better for mobile and sharing.
