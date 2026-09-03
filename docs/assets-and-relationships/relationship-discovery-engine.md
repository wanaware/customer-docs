---
title: Relationship Discovery Engine
excerpt: Understand how supported data becomes useful asset relationships.
deprecated: false
hidden: false
metadata:
  title: Relationship Discovery Engine | WanAware Documentation
  description: Learn what WanAware's Relationship Discovery Engine produces and what it needs.
  keywords:
    - Relationship Discovery Engine
    - RDE
    - topology
    - asset graph
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
last-verified-release: pending
screenshot-set: assets-rde-concept
video-status: not-planned
release-status: draft
-->

# Relationship Discovery Engine

The Relationship Discovery Engine (RDE) builds supported connections after WanAware receives and normalizes asset data. Its results appear in relationship views across the asset experience.

## What RDE uses

RDE evaluates the identifiers and properties available for supported Asset Types, then applies approved relationship rules. Useful results depend on:

- Both resources existing in WanAware
- Current, complete identifying data
- Finished ingestion and relationship processing
- An applicable rule for the Asset Types involved

RDE does not infer a relationship from a similar name alone.

## How relationships are created

A relationship may be discovered from supported source data or created through a specific product flow, such as **Add Connection** for eligible network assets. WanAware does not provide a general-purpose action for drawing arbitrary relationships.

## What graph controls do

Search, filters, grouping, focus, and depth change what you can see. They do not edit the underlying assets or relationships.

## Next steps

- [View asset relationships](view-asset-relationships)
- [Add a supported network connection](add-a-network-connection)
- [Missing or unexpected relationships](../troubleshooting-and-support/missing-or-unexpected-relationships)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20relationship%20data%20question) with your company, affected user, both sanitized asset IDs, source context, page URL, timestamp and time zone, and a screenshot. Never send passwords, credentials, tokens, or secret values.
