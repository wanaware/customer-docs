---
title: Add or import Assets
excerpt: Create one asset manually or upload a validated file of assets.
deprecated: false
hidden: false
metadata:
  title: Add or import assets | WanAware Documentation
  description: Add a WanAware asset manually or use bulk upload and verify the result.
  keywords:
    - add asset
    - bulk upload assets
    - import assets
    - inventory
  robots: index
---

<!-- kb-meta
content-type: concept
audience: customer administrator, engineer
permission: create assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-add-import
video-status: planned
release-status: draft
-->

Choose the workflow that matches the number of Assets and the source of truth. Both paths require `create assets`.

![Flow showing records moving from an Integration or bulk upload through Discovery into Inventory.](https://files.readme.io/7b7bcbd448d2c8b241488410752730034e98dbafee729a7bca8d01ed4388707a-asset-lifecycle.png)

| Goal | Use | Important checkpoint |
| --- | --- | --- |
| Create one record and enter its details now | [Add an Asset](https://docs.wanaware.com/docs/add-an-asset) | Verify the exact name, Asset Type, and initial status after refresh. |
| Create many records from one Asset Type | [Bulk upload Assets](https://docs.wanaware.com/docs/bulk-upload-assets) | Resolve missing or unknown columns, then reconcile every result state. |
| Review found records before maintaining them | [Review Discovery and move Assets to Inventory](https://docs.wanaware.com/docs/review-discovery-and-move-assets-to-inventory) | Search Inventory for a duplicate before promotion. |
| Bring records from a supported external source | [Add an Integration](https://docs.wanaware.com/docs/add-an-integration) | Verify connection status, then find imported records by stable identity. |

Use manual creation for a small number of records or a one-off correction. Use bulk upload when a current template represents one Asset per row. Use an Integration when an external system remains the source of inventory data.

Regardless of path, search first. A matching display name is not enough to prove two records are different; compare Asset Type, source, and stable identifiers.

## Learn and continue

- **Learn:** [Understand Asset Types and Service Catalogs](https://docs.wanaware.com/docs/understand-asset-types-and-service-catalogs)
- **In WanAware:** Open `/assets/inventory`, then select **+ Add Asset**.

## Next steps

- [Populate Asset details](https://docs.wanaware.com/docs/populate-asset-details)
- [Find, filter, and inspect Assets](https://docs.wanaware.com/docs/find-filter-and-inspect-assets)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20adding%20or%20importing%20WanAware%20Assets) and include:

- Company, affected user, page URL, import timestamp, and time zone
- Asset Type, row number, or Asset ID
- Reproduction steps and the exact validation text

Never attach credentials, tokens, secrets, or customer-sensitive data.
