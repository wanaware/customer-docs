---
title: View asset relationships
excerpt: Read an asset's relationship graph and move from a resource to its connected context.
deprecated: false
hidden: false
metadata:
  title: View asset relationships | WanAware Documentation
  description: Open and interpret the WanAware Relationship Graph for an asset.
  keywords:
    - relationship graph
    - connected assets
    - asset relationships
    - graph depth
    - dependencies
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

# View asset relationships

**Outcome:** Identify how one asset is connected to another resource and open the connected record.

**For:** Customer administrators, engineers, and support staff
**Permission:** Assets
**Time:** 5 minutes
**Changes made:** None

## Before you start

Find a known asset in **Functions → Assets → Inventory** and open its details.

## Explore the graph

1. Select **Relationship Graph** in the asset details.
2. Locate the selected asset. It is the focus of the current graph.
3. Follow one connecting line to a neighboring node.
4. Select the neighboring node to review its available details or actions.
5. Change the relationship depth when you need more context. Start at the smallest depth that answers the question.
6. Use search or focus controls to return to a known resource.

**Expected result:** You can name the focused asset, one connected resource, and the relationship between them.

## Use the aggregate graph

The Assets **Graph** view can show a broader environment picture.

- Use **Filters** to narrow by asset type, site, Structure, or Element.
- Use **Group by** to organize nodes by Site, Inventory, Element, Structure, or Relationship when those options are available.
- Clear filters before interpreting a missing node as missing data.
- Treat visual grouping as a view setting; it does not create or change relationships.

## Check your result

Open the connected asset and confirm that its name, type, and source match the node you selected.

## If the graph is empty or surprising

- Confirm that you are viewing the intended asset and workspace.
- Wait for an active provider crawl or ingestion job to finish.
- Clear filters and reduce grouping.
- Compare the graph with the asset's source properties.
- Follow [Missing or unexpected relationships](../troubleshooting-and-support/missing-or-unexpected-relationships).

## Learn, show me, do it

- **Learn:** [Relationship Discovery Engine](relationship-discovery-engine)
- **Show me:** The Loom recording **Explore an asset relationship** will be embedded here after approval.
- **Do it:** Open an asset in `/assets/inventory` and select **Relationship Graph**.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20relationship%20graph%20question). Include your company, focused asset name and ID, connected asset name and ID, page URL, graph depth, active filters, timestamp and time zone, and a screenshot. Never send credentials or private keys.
