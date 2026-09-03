---
title: Structure, Element, or Collection attachment failures
excerpt: Fix missing Structure Tags, unavailable assets, failed saves, and unexpected attachments.
deprecated: false
hidden: false
metadata:
  title: Organization attachment failures | WanAware Documentation
  description: Troubleshoot WanAware Structure Tag, Element, Collection, and asset attachments.
  keywords:
    - attach Element to Structure failed
    - attach Collection to Structure failed
    - Structure Tag missing
    - asset missing from Collection
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, engineer
permission: read structures and read elements; update the affected record for attachment changes
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-organization-attachments
video-status: not-planned
release-status: draft
-->

# Structure, Element, or Collection attachment failures

Use this page when a Structure Tag or asset cannot be selected, saved, removed, or found in the expected organizational view.

## Fast checks

1. Confirm the company workspace and exact record IDs.
2. Refresh and search for the Structure, Element, Collection, or asset by exact name.
3. Confirm the Structure Tag already exists.
4. Clear filters in the tag or asset selector.
5. Check both update permission and the relationship permission.
6. Reopen the record and inspect its current attachments.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Structure Tag is missing | Wrong company, filter, nonexistent tag, or no access | Clear the selector, verify the Structure, and ask an administrator to review permission. |
| Element attachment does not save | Element update or Structure Tag relationship access is missing | Request the smallest required permission, then retry the same record. |
| Collection attachment does not save | Collection update or relationship access is missing | Confirm both permissions and save after changing the tag. |
| Asset is missing from a Collection selector | Asset is filtered, in another status, or unavailable to the role | Clear filters, search Inventory and Discovery, and confirm the asset ID. |
| Attachment appears under the wrong node | A similarly named tag was selected | Compare Structure IDs, detach the incorrect tag, and apply the intended one. |
| Removed attachment still appears | The page is stale or the save failed | Refresh, reopen the record, and verify the saved tag list. |

## Verify the fix

Refresh the source record, confirm its selected tags or assets, then open the Structure or parent Element and verify the record appears in the intended view.

## Known limitations

Matching names do not create attachments. The relationship must be saved through the supported Structure Tag or asset-selection control. Available views can vary by record type and permission.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20organization%20attachment%20failure) with your company, affected user, Structure, Element, Collection, tag, and asset IDs as relevant, page URL, timestamp and time zone, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
