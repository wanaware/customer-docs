---
title: Asset Type save or publish failures
excerpt: Resolve draft validation, dependency, permission, and publication problems.
deprecated: false
hidden: false
metadata:
  title: Asset Type save or publish failures | WanAware Documentation
  description: Fix errors when saving or publishing a custom WanAware Asset Type.
  keywords:
    - Asset Type save failed
    - publish Asset Type failed
    - field validation
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, data model owner
permission: update asset_types_builder
product-area: Asset Types and Service Catalog
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-asset-types
video-status: not-planned
release-status: draft
-->

# Asset Type save or publish failures

Use this page when **Save Draft**, **Save Changes**, or **Publish** is unavailable or returns an error.

## Fast checks

1. Confirm the Asset Type is the intended customer draft.
2. Check your create or update permission.
3. Complete the Name and every required section or field setting.
4. Resolve invalid field dependencies.
5. Save and verify the Service Catalog before publishing.
6. Refresh once and reopen the same Asset Type by ID.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Save action is unavailable | No unsaved change or insufficient permission | Make the intended edit or ask an administrator to review the Asset Types permission. |
| Draft save reports validation errors | A name, field, input type, or required setting is incomplete | Correct each labeled field and save again. |
| Dependency cannot be saved | Parent and dependent fields are incompatible or missing | Select valid fields and confirm their input settings. |
| Publish is unavailable | The record is not an editable draft or required setup is incomplete | Confirm status and finish the draft and catalog checks. |
| Publish returns an error | Validation, permission, or a temporary request failure | Preserve the draft, record the exact error, and retry once after correcting the named issue. |
| Published schema cannot be edited | Publication made the custom schema read-only | Do not create a replacement without an impact review; contact Support. |

## Verify the fix

Reopen the Asset Type from the list. A saved draft should retain all sections and fields. A successful publication should show **Published** status and expose the expected fields on a documentation-only asset.

## Known limitations

Publishing can make a custom schema read-only. Support may need Product approval before recommending a replacement or migration for an incorrect published schema.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Asset%20Type%20save%20or%20publish%20failure) with your company, affected user, Asset Type ID and status, failed action, page URL, timestamp and time zone, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
