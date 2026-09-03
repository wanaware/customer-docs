---
title: Add an integration
excerpt: Connect a supported data source, verify access, and bring its asset data into WanAware.
deprecated: false
hidden: false
metadata:
  title: Add an integration | WanAware Documentation
  description: Add a supported integration to WanAware, test the connection, and start the first data collection.
  keywords:
    - add integration
    - connect data source
    - test connection
    - inventory crawl
    - AWS integration
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: ADMINISTRATION, INTEGRATIONS
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Add an integration

**Outcome:** Connect and test a supported data source, then start its first data collection.

**For:** Customer administrators and data-source owners
**Permission:** Administration and Integrations
**Time:** About 10–20 minutes, plus any provider setup and processing time
**Changes made:** Saves a connection in WanAware; some providers may also require changes in the source account

## Before you start

You need:

- Permission to manage integrations in WanAware
- Access to the data source you want to connect
- Approval from the source account owner
- The account identifiers and authorization details requested by that provider

Use the least access required for the integration. Never paste passwords, secret keys, access tokens, private keys, or other credentials into a field unless the released setup flow explicitly identifies it as a secure credential field.

## Add the integration

1. In WanAware, open **Administration → Integrations**.
2. Find the data source or provider you want to connect.
3. Expand its integration card.
4. Select the available add or connect action. For **AWS Account Inventory**, select **Connect account**.
5. Enter a recognizable account or connection name.
6. Complete the provider-specific fields shown by WanAware.
7. Review any permissions or provider-side resources the setup will create.
8. Select **Save integration** when the setup is complete.

**Expected result:** The integration appears with a connected or ready status. The exact label depends on the provider.

## Provider-specific setup: AWS

The current AWS flow uses a role and external ID instead of AWS secret access keys.

1. Enter the 12-digit **AWS account ID**.
2. Select **Generate AWS setup**.
3. Open the generated CloudFormation setup.
4. In AWS, review and deploy the stack in the account you are connecting.
5. Return to WanAware and confirm that the **Role ARN** matches the role created by the stack.
6. Save the integration.

**Expected result:** WanAware shows the AWS account with a **Connected** status.

## Test and collect data

1. Select **Test connection** when that action is available.
2. Wait for the successful connection message before starting data collection.
3. Start the provider's first collection action. For AWS, select **Run inventory crawl**.
4. Wait for the request confirmation.

Collection runs asynchronously, so assets may not appear immediately.

## Check your result

After collection finishes:

1. Open **Functions → Assets → Inventory**.
2. Search for a known resource from the connected source.
3. Open the asset and confirm that its provider and account details are correct.

If the connection, collection, or inventory check fails, follow [Integration connection failures](../troubleshooting-and-support/integration-connection-failures).

## Undo this change

Deleting an integration stops future collection and removes the saved connection from WanAware. It may not remove resources created in the source account.

1. Open **Administration → Integrations**.
2. Open the integration's action menu and select the available delete action.
3. Review the impact before confirming.
4. Ask the source account owner whether any provider-side resources should also be removed.

For AWS, deleting the WanAware integration does not automatically delete its CloudFormation stack.

## Learn, show me, do it

- **Learn:** [Assets and relationships](index)
- **Show me:** The approved integration recording will be embedded here after the released connection flow is recorded.
- **Do it:** Open `/administration/integrations` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20integration%20help). Include your company, provider, integration or account identifier, page URL, failed stage, timestamp and time zone, and the exact error text. Never send passwords, credentials, access tokens, private keys, or secret values.
