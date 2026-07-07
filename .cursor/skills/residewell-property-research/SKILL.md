---
name: residewell-property-research
description: Research and score target luxury apartment properties for ResideWell outreach, extracting property details, amenities, pain points, outreach angle, and a 1–5 fit score. Use when researching apartment communities, building or enriching the ResideWell CRM, qualifying target properties, or when the user asks to find or evaluate multifamily prospects.
---

# ResideWell Property Research

When researching target apartment properties, extract and score:

1. Property name
2. City
3. Submarket
4. Unit count, if available
5. Management company
6. Ownership company, if available
7. Property manager or regional contact, if available
8. Amenities:
   - Fitness center
   - Yoga/studio space
   - Rooftop
   - Courtyard
   - Pool
   - Resident lounge
9. Current resident events, if publicly visible
10. Luxury positioning
11. Review themes
12. Likely pain point
13. Outreach angle
14. Fit score from 1–5
15. Recommended next action

## Fit scoring

5 = luxury, 180+ units, strong amenities, professional management, likely resident engagement need
4 = strong fit but missing one key signal
3 = possible fit, needs more research
2 = weak fit
1 = do not prioritize

Never invent contacts, emails, unit counts, or ownership details. Mark unknown fields as "Unknown."

## Output format

Return one row per property, ready to paste into `residewell-launch/crm/target-properties-week1.csv` (columns match the 15 fields above where present). For multiple properties, use a table sorted by Fit score (high to low).

## Reference

CRM structure and column definitions: `residewell-launch/crm/`. Business positioning and offer: the `residewell-business-context` skill.
