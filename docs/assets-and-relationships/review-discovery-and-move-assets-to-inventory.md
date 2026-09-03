---
title: Review Discovery and move Assets to Inventory
excerpt: Review found Asset records, prevent duplicates, and promote selected records into the maintained Inventory.
deprecated: false
hidden: false
metadata:
  title: Review Discovery and move Assets to Inventory | WanAware Documentation
  description: Understand why Assets appear in Discovery and safely use Move To Inventory.
  keywords:
    - move discovery to inventory
    - discovered assets
    - move to inventory
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: update assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-discovery-review
video-status: planned
release-status: draft
-->

# Review Discovery and move Assets to Inventory

**Outcome:** Confirm found records belong in the maintained set and move only the intended Assets to Inventory.

**For:** Customer administrators and engineers
**Permission:** `update assets`
**Time:** 5–15 minutes, plus background processing
**Changes made:** Changes selected Asset status from Discovery to Inventory

## If you're stuck

1. Clear old search text and filters, then reopen **Functions → Assets → Discovery**.
2. If **Move To Inventory** is absent, select at least one row and confirm your Role has `update assets`.
3. Search Inventory for the same name and source identifier before moving a possible duplicate.
4. After submission, wait for processing, refresh both tabs, and avoid selecting the same rows again.

## Before you start

- A record can be in Discovery because supported source data found it or because it was intentionally created for review.
- Decide which identity fields prove that the record is not already represented in Inventory.
- Inspect required details before promotion; moving a record does not supply missing business context.

![Flow showing records moving from an Integration or bulk upload through Discovery into Inventory.](https://files.readme.io/7b7bcbd448d2c8b241488410752730034e98dbafee729a7bca8d01ed4388707a-asset-lifecycle.png)

## Field and option guide

| UI label | Purpose | Required state or format | Where the value comes from | Example | Where it appears later |
| --- | --- | --- | --- | --- | --- |
| **Discovery** | Holds found or review-stage Assets. | Record has Discovery status. | Integration, upload, or manual creation. | Found router | Discovery tab. |
| Search | Narrows visible records. | Use a name, stable identifier, or other visible identity value. | Source record. | edge-router-01 | Current view only. |
| Row selection | Chooses records for the action. | Select only records you have reviewed. | Discovery table. | One checked row | Action bar count. |
| **Move To Inventory** | Promotes selected records. | Requires selection and `update assets`. | Discovery action bar. | — | Inventory after processing. |

## Review and move records

1. Open **Functions → Assets → Discovery** (`/assets/discovery`).
2. Search for a specific record and open it.
3. Confirm its Asset Type, name, source identifier, tags, and required details.
4. Open Inventory in a second tab or return to it and search the same identity values.
5. If an Inventory record represents the same resource, stop and resolve the duplicate instead of promoting another copy.
6. Return to Discovery and select the reviewed row or rows.
7. Select **Move To Inventory**.

![Discovery table with an example row selected and the Move To Inventory action available.](https://files.readme.io/1ed89d209a497b28d71b8090b0106a3f62f4f803a9073eb98222a9bb45d94c51-discovery-move-to-inventory.png)
8. Confirm the action when prompted.

![Move Assets confirmation showing the selected Asset count and the final Move action.](https://files.readme.io/2ff36ba4421f77fb0695433eb56ac26e717eb8a0a36f1d75571c48acf62b6c59-discovery-move-confirmation.png)

**Expected result:** WanAware accepts the request and processes the status change. The selected rows can remain visible briefly while background processing completes.

If only some rows move, record the remaining IDs and refresh before retrying. A partial result can mean one selected record no longer met the action requirements.

## Verify

1. Refresh Discovery and confirm the moved names are no longer present.
2. Open Inventory, clear filters, and search for each moved Asset.
3. Open a result and verify its status is Inventory and its details were preserved.
4. If the record is missing from both tabs, wait for the current background job to finish, refresh once, and then escalate with its identifier.

## Undo this change

Do not delete the Asset to reverse an accidental promotion. First confirm whether your released workspace provides an approved status-edit path for that record. If it does not, contact Support with the Asset ID and promotion timestamp so the record can be assessed without losing Relationships or attachments.

## Learn, show me, do it

- **Learn:** [Product map and terminology](https://docs.wanaware.com/docs/product-map-and-terminology)
- **Show me:** The Discovery review clip is pending workflow verification and approval.
- **Do it:** Open `/assets/discovery`.

## Next steps

- [Populate Asset details](https://docs.wanaware.com/docs/populate-asset-details)
- [Missing, stale, or duplicate Assets](https://docs.wanaware.com/docs/missing-stale-or-duplicate-assets)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Discovery%20to%20Inventory%20help) with your company, affected user, selected Asset IDs, page URL, action timestamp and time zone, expected versus actual tab, reproduction steps, and a sanitized screenshot or exact error. Never send passwords, credentials, access tokens, or secret values.
