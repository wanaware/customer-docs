---
title: Missing, stale, or duplicate Assets
excerpt: Determine whether filters, workspace context, crawl timing, status, or source identity explains an asset problem.
deprecated: false
hidden: false
metadata:
  title: Missing, stale, or duplicate assets | WanAware Documentation
  description: Troubleshoot missing, outdated, or duplicated WanAware asset records.
  keywords:
    - missing asset
    - stale asset
    - duplicate asset
    - inventory not updated
    - discovery
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, engineer, support
permission: read assets; update assets for corrections
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-assets
video-status: not-planned
release-status: draft
-->

# Missing, stale, or duplicate Assets

Do not delete or recreate an Asset until you have checked its source identity and processing state.

## Fast checks

1. Confirm the company workspace.
2. Clear search, table filters, graph filters, and grouping.
3. Search both **Inventory** and **Discovery**.
4. Search by the provider identifier or another unique value, not name alone.
5. Confirm that the latest integration collection or bulk import finished.
6. Open each apparent duplicate and compare source, account, type, and unique ID.

![Asset Inventory table narrowed to one example record with search, view controls, tags, source, and row actions.](https://files.readme.io/774951d14c429216eaee3e6dbd0d3669db23958ebbe371c86761a9215a279a8e-asset-inventory-table-and-filters.png)

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Asset is missing from the current table | Filter, pagination, status, or workspace mismatch | Clear the view and search Inventory and Discovery in the correct company. |
| Newly connected resource is missing | WanAware is still processing collection or ingestion | Wait for completion and refresh; do not run repeated overlapping collections. |
| Asset details look old | The latest collection occurred before the source change | Verify the Integration, run one approved collection, and allow processing to finish. |
| Two Assets have the same display name | They represent different source resources, or someone created one manually | Compare source account, provider ID, Asset Type, and WanAware Asset ID. |
| Two records represent the same source ID | Deduplication or mapping may need review | Preserve both records and send their IDs to Support. |

## Verify the fix

Open the asset and confirm that its type, status, source account, provider identifier, and updated properties match the intended resource.

## Known limitations

Display names are not always unique. A correct inventory may contain similarly named resources from different accounts, regions, providers, or asset types.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Missing%20stale%20or%20duplicate%20WanAware%20Asset) and include:

- Company, page URL, filters checked, timestamp, and time zone
- All relevant Asset IDs, provider ID, and source account
- Latest collection or import time and sanitized screenshots

Never send provider credentials or secret properties.
