---
title: Manage pending invitations
excerpt: Check an invitation's status, resend it safely, and recover when a new member cannot join.
deprecated: false
hidden: false
metadata:
  title: Manage pending invitations | WanAware Documentation
  description: Review and resend a pending WanAware member invitation without creating a duplicate user.
  keywords:
    - pending invitation
    - resend invitation
    - invite expired
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: read users and update users
product-area: Administration and access
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: administration-invitations
video-status: not-planned
release-status: draft
-->

# Manage pending invitations

**Outcome:** Confirm whether a member accepted an invitation and resend the existing invitation when it remains Pending.

**For:** Customer administrators
**Permission:** `read users` and `update users`
**Time:** About 3 minutes, plus the member's response time
**Changes made:** Sends a new invitation email for the existing member record

## If you're stuck

- Search the Users list by the exact email address before creating another invitation.
- Ask the member to ignore older emails and use only the newest invitation.
- If the status is **Accepted**, troubleshoot sign-in instead of resending.

## Before you start

Confirm the member's business email, intended company, and assigned Role. Invitation links are private; never ask a member to forward one.

## Field and option guide

| UI label | Purpose | Expected value | Next effect |
| --- | --- | --- | --- |
| **Invite Status** | Shows whether the invitation is still waiting | **Pending** or **Accepted** | Determines whether resend or sign-in troubleshooting is appropriate |
| **Resend invitation** | Opens confirmation for another email | Use only for a Pending member | Creates a newer invitation email |
| **Resend** | Confirms the resend | One deliberate selection | Older invitation links should no longer be used |

## Resend a pending invitation

1. Open **Administration → IAM**.
2. Find the member by exact email and open the user details page.
3. Confirm **Invite Status** is **Pending**.
4. Select **Resend invitation**.
5. In the confirmation, select **Resend** once.

**Expected result:** WanAware reports **Invitation resent successfully** and sends a newer invitation to the same email address.

If the action fails, do not create a second user. Record the exact error and timestamp, then retry once after refreshing the user details page.

## Verify the invitation

Ask the member to open the newest email and complete the invitation. Refresh the user details page and confirm **Invite Status** changes from **Pending** to **Accepted**.

## Undo this change

A sent email cannot be recalled. If the address or Role is wrong, do not forward the invitation; contact Support with the member email and timestamp so the access path can be reviewed safely.

## Learn, show me, do it

- **Learn:** [Understand Roles and Permissions](understand-roles-and-permissions)
- **Show me:** Use the written steps until an IAM recording is approved.
- **Do it:** Open `/administration/iam` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Pending%20WanAware%20invitation) with your company, affected email, Invite Status, Role name, page URL, timestamp and time zone, reproduction steps, and exact error. Never send the invitation link, passwords, MFA codes, credentials, or access tokens.
