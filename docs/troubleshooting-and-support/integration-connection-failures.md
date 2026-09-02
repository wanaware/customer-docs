---
title: Integration connection failures
excerpt: Diagnose AWS setup, role validation, connection tests, and inventory crawl failures.
deprecated: false
hidden: false
metadata:
  title: Integration connection failures | WanAware Documentation
  description: Fix WanAware AWS integration setup, test, role, and inventory crawl errors.
  keywords:
    - AWS integration failed
    - test connection failed
    - inventory crawl failed
    - role ARN
    - CloudFormation error
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator
permission: ADMINISTRATION, INTEGRATIONS
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Integration connection failures

Use these checks when WanAware cannot generate AWS setup, save the integration, verify AWS access, or submit an inventory crawl.

## Fast checks

1. Confirm the 12-digit AWS account ID.
2. Confirm that the CloudFormation stack finished successfully in the same AWS account.
3. Compare the saved role ARN with the role created by the stack.
4. Do not reuse an external ID from another company or account.
5. Select **Test connection** before running a crawl.
6. If the signed setup link expired, generate a new setup package instead of reusing the old URL.

## Common causes and fixes

| Message or symptom | Likely cause | What to do |
| --- | --- | --- |
| **Unable to generate the AWS setup package** | Invalid account details or temporary setup service failure | Recheck the account name and 12-digit ID, then retry once. |
| CloudFormation deployment fails | The AWS user lacks stack permissions or a conflicting role exists | Review the AWS event message with the AWS owner and resolve the named resource conflict. |
| **Unable to save AWS integration** | Missing external ID, invalid role ARN, or stale setup | Return to the setup stage and compare every value with the deployed stack. |
| **Unable to verify AWS access** | Trust policy, role ARN, external ID, or role permissions do not match | Correct the AWS trust configuration and test again. |
| **Unable to submit crawl request** | Connection is not verified or the crawl service is unavailable | Test the connection, wait briefly, and submit once more. |
| Crawl submits but no assets appear | Crawl or downstream processing is still running | Allow processing time, refresh Inventory, and search both Inventory and Discovery. |

## Verify the fix

The integration should show **Connected**, **Test connection** should report **AWS connection verified**, and a known AWS resource should appear after the crawl completes.

## Known limitations

WanAware cannot repair an AWS permission boundary or organization policy that blocks the CloudFormation stack. Work with the AWS account owner when AWS reports that restriction.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20AWS%20integration%20failure) with your company, AWS account ID, role ARN with no credentials, failed stage, CloudFormation stack status, page URL, timestamp and time zone, and exact error text. Never send access keys, secret keys, session tokens, private keys, or secret values.
