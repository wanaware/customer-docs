---
title: Find, filter, and inspect Assets
excerpt: Use the Table, Map, and Graph views without confusing a visual match with record identity.
deprecated: false
hidden: false
metadata:
  title: Find, filter, and inspect Assets | WanAware Documentation
  description: Search, filter, and inspect WanAware Assets across the released Inventory views.
  keywords:
    - find assets
    - asset table
    - asset map
    - asset graph
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer
permission: read assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-find-filter-inspect
video-status: planned
release-status: draft
-->

**Outcome:** Locate the intended Asset, prove its identity, and choose the view that answers your question.

**For:** Customers who inspect Assets
**Permission:** `read assets`
**Time:** 2–5 minutes
**Changes made:** None

## If you're stuck

1. Confirm whether the record belongs in **Inventory** or **Discovery**.
2. Clear the current search and filters, then search one stable identifier instead of a partial display name.
3. Use **Table** to confirm identity before relying on Map or Graph placement.
4. If a result is missing, check the selected Asset tab, source status, and permission before assuming the record was deleted.

## Before you start

- Gather at least one stable identity value: exact name, source identifier, Asset Type, or another unique field.
- Remember that similarly named Assets can represent different resources.
- Export is not documented because the current released interface does not expose an enabled Asset export control.

## Field and option guide

### Find the correct record set

| Control | Use it when | Important limit |
| --- | --- | --- |
| **Discovery** | The record was found or imported but still needs review. | A Discovery record does not appear in Inventory until it is moved. |
| **Inventory** | You need a maintained Asset for normal work. | Inventory does not include records that remain in Discovery. |
| Search | You know a visible name or identifier, such as `edge-router-01`. | Search scope can differ between Table, Map, and Graph. |
| Filters | You want a supported property such as Asset Type = Router. | Clear old filters before reporting a missing Asset. |

### Choose a view

| View | Best for | Important limit |
| --- | --- | --- |
| **Table** | Comparing identity, tags, source, and row actions. | Use the full Asset ID before acting on similar names. |
| **Map** | Finding Assets with saved location information. | An Asset without usable location data may not appear. |
| **Graph** | Exploring supported connections or groupings in the current scope. | Absence from Graph does not prove the Asset is absent from Inventory. |
| **Actions** | Opening released row-level actions. | Available actions depend on Role and record state. |

## Find the correct record in Table

1. Open **Functions → Assets → Inventory** (`/assets/inventory`) or **Discovery** (`/assets/discovery`).
2. Select **Table**.
3. Clear search text and active filters.
4. Search the exact stable identifier.
5. If more than one row remains, compare **Type**, **Asset Name**, **Data Tags**, **Structure Tags**, **Elements/Collections**, and **Source**.
6. Open the likely match and confirm its Asset ID, Asset Type, source context, and schema details.

![Asset Inventory table narrowed to one example record with search, view controls, tags, source, and row actions.](https://files.readme.io/774951d14c429216eaee3e6dbd0d3669db23958ebbe371c86761a9215a279a8e-asset-inventory-table-and-filters.png)

**Expected result:** One record matches both the visible identity and its stable source or Asset ID.

If no record matches, repeat the same search in the other Asset tab. Do not create a replacement until [An Asset is missing, stale, or duplicated](https://docs.wanaware.com/docs/missing-stale-or-duplicate-assets) rules out a delayed or filtered record.

## Use Map

1. Keep the intended tab and filters selected.
2. Select **Map**.
3. Compare the visible count with Table.
4. Select a marker or supported map item and confirm it opens the expected Asset.

![Asset Inventory Map showing mapped Site clusters, coverage counts, Fit assets, and map controls.](https://files.readme.io/00b5db984df67ef12e5918108cb0a3441c417fcb3a3a222cf4da603a76667f17-asset-inventory-map.png)

**Expected result:** The Map shows Assets that contain supported location data. The Table still lists Assets that lack usable location data.

## Use Graph

1. Select **Graph** from the Assets page.
2. Apply the smallest useful search or filter scope.
3. Select a node and verify its name and Asset identity before following an edge.
4. Open the Asset's **Relationship Graph** for record-specific relationship investigation.

![Asset Inventory Graph showing scope, grouping controls, relationship insights, and an example Asset node.](https://files.readme.io/7513307ac9b0ffc6439cb078aa582881594b9ea1cc92b907ce734dd54d814474-asset-inventory-graph.png)

**Expected result:** The Graph presents supported connections for the current scope. Use the Table to confirm whether an Asset exists in Inventory.

## Verify

Refresh the Asset detail page and confirm its ID, Asset Type, source, status, tags, and relevant fields still match the resource you intended. Return to Table and verify that clearing filters does not reveal a second record with the same identity.

## Recover

Search and filter changes do not alter Assets. To recover from a confusing view, return to Table, clear search and filters, and reopen the correct tab. If a row action was used accidentally, follow the recovery guidance for that action immediately.

## Learn and continue

- **Learn:** [Product map and terminology](https://docs.wanaware.com/docs/product-map-and-terminology)
- **In WanAware:** Open `/assets/inventory`.

## Next steps

- [Populate Asset details](https://docs.wanaware.com/docs/populate-asset-details)
- [View Asset Relationships](https://docs.wanaware.com/docs/view-asset-relationships)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Cannot%20find%20a%20WanAware%20Asset) and include:

- Company, affected user, page URL, timestamp, and time zone
- Expected Asset name or sanitized ID, source, selected tab, view, and filters
- A sanitized screenshot

Never send passwords, credentials, access tokens, secrets, or an unredacted data export.
