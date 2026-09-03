---
title: View asset relationships
excerpt: Read an asset's Relationship Graph and open connected context.
deprecated: false
hidden: false
metadata:
  title: View asset relationships | WanAware Documentation
  description: Open and interpret the WanAware Relationship Graph for an asset.
  keywords:
    - Relationship Graph
    - connected assets
    - asset relationships
    - graph depth
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
last-verified-release: pending
screenshot-set: assets-relationship-graph
video-status: planned
release-status: draft
-->

# View asset relationships

**Outcome:** Identify how one asset is connected to another resource and open the connected record.

**For:** Customer administrators, engineers, and support staff
**Permission:** Assets
**Time:** About 5 minutes
**Changes made:** None

## Before you start

Find a known asset in **Functions → Assets → Inventory** and verify its identity.

## Explore the graph

1. Select **Relationship Graph** in the asset details.
2. Locate the focused asset.
3. Follow a connecting line to a neighboring node.
4. Select the neighboring node to review its label and available details.
5. Change relationship depth only when more context is needed.
6. Use search or focus controls to return to a known resource.

**Expected result:** You can name the focused asset, one connected resource, and the represented relationship.

## Use the broader graph

1. Return to **Assets** and select the Graph view when available.
2. Use **Filters** to narrow by supported Asset Type, Site, Structure, or Element values.
3. Use **Group by** to organize the view.
4. Select **Clear All Filters** before treating an absent node as missing data.

Grouping and filtering change only the view. They do not create or remove relationships.

## Check your result

Open the connected asset and confirm its name, Asset Type, and source context match the selected node.

## If the graph is empty or surprising

- Confirm both expected assets exist.
- Wait for active ingestion and relationship processing to finish.
- Clear graph filters and reduce grouping.
- Compare the graph with source properties.
- Use [Missing or unexpected relationships](../troubleshooting-and-support/missing-or-unexpected-relationships).

## Learn, show me, do it

- **Learn:** [Relationship Discovery Engine](relationship-discovery-engine)
- **Show me:** The captioned relationship clip will be embedded after review.
- **Do it:** Open an asset in `/assets/inventory` and select **Relationship Graph**.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20relationship%20graph%20question) with your company, affected user, both sanitized asset IDs, page URL, graph depth, filters, timestamp and time zone, and a screenshot. Never send passwords, credentials, tokens, or secret values.
