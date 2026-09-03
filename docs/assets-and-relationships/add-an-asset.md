---
title: Add an Asset
excerpt: Create one Asset in Discovery or Inventory and verify its saved identity.
deprecated: false
hidden: false
metadata:
  title: Add an Asset | WanAware Documentation
  description: Create a single Asset with the correct Asset Type, status, name, tags, and required details.
  keywords:
    - add asset
    - manual asset
    - create asset
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: create assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-add-manual
video-status: planned
release-status: draft
-->

# Add an Asset

**Outcome:** Create one Asset in the intended workspace and reopen it to confirm the saved values.

**For:** Customer administrators and engineers
**Permission:** `create assets`
**Time:** About 5 minutes
**Changes made:** Creates a shared Asset record

## If you're stuck

1. Confirm you opened **Functions → Assets → Inventory** and selected **+ Add Asset → Add Manual Asset**.
2. If **+ Add Asset** is missing, ask an administrator to add `create assets` to your Role.
3. If a field is missing, recheck the selected **Asset Type**; each type supplies a different form.
4. If **Add Asset** stays disabled, complete every field marked as required and resolve any dependent choice that was cleared.

## Before you start

- Search Inventory and Discovery for the proposed name and source identifier to avoid a duplicate.
- Know whether the record should enter **Inventory** as maintained data or **Discovery** for review.
- Confirm the Asset Type before entering type-specific details. Changing it can replace the visible field set.
- Never enter a password, credential, token, or secret in a name, tag, identifier, or free-text field.

## Field and option guide

| UI label | Purpose | Required state or format | Where the value comes from | Example | Where it appears later |
| --- | --- | --- | --- | --- | --- |
| **Asset Type** | Selects the schema and icon for the Asset. | Required; choose one existing type. | Your data model or administrator. | Router | Asset header, Inventory Type column, and detail tabs. |
| **Status** | Chooses the initial workspace. | Required; **Inventory** or **Discovery**. | Your review process. | Discovery | The matching Assets tab. |
| **Asset Name** | Gives the record its searchable identity. | Required; use a durable, unique name. | Approved inventory or source system. | edge-router-01 | Search, tables, Map, Graph, and Relationship Graph. |
| **Data Tags** | Adds descriptive labels for searching and filtering. | Optional; use an agreed `key:value` or team naming convention. | Your tagging standard. | environment:production | Asset details and supported filters. |
| **Structure Tags** | Attaches the Asset to a supported Structure node. | Optional; select an existing Structure Tag. | **Functions → Structures**. | East Region | Asset details and Structure context. |
| Type-specific fields | Stores details defined by the Asset Type. | Complete every required field; formats and choices come from the schema. | Source records, approved owner, or Service Catalog. | Serial number or model | Schema-specific detail tabs. |

## Create the Asset

1. Open **Functions → Assets → Inventory** (`/assets/inventory`).
2. Select **+ Add Asset**, then **Add Manual Asset**.
3. Choose the **Asset Type**. Recheck the form after selection because its fields can change.
4. Choose **Inventory** or **Discovery** under **Status**.
5. Enter **Asset Name** exactly as users should search for it.
6. Add approved **Data Tags** and **Structure Tags**. Do not create a new spelling of an existing tag.
7. Complete the required type-specific fields. For a catalog-backed field, select an existing catalog entry rather than typing a near-duplicate.
8. Select **Add Asset**.

**Expected result:** WanAware displays **Asset Added!** and identifies whether the record was added to Inventory or Discovery.

If the save fails, keep the form open, record the exact error, and correct only the named field. If no field is named, copy the non-secret values before refreshing so you can retry without guessing.

9. Select **View Asset** to inspect the record, **Add Another** to keep the same workflow open, or **Done** to close it.

## Verify

1. Open the tab selected under **Status**.
2. Clear old search text and filters.
3. Search for the exact **Asset Name**.
4. Open the result and confirm its Asset Type, status, tags, and required details.
5. Refresh the page and confirm the same values remain.

## Undo this change

Correct an editable value and save again. If the record should not exist, follow [Delete Assets safely](https://docs.wanaware.com/docs/delete-assets-safely) after checking Relationships, Structure Tags, and Collection membership. Do not delete a record merely to change a field.

## Learn, show me, do it

- **Learn:** [Add or import Assets](https://docs.wanaware.com/docs/add-or-import-assets)
- **Show me:** The add-or-import clip is pending Product and Support review.
- **Do it:** Open `/assets/inventory`, then select **+ Add Asset → Add Manual Asset**.

## Next steps

- [Populate Asset details](https://docs.wanaware.com/docs/populate-asset-details)
- [Find, filter, and inspect Assets](https://docs.wanaware.com/docs/find-filter-and-inspect-assets)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20adding%20an%20Asset) with your company, affected user, Asset Type, intended status, page URL, timestamp and time zone, reproduction steps, and exact error. Include the Asset ID if one was created. Never send passwords, credentials, access tokens, or secret values.
