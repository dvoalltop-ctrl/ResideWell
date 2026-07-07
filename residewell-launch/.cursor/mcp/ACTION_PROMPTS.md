# MCP Action Prompts

> Copy-paste prompts for Cursor once the relevant MCP tool is connected. Each respects the safe-access rules: [VERIFY] on unknowns, no invented contacts, no external writes without explicit instruction.

---

## Research & CRM

**Fetch a property page** _(requires Fetch/Web)_

```
Use the Fetch/Web MCP tool on this apartment community website. Extract amenities,
management company, ownership if visible, any resident-event language, and one
likely pain point ResideWell could solve. Put unknown values as [VERIFY]. Then
draft a CRM-ready summary.
```

**Populate a CRM row**

```
Using the approved property research only, populate one CSV row for
crm/target-properties-template.csv. Do not invent contacts, unit count, or
ownership. Use [VERIFY] where needed.
```

**Summarize property fit**

```
Review this property's public website notes and score it 1–5 using the ResideWell
fit rubric. Explain the score in 4 sentences max and recommend A, B, or C priority.
```

---

## Outreach & proposals

**Create a personalized email**

```
Using the property summary and the ResideWell sales rule, write one short outreach
email that references the property's actual amenity spaces and positions ResideWell
as amenity activation, not a fitness vendor.
```

**Create a property-specific pilot one-pager**

```
Using the standard pilot template, customize proposal/8-week-pilot-one-pager.md
for this property. Keep all unverifiable items marked [VERIFY].
```

**Export a Google Doc to PDF** _(requires Drive/Docs MCP — not currently connected)_

```
If the installed Google Drive/Docs MCP supports export, export the current pilot
proposal document to PDF into the approved proposal output folder. If export is
not supported, generate the final markdown/html artifact and give manual export
instructions instead.
```

---

## Data & reporting

**Push CRM updates to Google Sheets** _(requires Sheets MCP — not currently connected)_

```
Using the approved Google Sheets MCP integration and the designated spreadsheet
only, write these verified rows into the Target Properties tab starting at row 2.
```

**Turn attendance into insight**

```
Read operations/class-attendance-tracker.csv and summarize attendance trends,
repeat participation, and one recommendation for scheduling or programming changes.
```

---

## Currently connected in this environment

- **Canva** — "Create a Canva one-pager from proposal/8-week-pilot-one-pager.md for [Property Name]." (Review before sending.)
- **Slack** — "Draft a Slack message summarizing this week's dashboard." (Draft only; founder sends.)
