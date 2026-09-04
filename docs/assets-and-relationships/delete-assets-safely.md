---
title: Delete Assets safely
excerpt: Check dependencies, delete only the intended Asset records, and verify the result without masking duplicates.
deprecated: false
hidden: false
metadata:
  title: Delete Assets safely | WanAware Documentation
  description: Review Asset dependencies and safely use the released delete action.
  keywords:
    - delete asset
    - remove asset
    - asset dependencies
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: delete assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-delete
video-status: not-planned
release-status: draft
-->

**Outcome:** Remove only confirmed obsolete Assets after recording their dependencies and verify that no unintended record was affected.

**For:** Customer administrators
**Permission:** `delete assets`
**Time:** 5–15 minutes
**Changes made:** Permanently removes selected shared Asset records and can affect their visible organization and Relationship context

## If you're stuck

1. If **Delete** is missing, confirm a row is selected and your Role has `delete assets`.
2. Reopen the Asset and verify its ID—not only its display name.
3. Record its Relationships, Structure Tags, and Element or Collection membership before deletion.
4. If the Asset is integration-owned or appears duplicated, stop and determine the authoritative source before removing anything.

## Before you start

- Deletion is not a rename, merge, status change, or duplicate-resolution shortcut.
- Save the Asset ID, source, Asset Type, relevant tags, Relationships, and attachments in the approved work record.
- Confirm the Asset is not needed by another user or process.
- Do not assume a deleted record can be restored; no restore action is documented for this release.

## Field and option guide

### Before opening Delete

| UI label | What to verify | Where to verify it |
| --- | --- | --- |
| Selection checkbox | Every selected row has the intended Asset name and ID. | Inventory or Discovery table. |
| **Actions** | You have checked Relationships, Structure Tags, Collection membership, and source ownership. | Asset row and Asset details. |

### Confirmation

| UI label | Required check | Expected result |
| --- | --- | --- |
| **Delete** | Your Role has `delete assets`, and the Asset is safe to remove. | The confirmation dialog opens; nothing is deleted yet. |
| Confirmation count | The count exactly matches the reviewed selection. | After confirmation and processing, the record no longer appears in the original result set. |

## Delete the Asset

1. Open the Asset from Inventory or Discovery.
2. Copy its stable Asset ID and confirm the Asset Type and source.
3. Record current Relationships, Structure Tags, and Element or Collection membership.
4. Return to the Asset table and select the exact row. For one record, you may instead use its **Actions** menu if **Delete** is present there.
5. Select **Delete**.
6. Read the confirmation message and verify the count and identity.

![Delete Asset confirmation with the example Asset shown and record identifiers masked.](https://files.readme.io/d581c900bc65fd9b730dc5ced9c030effcedb3cae1d50073397820d1d35ba877-delete-asset-confirmation.png)
7. Confirm deletion.

**Expected result:** WanAware accepts the deletion and removes the Asset from the active table after processing.

If the confirmation scope is wrong, cancel without making changes and clear the selection. If submission is uncertain, refresh and search before sending the action again.

## Verify

1. Clear all filters and search Inventory and Discovery for the deleted Asset ID and name.
2. Confirm similarly named Assets still exist.
3. Reopen any related Element or Collection and verify only the deleted membership disappeared.
4. Record the result in the approved work item.

## Recover

There is no documented self-service restore for this release. If deletion was accidental, stop making related changes and contact Support immediately with the deleted Asset ID, source, page URL, and timestamp. If the source Integration recreates the record, compare its new identity and attachments before treating it as the same Asset.

## Learn and continue

- **Learn:** [Find, filter, and inspect Assets](https://docs.wanaware.com/docs/find-filter-and-inspect-assets)
- **In WanAware:** Open `/assets/inventory` or `/assets/discovery` and select only the reviewed record.

## Next steps

- [Missing, stale, or duplicate Assets](https://docs.wanaware.com/docs/missing-stale-or-duplicate-assets)
- [Contact WanAware Support](https://docs.wanaware.com/docs/contact-wanaware-support)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Asset%20deletion%20help) with your company, affected user, Asset ID, Asset Type, source, page URL, deletion timestamp and time zone, reproduction steps, and expected versus actual result. Never send passwords, credentials, access tokens, or secret values.
