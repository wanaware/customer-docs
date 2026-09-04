---
title: About integrations
excerpt: Understand what an integration changes and how provider adapters fit the core workflow.
deprecated: false
hidden: false
metadata:
  title: About integrations | WanAware Documentation
  description: Learn how WanAware integrations bring supported source data into asset inventory.
  keywords:
    - integration concept
    - data source
    - provider adapter
  robots: index
---

<!-- kb-meta
content-type: concept
audience: customer administrator
permission: read integrations
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: integrations-overview
video-status: not-planned
release-status: draft
-->

An integration is a managed connection between WanAware and a supported data source. It is responsible for authentication or authorization, collection, and the source context attached to imported assets.

The core process is the same for each provider:

1. Choose a provider.
2. Complete its authorization requirements.
3. Test the connection when that action is available.
4. Start or wait for data collection.
5. Verify a known item in **Assets → Inventory**.

Provider adapters explain fields, source-side resources, permissions, and cleanup that apply to one provider. A provider adapter never changes the core verification rule: a connection is not complete until you can find and identify imported inventory.

## Before connecting production data

- Get approval from the source-system owner.
- Use the least access the released adapter supports.
- Confirm the company workspace that receives the data.
- Understand which source-side resources remain if the WanAware integration is removed.
- Never send authorization values to Support.

## Related tasks

- [Add an integration](https://docs.wanaware.com/docs/add-an-integration)
- [Refresh integration data](https://docs.wanaware.com/docs/refresh-integration-data)
- [Verify imported Inventory](https://docs.wanaware.com/docs/verify-imported-inventory)
- [Fix an Integration that does not connect or collect](https://docs.wanaware.com/docs/integration-connection-failures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20integration%20question) with your company, provider, integration name or ID, page URL, timestamp and time zone, and the outcome you need. Never send passwords, credentials, tokens, private keys, or secret values.
