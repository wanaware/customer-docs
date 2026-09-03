---
title: Add an integration
excerpt: Connect a supported data source, verify access, and begin importing inventory.
deprecated: false
hidden: false
metadata:
  title: Add an integration | WanAware Documentation
  description: Add a supported integration to WanAware, test it, and begin the first data collection.
  keywords:
    - add integration
    - connect data source
    - test connection
    - import inventory
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: read integrations and create integrations
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: integrations-add
video-status: planned
release-status: draft
-->

# Add an integration

**Outcome:** Connect and test a supported data source, then begin its first inventory collection.

**For:** Customer administrators and source-system owners
**Permission:** `read integrations` and `create integrations`
**Time:** About 10–20 minutes, plus provider setup and processing time
**Changes made:** Saves a connection in WanAware; the selected provider may require source-side changes

## If you're stuck

- Confirm **Administration → Integrations** is visible through `read integrations`.
- If the provider is visible but its connect control is missing, confirm `create integrations`.
- Open the matching provider adapter before entering any identifier or authorization value. Provider fields are intentionally not generalized here.

## Before you start

- Get approval from the source-system owner.
- Open the matching [provider adapter](providers) and confirm its requirements.
- Gather the non-secret account identifiers requested by the released form.
- Use the least access supported by the provider.
- Confirm which WanAware company workspace should receive the inventory.

Only enter an authorization value in a field that the released setup explicitly identifies for that purpose. Never send that value to Support or include it in a screenshot.

## Field and option guide

| UI item | Purpose | What to verify | Source of the value |
| --- | --- | --- | --- |
| Provider card | Selects the kind of data source | Provider name and supported inventory scope | Your approved source system |
| Connection name | Distinguishes saved connections | Unique, recognizable name with no credential data | Your internal naming standard |
| Provider identifier fields | Identifies the source account or tenant | Exact format in the provider adapter | Source-system administration page |
| Authorization fields | Grants the documented access | Least-privilege value requested by that exact field | Approved source-system setup |
| **Test connection** | Checks saved access without proving inventory import | Successful connection result | WanAware after save |

## Add the integration

1. Open **Administration → Integrations**.
2. Find the provider you want to connect.
3. Expand its card.
4. Use the provider's connect action named in its adapter guide.
5. Enter a clear, unique connection name.
6. Complete the fields described by the provider adapter.
7. Review any permissions and source-side resources that the setup will create.
8. Select the adapter's documented save or connect button once.

**Expected result:** The connection appears on the provider card with the account context entered during setup.

If a required field is unclear, stop and check the provider adapter. Do not guess an identifier or paste a secret into a general text field.

## Test and collect

1. If the provider card includes **Test connection**, select it once.
2. Wait for a successful test before starting collection.
3. Select the collection action named in the provider adapter. The page-level **Refresh** button reloads the displayed integration list; it does not start inventory collection.
4. Wait for the request confirmation.

**Expected result:** WanAware accepts the collection request. Inventory collection can continue after you leave the page.

If the test or request fails, use [Integration connection failures](../troubleshooting-and-support/integration-connection-failures).

## Check your result

1. Wait for the collection to finish.
2. Open **Functions → Assets → Inventory**.
3. Clear filters and search for a known source record.
4. Open it and confirm its name, Asset Type, provider, and source account context.

The integration is verified only when a known record appears with the expected source context.

## Undo this change

Do not remove a connection by guessing at a control. Removal behavior, imported-Asset impact, and source-side cleanup are provider-specific. Follow the adapter's verified removal procedure or contact Support before changing the connection.

## Learn, show me, do it

- **Learn:** [About integrations](about-integrations)
- **Show me:** The captioned integration clip will be embedded after its recording passes review.
- **Do it:** Open `/administration/integrations` in your WanAware workspace.

## Next steps

- [Refresh integration data](refresh-integration-data)
- [Verify imported inventory](verify-imported-inventory)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20integration%20help) with your company, affected user, provider, integration name or ID, failed stage, page URL, timestamp and time zone, reproduction steps, and exact error text. Never send passwords, credentials, tokens, private keys, or secret values.
