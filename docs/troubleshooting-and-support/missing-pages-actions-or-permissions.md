---
title: Missing pages, actions, or permissions
excerpt: Determine whether a missing feature is caused by role access, company context, subscription, or product availability.
deprecated: false
hidden: false
metadata:
  title: Missing pages, actions, or permissions | WanAware Documentation
  description: Troubleshoot missing WanAware navigation, buttons, actions, and permission errors.
  keywords:
    - missing page
    - missing button
    - permission denied
    - 403
    - role access
    - feature not visible
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer
permission: none
product-area: IAM
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Missing pages, actions, or permissions

WanAware hides navigation and actions that are not available to the current role. A missing button is often an access or subscription question, not a loading failure.

## Fast checks

1. Confirm the company workspace shown in WanAware.
2. Refresh once after a role or subscription change.
3. Ask a customer administrator to compare your active roles with a user who can complete the task.
4. Confirm that the feature is included in the company's active subscription.
5. Check whether the instructions apply to the released Portal version.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| A navigation item is missing | The role lacks the feature permission | Ask an administrator to review the role in **Administration → IAM → Roles**. |
| The page opens but Add, Edit, or Delete is missing | View access exists without write access | Request the smallest create, update, or delete permission needed. |
| A `403` page appears | The URL is valid, but the user is not authorized | Return to an available page and ask an administrator to review the role. |
| **Observability Subscription Required** appears | The company lacks an active Observability plan | A billing administrator must add or restore the subscription. |
| Pulse content says access is required | The role or subscription does not include Pulse | Ask an administrator to confirm Pulse access. |
| The same role behaves differently in another company | Role assignments and subscriptions differ by organization | Verify the selected workspace and company-specific assignment. |

## Verify the fix

Sign out and back in only if the administrator confirms that access changed. Open the exact page and confirm that the required action is available without exposing unrelated administration features.

## Known limitations

Support should not grant broad access without authorization from the customer's administrator. Screenshots of another user's role do not replace an approved access request.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20permission%20help) with your company, affected email address, role names, missing page or action, page URL, timestamp and time zone, and a screenshot. Do not include session tokens or invitation links.
