---
title: I cannot sign in, reset my password, or complete MFA
excerpt: Recover access when sign-in, password reset, invitation, or multi-factor authentication does not work.
deprecated: false
hidden: false
metadata:
  title: I cannot sign in, reset my password, or complete MFA | WanAware Documentation
  description: Troubleshoot WanAware sign-in, password reset, invitations, Google sign-in, and MFA.
  keywords:
    - cannot sign in
    - forgot password
    - reset password
    - MFA problem
    - invitation expired
    - login failed
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer
permission: none
product-area: Authentication
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-authentication
video-status: not-planned
release-status: draft
-->

Use this page when sign-in fails, a reset email does not arrive, an invitation does not work, or MFA blocks access.

## Fast checks

1. Confirm that you are using the correct WanAware workspace URL.
2. Enter the business email address that received the invitation.
3. Use **Google sign-in** only when your company uses **Continue with Google** for the same email.
4. Open the newest invitation or password-reset email; older links may no longer be valid.
5. Check spam and quarantine folders.
6. Correct the device date and time before retrying MFA.
7. Try once in a supported private browser window to rule out stale cookies or extensions.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| “Invalid credentials” or password sign-in returns to the login page | Wrong email or password | Re-enter the invited email and use **Forgot password?** for password sign-in. |
| Reset email does not arrive | Wrong email, mail filtering, or no active account | Check the address and mail filters, then ask an administrator to confirm the member record. |
| Invitation link fails | You opened an older link, or the administrator changed the invitation | Ask the administrator to resend the invitation and use only the newest message. |
| WanAware rejects the MFA code | Device time is wrong, or you selected the wrong authenticator entry | Sync device time and verify that the authenticator entry is for WanAware. |
| Google sign-in uses the wrong account | Multiple Google sessions are active | Sign out of the unintended Google account or explicitly choose the correct account. |
| Sign-in works but the wrong company opens | The user belongs to more than one organization | Use the organization selector and choose the intended workspace. |

## Verify the fix

Sign in, confirm the company workspace, and open one page required for your role. If only the page is missing, use [Missing pages, actions, or permissions](https://docs.wanaware.com/docs/missing-pages-actions-or-permissions).

## Known limitations

Support cannot ask for or verify your password, MFA code, reset token, invitation token, or Google credentials. Never send them.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20sign-in%20help) with your company, affected email address, workspace URL, sign-in method, timestamp and time zone, and the exact error text. State whether a new invitation or reset email arrived. Never include passwords, MFA codes, invitation links, reset links, or tokens.
