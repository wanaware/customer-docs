---
title: Missing, stale, or duplicate assets
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
permission: ASSETS
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-assets
video-status: not-planned
release-status: draft
-->

# Missing, stale, or duplicate assets

Do not delete or recreate an asset until you have checked its source identity and processing state.

## Fast checks

1. Confirm the company workspace.
2. Clear search, table filters, graph filters, and grouping.
3. Search both **Inventory** and **Discovery**.
4. Search by the provider identifier or another unique value, not name alone.
5. Confirm that the latest integration collection or bulk import finished.
6. Open each apparent duplicate and compare source, account, type, and unique ID.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Asset is missing from the current table | Filter, pagination, status, or workspace mismatch | Clear the view and search Inventory and Discovery in the correct company. |
| Newly connected resource is missing | Collection or ingestion is still processing | Wait for completion and refresh; do not run repeated overlapping collections. |
| Asset details look old | Source has not been collected since the change | Verify the integration, run one approved collection, and allow processing to finish. |
| Two assets have the same display name | They are different source resources or one was created manually | Compare source account, provider ID, type, and WanAware asset ID. |
| Two records represent the same source ID | Deduplication or mapping may need review | Preserve both records and send their IDs to Support. |

## Verify the fix

Open the asset and confirm that its type, status, source account, provider identifier, and updated properties match the intended resource.

## Known limitations

Display names are not always unique. A correct inventory may contain similarly named resources from different accounts, regions, providers, or asset types.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Missing%20stale%20or%20duplicate%20WanAware%20asset) with your company, all relevant asset IDs, provider ID, source account, latest collection or import time and time zone, page URL, filters checked, and screenshots. Never send provider credentials or secret properties.
