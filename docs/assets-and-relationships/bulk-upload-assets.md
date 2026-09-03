---
title: Bulk upload Assets
excerpt: Validate a current Asset template, resolve row issues, normalize accepted records, and verify the result.
deprecated: false
hidden: false
metadata:
  title: Bulk upload Assets | WanAware Documentation
  description: Use the Asset bulk uploader from template selection through validation, correction, normalization, and reporting.
  keywords:
    - bulk upload assets
    - asset upload failed
    - import assets
    - confirm and normalize
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: create assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-bulk-upload
video-status: planned
release-status: draft
-->

# Bulk upload Assets

**Outcome:** Create multiple Assets from a validated CSV or XLSX file, retain a result report, and find the new records.

**For:** Customer administrators and engineers
**Permission:** `create assets`
**Time:** 10–30 minutes, plus background processing
**Changes made:** Creates shared Asset records; successful rows can be created even when other rows fail

## If you're stuck

1. Start again from **+ Add Asset → Add Bulk Asset** and download a fresh template for the intended Asset Type.
2. Keep the template headers unchanged, with one Asset per row and no merged cells.
3. Resolve every item labeled **Missing** or **Unknown** before **Upload & Validate**.
4. After validation, inspect **Invalid**, **Failed**, and **Needs Review** before selecting **Confirm & Normalize**.
5. If submission is uncertain, search Inventory and Discovery before retrying; retrying immediately can create duplicates.

## Before you start

- Search for the intended Assets first, using a unique name or external identifier.
- Split files by Asset Type. The selected type controls the template and validation rules.
- Download the current template during this upload; a saved older copy can be stale after schema changes.
- Decide whether the new Assets should be reviewed in Discovery or maintained in Inventory.
- Preserve the completed source file and final report until record counts are reconciled.

![Asset bulk-upload flow from Asset Type selection through validation, normalization, and report review.](https://files.readme.io/123828476154320525ce7fe4339d9d5435fecc8ace0686d2290558040ced0ee7-asset-bulk-upload-flow.png)

The file is checked twice: first for recognizable columns, then row by row. **Confirm & Normalize** is the consequential step that creates accepted Assets.

## Field and option guide

| UI label or state | Purpose | Required state or accepted format | Where the value comes from | Example | Where it appears later |
| --- | --- | --- | --- | --- | --- |
| **Asset Type** | Selects the template and row schema. | Required; **All**, **Custom**, and **Global** are picker filters, not saved values. | Existing Asset Types. | Router | Type column and Asset details. |
| **Download template** | Gets the current columns for the selected type. | Use the copy downloaded for this run. | WanAware uploader. | `.xlsx` template | Uploaded file and validation. |
| **Status** column | Chooses Discovery or Inventory when included by the template. | Use only values allowed by the downloaded template. | Your review process. | Discovery | Assets workspace tab. |
| Asset name column | Supplies the searchable Asset identity. | One non-empty value per row; avoid duplicates. | Approved source data. | edge-router-01 | Asset tables and details. |
| **Recognized** | Column matched the selected template. | All intended columns should be recognized. | File check. | Asset Name | Row validation. |
| **Missing** | A required template column is absent. | Must be resolved before upload. | File check. | Required Asset Name column absent | Blocks validation. |
| **Unknown** | A header is not part of the selected template. | Rename or remove it; do not map by guesswork. | File check. | `Device title` | Blocks or excludes data. |
| **Valid** | Row can proceed. | No blocking issue. | Row validation. | — | Eligible for normalization. |
| **Needs Review** | Row has a suggested correction or a value needing confirmation. | Review and accept or correct it. | Row validation. | Normalized spelling suggestion | Must be resolved before final creation. |
| **Invalid** | Row violates a field or dependency rule. | Correct the named field. | Row validation. | Missing required model | Not created until valid. |
| **Failed** | Row could not be processed. | Record the error; correct and retry only that row. | Processing result. | Unreadable value | Report and retry file. |
| **Corrected** | A reviewed row now passes. | Recheck the changed values. | Your correction. | Fixed status | Eligible for normalization. |

## Prepare and check the file

1. Open **Functions → Assets → Inventory** or **Discovery**.
2. Select **+ Add Asset → Add Bulk Asset**.
3. In **Add Asset in Bulk**, choose the Asset Type. Use **Custom** or **Global** to narrow the picker when helpful.
4. Download the current template.
5. Add one Asset per row. Keep headers unchanged and preserve any provided choice or format guidance.
6. Save as CSV or XLSX and close the spreadsheet before uploading it.
7. Add or select the file in the uploader. If the Asset Type cannot be identified, use **Assign asset type** for that file.
8. Review the file check:
   - **Ready to upload** means required columns were recognized.
   - **Fix required** means at least one missing or unknown column blocks the next step.
   - **Preview skipped** means the uploader could not present a reliable preview; confirm the file and assignment before continuing.

**Expected result:** Each staged file has an Asset Type assignment and no unresolved missing or unknown required columns.

If the template is stale, replace it with a fresh download and copy values—not old headers—into the new file.

## Validate and correct rows

1. Select **Upload & Validate**.
2. Wait for validation to finish. Do not close the page while files are still uploading.
3. Compare the total row count with the source file.
4. Open **Needs Review** and inspect each suggestion before accepting it.
5. Open **Invalid** and correct the named field or dependency.
6. Open **Failed**, record each row and exact error, and decide whether those rows need a corrected retry file.
7. Recheck **Corrected** to ensure edits did not alter the wrong field.

**Expected result:** Every row intended for this run is **Valid** or **Corrected**, and the accepted count matches your expectation.

## Create and reconcile the Assets

1. Select **Confirm & Normalize** only after the counts make sense.
2. Leave the page open while the current job reports progress. Creation can continue as background processing.
3. On completion, select **Download Report** and retain it with the submitted source file.
4. If more files are needed, use **Start New Upload**. Otherwise select **Close**.

**Expected result:** The completion summary identifies successful and failed rows. A mixed result is partial success, not an instruction to resubmit the entire file.

If the browser closes or the outcome is uncertain, search for several unique names and compare them with the report before submitting any retry.

## Verify

1. Open Inventory and Discovery, starting with the status used by the file.
2. Clear old search text and filters.
3. Search for a unique first, middle, and last record from the file.
4. Open each sample and confirm Asset Type, name, status, required fields, and catalog-backed choices.
5. Reconcile source rows against successful, invalid, failed, and visible records.

## Recover or retry

- For a partial success, create a new file containing only rows that were not created.
- For an invalid row, correct the named field using a fresh template if the schema changed.
- For a failed row, preserve its error and row number for Support.
- To stop before **Confirm & Normalize**, close the uploader; no normalized Assets should be created. After confirmation, treat created records as real shared data and use [Delete Assets safely](https://docs.wanaware.com/docs/delete-assets-safely) only after checking dependencies.

## Learn, show me, do it

- **Learn:** [Add or import Assets](https://docs.wanaware.com/docs/add-or-import-assets)
- **Show me:** The add-or-import clip requires a successful release-equivalent test before publication.
- **Do it:** Open `/assets/inventory` and select **+ Add Asset → Add Bulk Asset**. Contextual help may also open from `/assets/inventory/bulk/upload` or `/assets/discovery/bulk/upload`.

## Next steps

- [Review Discovery and move Assets to Inventory](https://docs.wanaware.com/docs/review-discovery-and-move-assets-to-inventory)
- [Bulk-import validation failures](https://docs.wanaware.com/docs/bulk-import-validation-failures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Asset%20bulk-upload%20help) with your company, affected user, selected Asset Type, page URL, upload timestamp and time zone, source row number, result state, expected versus actual counts, and exact validation text. Attach a sanitized sample and report only when approved. Never send passwords, credentials, access tokens, or secret values.
