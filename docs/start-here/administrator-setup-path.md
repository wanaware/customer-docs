---
title: Administrator setup path
excerpt: Build a usable WanAware environment in the order that avoids rework.
deprecated: false
hidden: false
metadata:
  title: Administrator setup path | WanAware Documentation
  description: Set up integrations, Asset Types, Service Catalogs, Structures, Elements, Collections, and access.
  keywords:
    - administrator setup
    - build environment
    - setup order
  robots: index
---

<!-- kb-meta
content-type: tutorial
audience: customer administrator
permission: customer administrator
product-area: Platform
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: start-admin-path
video-status: not-planned
release-status: draft
-->

# Administrator setup path

**Outcome:** Prepare a workspace that another user can explore without needing you to explain the model.

**For:** Customer administrators and implementation leads
**Permission:** Customer administrator with access to each configured area
**Time:** 45–90 minutes for a small evaluation environment
**Changes made:** Creates shared configuration and may import or create assets

## Before you start

- Agree on a small, representative use case.
- Use a small set of clearly labeled test records approved by your workspace owner.
- Decide who owns the source system, asset model, organization model, and user access.
- Do not publish a custom Asset Type until its Service Catalog data is ready.

## Build in this order

1. [Add an integration](https://docs.wanaware.com/docs/add-an-integration) or [add a small asset set](https://docs.wanaware.com/docs/add-or-import-assets).
2. [Verify imported inventory](https://docs.wanaware.com/docs/verify-imported-inventory).
3. [Create a custom Asset Type](https://docs.wanaware.com/docs/create-a-custom-asset-type) and keep it as a draft.
4. [Configure its sections and fields](https://docs.wanaware.com/docs/configure-asset-type-sections-and-fields), including any catalog-backed fields.
5. [Create its Service Catalog](https://docs.wanaware.com/docs/create-a-custom-service-catalog) and add the required entries and compatibility.
6. [Publish and verify the Asset Type](https://docs.wanaware.com/docs/publish-and-verify-an-asset-type).
7. [Create Structures](https://docs.wanaware.com/docs/create-and-manage-structures), Elements, and Collections; then attach them with Structure Tags.
8. [Invite users and assign roles](https://docs.wanaware.com/docs/invite-users-and-assign-roles).

**Expected result:** A member with `read assets` can find a representative Asset, understand its details, and see its organizational context.

## Check your result

Use a Role with `read assets` to complete [Your first 30 minutes](https://docs.wanaware.com/docs/your-first-30-minutes). Record missing Permissions, unclear names, empty fields, or dead ends before expanding the environment.

## Undo this change

Remove documentation-only records in reverse order: detach Structure Tags, remove test Collections and Elements, remove test assets, and only then remove their draft configuration. Never delete a published Asset Type or shared integration without reviewing its current use.

## Learn, show me, do it

- **Learn:** [Product map and terminology](https://docs.wanaware.com/docs/product-map-and-terminology)
- **Show me:** Use the five short clips linked from each core workflow after they are published.
- **Do it:** Open `/administration/integrations` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20administrator%20setup%20help) and include:

- Company, affected user, page URL, timestamp, and time zone
- Current setup step and relevant record IDs
- Expected versus actual behavior

Never send passwords, credentials, tokens, or secret values.
