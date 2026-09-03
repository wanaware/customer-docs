---
title: Create and populate Elements
excerpt: Create an Application, Service, or Site and complete the details supported for that type.
deprecated: false
hidden: false
metadata:
  title: Create and populate Elements | WanAware Documentation
  description: Create WanAware Application, Service, and Site Elements and complete their details.
  keywords:
    - Add Element
    - Application Element
    - Service Element
    - Site Element
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: create elements and update elements
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: elements-create-populate
video-status: planned
release-status: draft
-->

# Create and populate Elements

**Outcome:** Create an Application, Service, or Site Element and complete the details supported by that type.

**For:** Customer administrators and engineers
**Permission:** `create elements` and `update elements`
**Time:** 5–15 minutes
**Changes made:** Creates and edits a shared Element

## If you're stuck

- Search by exact **Element Name** before adding another record.
- Choose **Site** only for a location-oriented Element; Site-only tabs do not appear on Applications or Services.
- If a Structure Tag is missing, verify the Structure first instead of creating a duplicate tag.

## Before you start

- Search **Elements** for the intended name.
- Choose **Application**, **Service**, or **Site**.
- Identify any existing Structure Tags and Collections.
- For a Site, gather approved Site Assets and Location information.

## Field and option guide

| UI item | Purpose | Choice or format | Where it appears later |
| --- | --- | --- | --- |
| **Element Name** | Identifies the operational grouping | Recognizable, unique name | Element list and details |
| **Element Type** | Selects the record behavior | **Application**, **Service**, or **Site** | Element details and type-specific tabs |
| Data Tags | Adds descriptive labels | Existing approved labels | Element details and filters |
| **Structure Tags** | Attaches the Element to a hierarchy node | Exact existing Structure node | Structure context and Element details |
| **Collections** | Groups existing Assets inside the Element | Named customer-defined groups | Element's Collections tab |
| **Site Assets** | Associates Inventory Assets with a Site | Existing Assets confirmed by unique ID | Site details |
| **Location** | Stores Site location details | Approved location values | Site details |

## Create the Element

1. Open **Functions → Elements**.
2. Select **+ Add Element**.
3. Enter a unique **Element Name**.
4. Select **Element Type**.
5. Add existing **Structure Tags** when the placement is already approved.
6. For a Site, prepare to complete **Site Assets** and **Location** after creation; Applications and Services do not use those Site-only tabs.
7. Select **Add Element**.

**Expected result:** WanAware shows **Element Added!** and provides the next actions supported for that Element type.

## Populate its details

1. Select **View Element**.
2. Edit the name if needed.
3. Add approved Data Tags and **Structure Tags**.
4. Open **Collections** to review or add asset groups.
5. For a Site, open **Site Assets** and **Location**.
6. Save each changed area and refresh the page.

**Expected result:** The name, tags, Collections, and supported Site information remain after refresh.

If a Site-only tab is missing, confirm the Element Type before creating a replacement.

## Check your result

Search for the Element by exact name, open it, and confirm its type, tags, Collections, and Site-specific details where applicable.

## Undo this change

Remove an incorrect tag or asset attachment from the Element. Before deleting the Element, review its Collections, Site Assets, Location, and Structure Tags. Do not delete attached assets to remove the Element.

## Learn, show me, do it

- **Learn:** [Understand Structures, Elements, and Collections](understand-structures-elements-and-collections)
- **Show me:** The organization clip will show Element creation and enrichment after publication.
- **Do it:** Open `/elements` in your WanAware workspace.

## Next steps

- [Attach Elements to Structures](attach-elements-to-structures)
- [Create Collections and add assets](create-collections-and-add-assets)
- [Manage Site details](manage-site-details)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Element%20help) with your company, affected user, Element type and ID, page URL, timestamp and time zone, failed tab or field, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
