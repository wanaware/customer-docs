---
title: Add or import assets
excerpt: Add one asset manually or use bulk upload when it is available for your account.
deprecated: false
hidden: false
metadata:
  title: Add or import assets | WanAware Documentation
  description: Add a WanAware asset manually and understand when bulk upload is available.
  keywords:
    - add asset
    - bulk upload assets
    - import assets
    - inventory
    - discovery
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: ASSETS_CREATE
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Add or import assets

**Outcome:** Create an asset and confirm that it appears in the intended workspace.

**For:** Customer administrators and engineers
**Permission:** Create Assets
**Time:** 5 minutes for one asset; bulk imports vary
**Changes made:** Creates inventory or discovery records

## Before you start

- Choose whether the asset belongs in **Inventory** or **Discovery**.
- Confirm the correct asset type and required fields.
- Use demo values in a shared evaluation workspace.
- For bulk upload, prepare a file that matches the current template and size limits shown by the uploader.

## Add one asset

1. Open **Functions → Assets → Inventory** or **Discovery**.
2. Select **Add Asset** if your role provides that action.
3. Choose the **Asset Type**.
4. Confirm the **Status** toggle: **Inventory** or **Discovery**.
5. Enter **Asset Name** and the required fields for the selected type.
6. Add Data Tags or Structure Tags only when they have a clear owner and purpose.
7. Select **Add Asset**.

**Expected result:** WanAware shows **Asset Added!** and identifies the workspace where it was added.

8. Select **View Asset** to confirm the new record, **Add Another** to continue, or **Done** to close the workflow.

## Import assets in bulk

Bulk upload may be hidden or disabled for some accounts and Portal releases.

1. Open the bulk-upload action only when it is visible for your account.
2. Download or use the template provided by the current uploader.
3. Keep column names unchanged and use one asset per row.
4. Upload the file and review validation results before submitting.
5. Correct rejected rows rather than repeatedly submitting the same file.
6. Submit the validated import.

**Expected result:** The uploader reports accepted and rejected records. Accepted records appear in the selected workspace after processing.

If bulk upload is not visible, add assets manually or ask your customer administrator whether the feature is enabled. If validation fails, use [Bulk-import validation failures](../troubleshooting-and-support/bulk-import-validation-failures).

## Check your result

1. Return to **Assets → Inventory** or **Discovery**.
2. Clear old filters.
3. Search for the new asset name.
4. Open the record and confirm its status, type, and required fields.

## Undo this change

Deleting an asset can affect Structures, Elements, Collections, monitors, and relationships. Do not delete it just to correct one field.

- Use the supported edit action for a field correction.
- Delete only after reviewing dependencies and confirming that the record is not shared.
- In a demo, ask the demo owner before deleting anything.

## Learn, show me, do it

- **Learn:** [Product map and terminology](../start-here/product-map-and-terminology)
- **Show me:** The Loom recording **Add or import assets and confirm they appeared** will be embedded here after approval.
- **Do it:** Open `/assets/inventory` or `/assets/discovery` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20adding%20or%20importing%20WanAware%20assets). Include your company, asset type, intended status, page URL, timestamp and time zone, and the exact validation error. Do not attach a file containing credentials or customer-sensitive data.
