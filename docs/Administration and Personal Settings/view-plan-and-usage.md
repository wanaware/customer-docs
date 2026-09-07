---
title: View your plan and usage
excerpt: Confirm the current subscription and displayed Asset usage without changing the account.
deprecated: false
hidden: false
metadata:
  title: View your plan and usage | WanAware Documentation
  description: Review a WanAware subscription, plan status, limits, and Asset usage.
  keywords:
    - current plan
    - asset usage
    - subscription
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, billing administrator
permission: read billing, read billing_history, read my_subscriptions, read payment_methods
product-area: Billing
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: billing-plan-usage
video-status: not-planned
release-status: draft
-->

**Outcome:** Identify the current plan and the Asset usage shown for the company without changing the subscription.

**For:** Customer administrators and billing administrators
**Permission:** Billing navigation requires `read billing`, `read billing_history`, `read my_subscriptions`, and `read payment_methods`
**Time:** 2–3 minutes
**Changes made:** None

## If you're stuck

- If Billing is missing, verify all four permissions above; one read permission is not enough.
- Confirm you are viewing the intended company before comparing usage.
- Refresh once if the page shows no plan or usage, then record the timestamp if it remains blank.

## Before you start

Use the plan, quota, and renewal values displayed in your own workspace. Documentation examples are intentionally price-agnostic.

## Field and option guide

| UI label | What it means | How to use it |
| --- | --- | --- |
| **Plans** | Available and current subscription options | Look for **Current Plan** before comparing another plan |
| **Current Plan** | The subscription assigned to the company | Treat this as the current workspace value |
| **Asset Usage** | Assets counted against the displayed quota | Compare the used value with the displayed limit |
| **View Plans** or **Change Plan** | Begins a subscription decision | Do not select merely to verify usage |

## Review the plan and usage

1. Open **Administration → Billing**.
2. Open **Plans**.
3. Find the plan marked **Current Plan**.
4. Read **Asset Usage** and the displayed quota or limit.
5. Record the plan name, usage value, page URL, and timestamp if you are investigating a mismatch.

**Expected result:** A single plan is identified as current and its usage is visible without a confirmation or checkout step.

## Verify

Refresh **Plans** and confirm the same plan and usage return. If usage differs from Inventory, record both counts and the time zone; background processing can make observations taken at different times hard to compare.

## Learn and continue

- **Learn:** [Understand billing](https://docs.wanaware.com/docs/understand-billing)
- **In WanAware:** Open `/administration/billing` in your WanAware workspace and select **Plans**.

## Next steps

- [Manage payment methods](https://docs.wanaware.com/docs/manage-payment-methods)
- [View billing history and invoices](https://docs.wanaware.com/docs/view-billing-history-and-invoices)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20plan%20or%20usage%20question) with your company, affected user, current plan name, masked usage values, page URL, timestamp and time zone, and expected versus actual result. Never send payment details, passwords, credentials, tokens, or unredacted invoices.
