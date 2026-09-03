---
title: Understand Asset Types and Service Catalogs
excerpt: Learn how schemas and managed catalog data work together before you create either one.
deprecated: false
hidden: false
metadata:
  title: Understand Asset Types and Service Catalogs | WanAware Documentation
  description: Learn the model, draft lifecycle, and required setup order for custom Asset Types and Service Catalogs.
  keywords:
    - Asset Type lifecycle
    - Service Catalog model
    - draft Asset Type
  robots: index
---

<!-- kb-meta
content-type: concept
audience: customer administrator, data model owner
permission: read asset_types_builder and read service_catalog
product-area: Asset Types and Service Catalog
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: asset-model-overview
video-status: planned
release-status: draft
-->

# Understand Asset Types and Service Catalogs

![Lifecycle from a draft Asset Type through catalog setup, publication, and Asset verification.](https://files.readme.io/cb7703d05cdaf6c3791c24285a2062234f2e0a0d257c241822a1b6dcd0d6b67e-asset-type-catalog-lifecycle.png)

An **Asset Type** defines the structure of an asset record: its sections, fields, dependencies, and whether a field uses managed catalog data. A **Service Catalog** provides those managed choices and their relationships.

## Use this order

1. Create a custom Asset Type and keep it as a draft.
2. Configure its sections, fields, dependencies, and catalog support.
3. Select the draft Asset Type in Service Catalog.
4. Add the needed catalog entries, models, modules, software, specifications, attributes, and compatibility.
5. Save and verify the catalog.
6. Publish the Asset Type.
7. Create or edit an asset and verify its catalog-backed selections.

Publishing can make a custom schema read-only. Treat publication as a release decision, not a routine save.

## What belongs in each place

| Need | Configure it in |
| --- | --- |
| A new kind of asset | Asset Types |
| A section or field on that asset | Asset Types |
| A field dependency | Asset Types |
| An approved manufacturer or provider choice | Service Catalog |
| Models, modules, or software | Service Catalog |
| Specifications and attributes tied to catalog entries | Service Catalog |
| Which catalog items work together | Service Catalog compatibility |

## Plan a small first version

Start with the fields needed for one real workflow. Use familiar names and assign an owner.

Before publication, test the draft with non-customer sample data.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Asset%20model%20question) and include:

- Company, affected user, page URL, timestamp, and time zone
- Draft Asset Type name or ID
- The model you are trying to represent

Never send passwords, credentials, tokens, or secret values.
