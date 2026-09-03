---
title: Populate asset details
excerpt: Complete an asset's editable name, tags, schema fields, and catalog-backed selections.
deprecated: false
hidden: false
metadata:
  title: Populate asset details | WanAware Documentation
  description: Edit and save WanAware asset details, including schema and Service Catalog fields.
  keywords:
    - edit asset details
    - asset fields
    - unsaved changes
    - Service Catalog field
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: ASSETS_UPDATE
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: assets-populate-details
video-status: planned
release-status: draft
-->

# Populate asset details

**Outcome:** Complete an asset's editable information and verify that every intended change was saved.

**For:** Customer administrators and engineers responsible for asset data
**Permission:** Update Assets
**Time:** 5–15 minutes
**Changes made:** Updates a shared asset record

## Before you start

- Confirm the asset's identity and Asset Type.
- Gather approved values and their source.
- Know which fields may be refreshed by an integration.
- Do not place credentials, personal data, or secret values in names, tags, or free-text fields.

## Edit the name and tags

1. Open **Functions → Assets → Inventory** and select the asset.
2. Confirm its name, Asset Type, and source identifier.
3. Use the inline name edit control to correct the editable name.
4. Add or remove Data Tags for descriptive labels.
5. Add or remove **Structure Tags** only when the asset belongs in that hierarchy.

**Expected result:** WanAware shows an unsaved-change state or immediately confirms the supported tag action.

If a Structure Tag is unavailable, confirm that the Structure exists and your role can attach it.

## Complete schema-driven details

1. Open each editable detail tab shown for the Asset Type.
2. Complete required fields first.
3. Enter values in the format shown by the field.
4. For a Service Catalog-backed field, select an approved catalog value instead of typing a near-duplicate.
5. Review dependent choices after changing a manufacturer, model, component, or other parent value.
6. Check the unsaved-change bar before leaving the page.
7. Select the available save action.

**Expected result:** The unsaved-change bar clears and the saved values remain visible.

If the page rejects a field, correct the value before navigating away. If an expected catalog choice is missing, see [Service Catalog failures](../troubleshooting-and-support/service-catalog-failures).

## Check your result

1. Refresh the asset page.
2. Confirm the name, Data Tags, Structure Tags, and changed field values.
3. Open any dependent field and confirm its selected value is still compatible.
4. Ask a normal customer user to reopen the asset when the change supports a shared workflow.

## Undo this change

Restore the previous editable value and save again. Remove only the tag you added. If the source integration overwrites the field, correct the source or ask Support which value is authoritative before repeating the edit.

## Learn, show me, do it

- **Learn:** [Understand Asset Types and Service Catalogs](../asset-types-and-service-catalog/understand-asset-types-and-service-catalogs)
- **Show me:** The asset-and-relationship clip will include this workflow after publication.
- **Do it:** Open `/assets/inventory`, select an asset, and use its editable detail tabs.

## Next steps

- [Manage Data Tags and Structure Tags](manage-asset-and-structure-tags)
- [View asset relationships](view-asset-relationships)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20asset%20detail%20help) with your company, affected user, asset ID, Asset Type, field label, page URL, timestamp and time zone, reproduction steps, and expected versus actual value. Never send passwords, credentials, tokens, or secret values.
