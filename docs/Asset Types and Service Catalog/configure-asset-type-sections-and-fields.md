---
title: Configure Asset Type sections and fields
excerpt: Build a draft schema with clear sections, validation, dependencies, and catalog support.
deprecated: false
hidden: false
metadata:
  title: Configure Asset Type sections and fields | WanAware Documentation
  description: Add sections, fields, dependencies, and Service Catalog support to a draft WanAware Asset Type.
  keywords:
    - Asset Type field builder
    - custom asset fields
    - field dependency
    - catalog-backed field
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, data model owner
permission: update asset_types_builder
product-area: Asset Types and Service Catalog
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: asset-types-fields
video-status: planned
release-status: draft
-->

**Outcome:** Build a draft Asset Type that collects the right information in a clear order.

**For:** Customer administrators and data model owners
**Permission:** `update asset_types_builder`
**Time:** 15–30 minutes
**Changes made:** Changes a shared draft schema

## If you're stuck

- Confirm the Asset Type is still a draft. Publishing can make the schema read-only.
- Build and save the parent field before configuring a dependent field.
- If catalog support is needed, enable it before loading Service Catalog data.
- Do not publish merely to preview an unfinished form.

## Before you start

- Confirm the Asset Type is still a draft.
- List the minimum fields needed for the first customer workflow.
- Decide which values should come from Service Catalog instead of free text.
- Identify any field dependencies before adding catalog data.

## Field and option guide

| Builder item | Purpose | How to configure it | What customers see later |
| --- | --- | --- | --- |
| **Name** | Identifies the Asset Type | Use a unique record-type name | Asset Type picker and Asset details |
| **Description** | Explains the intended records | State what belongs and what does not | Asset Type administration |
| Section | Groups related fields | Use a task-based label and place fields in completion order | A detail tab or section on the Asset |
| Field label | Names the customer input | Use the term customers already know | Asset form label |
| Field type | Controls the accepted input | Choose the type matching the real value; changing it later can invalidate data | Input control and validation |
| Required setting | Blocks incomplete records | Enable only for information that must always exist | Save validation |
| Dependency | Filters or reveals a field from another value | Select the saved parent field and the controlling value | Child choices after the parent is selected |
| Catalog support | Backs the field with managed catalog choices | Enable before adding the related catalog data | Catalog-backed selector on an Asset |
| Field order | Sets the completion sequence | Put identity and parent fields before dependent details | Asset detail layout |

## Configure the draft

1. Open **Administration → Asset Types** (`/administration/asset-types`).
2. Select the draft Asset Type.
3. Confirm its **Name** and **Description**.

![Draft Asset Type builder showing name, description, tabs, groups, Service Catalog support, and field actions.](https://files.readme.io/857bd9b513b60ae05f4707291230a74af4ecaf6dd9ed40411e407fefe46a61c9-asset-type-field-builder.png)
4. Add or rename sections so each one represents a clear group of details.
5. Add fields to the appropriate section.
6. Give each field a customer-facing label and choose its supported input type.

![Asset Type field editor showing an example field and the available field-type menu.](https://files.readme.io/220341b66ac895f95d2496f25486006a9424a7710d41a866b16f002308ec2f52-asset-type-field-types.png)
7. Configure required status, validation, default behavior, and help text where available.
8. Add dependencies only when one value legitimately controls another.

![Asset Type field editor showing required state and a conditional visibility rule builder.](https://files.readme.io/3a08182624538ae8e04689c8168ce56f3f0b5f0e2888e21952fb70b436f9bb83-asset-type-field-rule.png)
9. Enable catalog support for fields that should use managed Service Catalog choices.
10. Review the field order from the perspective of the person completing an asset.
11. Select **Save Draft** or **Save Changes**.

**Expected result:** The saved draft reopens with the intended sections, field order, dependencies, and catalog support.

![Custom Asset Type list showing the newly saved example schema with Draft status and its available actions.](https://files.readme.io/a946bbbb205a2a7a7c43a2187d9e0b6fea6b71362cff2fd1badbdc70d0205334-asset-type-draft-result.png)

If a dependent field has no valid parent or a required setting conflicts with the input type, correct the field before continuing. Do not publish to test an unfinished configuration.

## Check your result

Reopen the draft and verify every section and field. Then open **Administration → Service Catalog** and confirm the draft Asset Type can be selected.

## Undo this change

While the Asset Type is a draft, restore the previous setting or remove an unused field after confirming no test data depends on it. After publication, schema editing may be unavailable; contact Support before attempting a replacement strategy.

## Learn and continue

- **Learn:** [Understand Asset Types and Service Catalogs](https://docs.wanaware.com/docs/understand-asset-types-and-service-catalogs)
- **In WanAware:** Open **Administration → Asset Types** (`/administration/asset-types`) and select a draft Asset Type.

## Next steps

- [Create a custom Service Catalog](https://docs.wanaware.com/docs/create-a-custom-service-catalog)
- [Add catalog entries and compatibility](https://docs.wanaware.com/docs/add-catalog-entries-and-compatibility)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Asset%20Type%20field%20help) with your company, affected user, draft Asset Type ID, section and field labels, page URL, timestamp and time zone, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
