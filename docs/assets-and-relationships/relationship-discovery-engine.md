---
title: Relationship Discovery Engine
excerpt: Understand how WanAware turns normalized asset data into useful resource relationships.
deprecated: false
hidden: false
metadata:
  title: Relationship Discovery Engine | WanAware Documentation
  description: Learn what WanAware's Relationship Discovery Engine produces and how customers use its results.
  keywords:
    - Relationship Discovery Engine
    - RDE
    - topology
    - asset graph
    - relationships
  robots: index
---

<!-- kb-meta
content-type: concept
audience: customer
permission: ASSETS
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Relationship Discovery Engine

The Relationship Discovery Engine (RDE) builds connections between assets after WanAware has received and normalized their source data. Its output powers relationship views used for inventory context, organization, monitoring, and investigation.

## What RDE does

RDE evaluates the identifiers and properties available for supported asset types, then creates relationships that match the platform's approved relationship rules. A relationship may describe containment, dependency, adjacency, ownership, or another supported association.

RDE does not guess from a resource name alone. Useful relationships depend on complete, current source data and applicable rules for the asset types involved.

## When relationships appear

Relationship processing happens after asset ingestion. A newly connected account or large crawl can therefore show assets before every expected relationship is available.

The timing depends on:

- Whether the provider crawl or import finished
- Whether both sides of the relationship exist in WanAware
- Whether required identifying properties were supplied
- Whether the involved asset types have an applicable relationship rule

## How customers use the result

- Open an asset's **Relationship Graph** to inspect its immediate context.
- Use the aggregate Assets **Graph** view to explore a broader environment.
- Narrow the view by asset type, Site, Element, or Structure.
- Follow connected resources while investigating monitor or Pulse evidence.

## What RDE does not change

Exploring, filtering, grouping, or changing graph depth does not edit the underlying asset or create new source-system relationships.

## Next steps

- [View asset relationships](view-asset-relationships)
- [Missing or unexpected relationships](../troubleshooting-and-support/missing-or-unexpected-relationships)
- [Investigate with Observability and Pulse](../monitor-and-investigate/investigate-with-observability-and-pulse)

## Get help

If a relationship appears wrong, do not delete source assets as a first response. Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20relationship%20data%20question) with the two asset IDs, source account, page URL, timestamp and time zone, and a screenshot of the connection. Never send provider credentials or secrets.
