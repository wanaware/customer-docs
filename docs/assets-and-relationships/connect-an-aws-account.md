---
title: Connect an AWS account
excerpt: Create the WanAware trust role, verify access, and request your first AWS inventory crawl.
deprecated: false
hidden: false
metadata:
  title: Connect an AWS account | WanAware Documentation
  description: Connect an AWS account to WanAware, test the role, and run an inventory crawl.
  keywords:
    - connect AWS
    - AWS integration
    - inventory crawl
    - CloudFormation
    - role ARN
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

# Connect an AWS account

**Outcome:** Save and test an AWS account connection, then request an inventory crawl.

**For:** Customer administrators and cloud administrators
**Permission:** Administration and Integrations
**Time:** About 15 minutes, plus AWS deployment and crawl time
**Changes made:** Creates an AWS CloudFormation stack and saves an AWS trust role in WanAware

## Before you start

You need:

- Permission to connect integrations in WanAware
- The 12-digit AWS account ID
- An AWS role that can create the supplied CloudFormation stack
- Approval from the AWS account owner

Do not paste AWS secret access keys into WanAware or send them to Support. The connection uses a role and external ID.

## Connect the account

1. In WanAware, open **Administration → Integrations**.
2. Expand **Amazon Web Services**.
3. Under **AWS Account Inventory**, select **Connect account**.
4. Enter a recognizable **Account name** and the 12-digit **AWS account ID**.
5. Select **Generate AWS setup**.

**Expected result:** WanAware generates an external ID, the expected role ARN, and a signed CloudFormation setup link.

6. Select **Open CloudFormation setup**.
7. In AWS, review the stack and finish its deployment. Do not change the external ID or role name unless your WanAware setup owner has approved the change.
8. Return to WanAware and confirm that the **Role ARN** matches the role created by the stack.
9. Select **Save integration**.

**Expected result:** The page shows **Connected AWS account** with a **Connected** status.

## Verify the connection

1. Select **Test connection**.
2. Wait for **AWS connection verified**.
3. Select **Run inventory crawl**.
4. Wait for the crawl request confirmation.

A submitted crawl is asynchronous. Assets will not necessarily appear immediately.

## Check your result

After the crawl completes:

1. Open **Functions → Assets → Inventory**.
2. Search for a known AWS resource from the connected account.
3. Open the asset and confirm that its provider and account details are correct.

If the test, crawl, or inventory check fails, follow [Integration connection failures](../troubleshooting-and-support/integration-connection-failures).

## Undo this change

Deleting the integration removes the saved account connection from WanAware. It does not automatically delete the CloudFormation stack from AWS.

1. Open **Administration → Integrations**.
2. Open the account action menu and select **Delete integration…**.
3. Confirm only after you have checked the operational impact.
4. Remove the corresponding AWS stack separately if your AWS owner confirms it is no longer needed.

## Learn, show me, do it

- **Learn:** [Assets and relationships](index)
- **Show me:** The approved Loom recording will be embedded here after the released connection flow is recorded.
- **Do it:** Open `/administration/integrations` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=AWS%20integration%20help). Include your company, AWS account ID, page URL, timestamp and time zone, the failed stage, and the exact error text. Never send AWS credentials, access tokens, private keys, or the contents of a secret.
