---
title: Publish and verify an Asset Type
excerpt: Review a completed draft, publish it deliberately, and test its catalog-backed fields on an asset.
deprecated: false
hidden: false
metadata:
  title: Publish and verify an Asset Type | WanAware Documentation
  description: Publish a completed custom WanAware Asset Type and verify its schema and Service Catalog choices.
  keywords:
    - publish Asset Type
    - Asset Type read-only
    - verify custom schema
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, data model owner
permission: ASSET_TYPES_BUILDER_UPDATE
product-area: Asset Types and Service Catalog
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: asset-types-publish
video-status: planned
release-status: draft
-->

# Publish and verify an Asset Type

**Outcome:** Publish an approved custom Asset Type and confirm that its fields and catalog choices work on an asset.

**For:** Customer administrators and data model owners
**Permission:** Update and publish Asset Types; create or update Assets for verification
**Time:** 10–20 minutes
**Changes made:** Publishes a shared schema; the schema can become read-only

## Before you start

- Complete Product review of the name, description, sections, fields, dependencies, and validation.
- Save and verify the Service Catalog and compatibility.
- Create a record of the approved draft configuration.
- Understand that publication can make the custom schema read-only.

## Publish the Asset Type

1. Open **Administration → Asset Types**.
2. Select the intended draft and confirm its ID and **Draft** status.
3. Review every section and field.
4. Confirm catalog-backed fields have usable values in **Service Catalog**.
5. Select **Publish**.
6. Read the confirmation, including the read-only consequence.
7. Confirm publication only when the configuration is approved.

**Expected result:** The Asset Type appears with **Published** status.

If publication fails, do not create a replacement. Use [Asset Type save or publish failures](../troubleshooting-and-support/asset-type-save-or-publish-failures).

## Verify with an asset

1. Open **Assets → Inventory** and create or edit a `Docs Demo` asset of the published type.
2. Confirm its expected sections and fields appear.
3. Select values in each catalog-backed field.
4. Confirm dependent choices are compatible.
5. Save the asset.
6. Refresh and confirm the values remain.

## Check your result

Ask a normal customer user with Assets access to open the test asset and confirm the fields and saved values are understandable and visible.

## Undo this change

Publication may not be reversible through the customer interface. Do not delete a published Asset Type or its test assets to simulate an undo. Contact Support with the Asset Type ID if the published schema is wrong.

## Learn, show me, do it

- **Learn:** [Understand Asset Types and Service Catalogs](understand-asset-types-and-service-catalogs)
- **Show me:** The captioned Asset Type and Service Catalog clip will include publication and asset verification after approval.
- **Do it:** Open `/administration/asset-types` in your WanAware workspace.

## Next steps

- [Populate asset details](../assets-and-relationships/populate-asset-details)
- [Service Catalog failures](../troubleshooting-and-support/service-catalog-failures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Asset%20Type%20publication%20help) with your company, affected user, Asset Type ID and status, page URL, timestamp and time zone, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
