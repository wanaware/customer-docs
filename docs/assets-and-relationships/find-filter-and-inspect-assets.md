---
title: Find, filter, and inspect assets
excerpt: Locate an asset in Discovery or Inventory and open the correct detail record.
deprecated: false
hidden: false
metadata:
  title: Find, filter, and inspect assets | WanAware Documentation
  description: Search, filter, and inspect WanAware assets in table, map, or graph view.
  keywords:
    - search assets
    - filter inventory
    - asset details
    - discovery
    - table view
    - graph view
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer
permission: ASSETS
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Find, filter, and inspect assets

**Outcome:** Locate the intended asset and verify that you opened the correct record.

**For:** Customer administrators, engineers, and support staff
**Permission:** Assets
**Time:** 3–5 minutes
**Changes made:** None

## Find an asset

1. Open **Functions → Assets**.
2. Choose **Inventory** for maintained records or **Discovery** for discovered records still under review.
3. Use **Table**, **Map**, or **Graph** view as available.
4. In table view, search using the most specific known value: full name, provider identifier, IP address, or another unique field.
5. Apply filters only after checking the unfiltered result.
6. Select the asset row or graph node.

**Expected result:** The detail page opens and shows the asset name, type, status, and type-specific tabs.

## Narrow a graph safely

1. Use graph search to select a known asset.
2. Open **Filters** to narrow by asset type, site, Structure, or Element when those values exist.
3. Use **Group by** to organize the visualization without changing the underlying relationships.
4. Select **Clear All Filters** before deciding that an asset is missing.

## Confirm the record

Before editing or reporting a problem, compare:

- Asset name and type
- Inventory or Discovery status
- Provider or source details
- Account, site, Element, or Structure context
- Unique asset identifier

Two records with similar names may represent different provider resources.

## Check your result

You have the correct asset when its unique identifier and source context match the resource you expected.

## If the asset is missing

1. Clear all filters and search terms.
2. Check both **Inventory** and **Discovery**.
3. Confirm that you are in the correct company workspace.
4. Ask an administrator whether your role includes Assets.
5. If the asset came from AWS, confirm that the latest crawl completed.
6. Follow [Missing, stale, or duplicate assets](../troubleshooting-and-support/missing-stale-or-duplicate-assets).

## Learn, show me, do it

- **Learn:** [Product map and terminology](../start-here/product-map-and-terminology)
- **Show me:** Use the asset portion of **Demo orientation and your first 30 minutes** when the Loom clip is published.
- **Do it:** Open `/assets/inventory` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Cannot%20find%20a%20WanAware%20asset) with your company, expected asset name or ID, source account, current workspace, page URL, filters used, timestamp and time zone, and a screenshot. Never send credentials or tokens.
