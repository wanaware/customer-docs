---
title: Create and edit Roles
excerpt: Build a customer Role from exact Permissions and verify that it grants only the intended access.
deprecated: false
hidden: false
metadata:
  title: Create and edit Roles | WanAware Documentation
  description: Create or edit a WanAware Role, select Permissions, and verify the resulting access.
  keywords:
    - create role
    - edit role
    - role permissions
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: read roles and create roles; update roles for edits
product-area: Administration and access
content-owner: Product
review-owner: Support
last-verified: 2026-09-04
last-verified-release: pending
screenshot-set: administration-roles
video-status: not-planned
release-status: draft
-->

**Outcome:** Create or update a customer Role with the smallest set of Permissions needed for a job.

**For:** Customer administrators
**Permission:** `read roles` and `create roles`; use `update roles` to edit an existing customer Role
**Time:** 5–10 minutes
**Changes made:** Creates or changes access that can be assigned to company members

## If you're stuck

- Confirm you are in **Administration → IAM → Roles**, not the Users list.
- If **Create Role** is missing, confirm `create roles`.
- If an existing Role cannot be edited, check whether it is a system Role. System Role Permissions are managed by WanAware.

## Before you start

- Write down the pages and actions the person must use; do not copy an administrator Role by default.
- Keep another active administrator with IAM access before reducing your own permissions.
- Review the [navigation permission map](https://docs.wanaware.com/docs/product-map-and-terminology#navigation-and-permission-map) for Permissions whose names differ from their UI labels.

## Field and option guide

| UI label | Purpose | What to enter or select | Where it appears later |
| --- | --- | --- | --- |
| **Name** | Identifies the access profile | A unique, job-based name such as `Asset reviewer` | Role list and member assignment |
| **Permissions** | Controls visible areas and allowed actions | Only the `action resource` pairs the job requires | The member's navigation and available controls |
| **Create Role** | Saves a new customer Role | Select after reviewing the name and Permissions | Role list |

## Create a Role

1. Open **Administration → IAM → Roles**.

![IAM Roles list showing system and customer Roles, member counts, Permissions, and the Create Role action.](https://files.readme.io/3431077d146ae19f5296ef7967e8f70f01c4b0ea784da2adb5f81cc739f95869-iam-roles-list.png)
2. Select **Create Role**.
3. Enter **Name** using a job or responsibility, not a person's name.
4. In **Permissions**, expand each product area and select the required actions.

![Create Role page showing the Name field and grouped action-resource Permission selections.](https://files.readme.io/0534e10ef59e6fdbdafd9fc2c149bf61b655dc11eaa9d3bf2132d6bc2ddaaa0a-iam-role-editor.png)
5. Recheck navigation dependencies. For example, Billing requires all four read permissions listed in [Understand billing](https://docs.wanaware.com/docs/understand-billing).
6. Select **Create Role**.

**Expected result:** The Role opens or appears in the Roles list with the selected Permissions.

![Saved customer Role showing one selected read Assets Permission on the Permissions tab.](https://files.readme.io/1b40d0ecb3506785ef2487af33918fc84bf3819e3e83e24de677b90e04ac6cd8-image.png)

If saving fails, keep the page open, copy the **Name** and selected Permission list, and check for a duplicate name or a Permission that your own account cannot assign.

## Edit a customer Role

1. Open the Role from **Administration → IAM → Roles**.
2. Open **Permissions**.
3. Add or remove only the required Permission entries.
4. Save the Role.

**Expected result:** Reopening the Role shows the revised Permission list.

Changing a Role can alter access for every member assigned to it. Verify at least one affected member before making additional changes.

## Verify the Role

Assign the Role to a test member with the intended responsibilities. Have that member sign in again, open one required page, complete one permitted action, and confirm an unrelated administration action is absent.

## Undo this change

To reverse a Permission change, restore the previous Permission list and save again.

To remove a customer Role that is no longer needed:

1. Move every assigned member to an approved replacement Role.
2. Open the unused Role from **Administration → IAM → Roles**.
3. Select **Delete Role**.
4. Confirm that the dialog names the intended customer Role and states that deletion cannot be undone.

![Delete Role confirmation identifying the selected customer Role and warning that deletion cannot be undone.](https://files.readme.io/606771bd138d3b448d60a4885c49d19e58c77eead82c98aec7a9c38fdb95d5ce-iam-role-delete-confirmation.png)

5. Select **Delete**.

**Expected result:** WanAware reports **Role deleted**, returns to the Roles list, and the deleted Role no longer appears. If members still depend on the Role or its impact is unclear, select **Cancel** and review the **Users** tab first.

## Learn and continue

- **Learn:** [Understand Roles and Permissions](https://docs.wanaware.com/docs/understand-roles-and-permissions)
- **In WanAware:** Open `/administration/iam/roles` in your WanAware workspace.

## Next steps

- [Invite users and assign Roles](https://docs.wanaware.com/docs/invite-users-and-assign-roles)
- [Understand Roles and Permissions](https://docs.wanaware.com/docs/understand-roles-and-permissions)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20WanAware%20Roles) with your company, affected user, Role name, Permission names, page URL, timestamp and time zone, reproduction steps, and exact error. Never send passwords, invitation links, credentials, or access tokens.
