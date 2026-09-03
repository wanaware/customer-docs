---
title: Bulk-import validation failures
excerpt: Correct file, schema, field, and duplicate errors before importing assets.
deprecated: false
hidden: false
metadata:
  title: Bulk-import validation failures | WanAware Documentation
  description: Fix WanAware asset bulk-upload file and row validation errors.
  keywords:
    - bulk upload error
    - asset import failed
    - CSV validation
    - rejected rows
    - schema error
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, engineer
permission: create assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-bulk-import
video-status: not-planned
release-status: draft
-->

# Bulk-import validation failures

Use the uploader's current template. Templates and required fields can change as asset types change.

## Fast checks

1. Confirm that bulk upload is enabled and visible for your account.
2. Download a new template from the current uploader.
3. Keep the original column names and file type.
4. Remove blank header rows, merged cells, formulas, and hidden formatting.
5. Use one asset per row and one value format per column.
6. Confirm required fields for the selected asset type.
7. Upload a small test file before a large import.

![Bulk Upload Inventory Assets page with file selection, template browsing, and the pre-upload safety message.](https://files.readme.io/01c4b1b1bc946dedd993a89a0f20fab4cb6277fa2b964cdbb814afa983b906d3-bulk-import-upload.png)

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| The uploader rejects the file before preview | Unsupported format, excessive size, or unreadable file | Save a fresh copy using the accepted format and current size limit. |
| Required field error | A required value or header is missing | Compare the rejected row with the current asset-type template. |
| Invalid value or type | Date, number, option, or identifier format is wrong | Use the example format and allowed option value exactly. |
| Unknown column | The file uses a renamed header or an older template | Move the data into a newly downloaded template. |
| Duplicate error | The source identifier already exists in the file or WanAware | Remove the duplicate or update the existing record through the supported workflow. |
| Some rows pass and some fail | Row-specific data is invalid | Correct only the rejected rows and avoid reimporting successful rows. |

## Verify the fix

Upload the corrected file and confirm that preview validation passes. After submission, find one accepted row in Inventory or Discovery and confirm its type and source values.

## Known limitations

Bulk upload may be hidden for a release or account. Do not try to reach an unpublished uploader through a copied URL.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20bulk%20import%20validation%20help) with your company, asset type, template version or download date, rejected row numbers, exact validation messages, page URL, and timestamp and time zone. Share a minimal sanitized sample only when Support requests it. Never include credentials, secrets, or unnecessary customer data.
