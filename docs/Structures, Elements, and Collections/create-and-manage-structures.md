---
title: Create and manage Structures
excerpt: Add a valid Structure node and verify its location in the hierarchy.
deprecated: false
hidden: false
metadata:
  title: Create and manage Structures | WanAware Documentation
  description: Create, edit, and verify WanAware Structures safely.
  keywords:
    - create Structure
    - Structure hierarchy
    - Company
    - Organization
    - Group
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: create structures; update structures or delete structures for those actions
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: 2026-09-07
last-verified-release: pending
screenshot-set: structures-create
video-status: planned
release-status: draft
-->

**Outcome:** Create a Structure node of the correct type and place it in the intended hierarchy.

**For:** Customer administrators and environment model owners
**Permission:** `create structures`; `update structures` or `delete structures` for those actions
**Time:** 5–10 minutes
**Changes made:** Creates or changes a shared hierarchy node

## If you're stuck

- Search the complete hierarchy for the exact name before adding a node.
- Choose the parent in the hierarchy before opening **Add sub-structure**. The form does not contain a separate parent picker.
- After saving, expand the parent's sub-structures. A collapsed branch can hide a successfully created node.
- Do not delete a Structure to detach an Element or Collection; remove its Structure Tag instead.

## Before you start

- Search the hierarchy for the intended name and common variations.
- Choose the supported type that matches the concept: Company, Organization, Group, or Vendor.
- Identify the correct parent and owner.
- Use a clearly labeled test node when you are learning or validating this workflow.

## Field and option guide

| UI item | Purpose | What to choose or enter | Verification |
| --- | --- | --- | --- |
| **Structure Type** | Defines the node's role | **Company**, **Organization**, **Group**, or **Vendor**, matching the real hierarchy | Node displays the intended type |
| **Structure Name** | Identifies the node | Required; use a durable organizational name, such as Service Operations | The label on the saved node |
| **Add sub-structure** | Chooses the parent context | Open this action on the intended existing parent | New node appears under that parent |
| **Save** / **Update** | Stores the form | **Save** creates a node; **Update** changes an existing node | Refresh the hierarchy to verify persistence |

## Create a Structure

1. Open **Functions → Structures**.

![Structure hierarchy showing an example company and its top-level organizational nodes.](https://files.readme.io/1b5ecefc90dd8392bcc3478cdb33897388dd8600701ba35ab5c451068066f39e-structure-hierarchy.png)
2. Find the intended parent. Open its actions menu and select **Add sub-structure**.
3. In **Add Structure**, review **Structure Type**. An Organization parent offers a Group child in the verified flow.
4. Enter the required **Structure Name**.

![Add Structure dialog showing the Structure Type and required Structure Name fields.](https://files.readme.io/d4b714512e888faa25ab82f3e25aca497940fa05ac54b3ad04de8f2db553fd2f-structure-add.png)
5. Confirm that you opened the form from the correct parent. If not, select **Cancel** and reopen **Add sub-structure** on the intended parent.
6. Select **Save** once. An empty **Structure Name** keeps **Save** disabled.
7. Expand the parent's sub-structures, then select **Refresh from database** and confirm the new node remains under that parent.

**Expected result:** The new node appears once under the intended parent.

If the node is missing, expand the branch and refresh before submitting again. Check the exact name to avoid creating a duplicate after an uncertain save.

## Edit a Structure

1. Find the existing node and confirm its name and parent.
2. Open its actions menu and select **Edit structure**.

![Structure actions menu showing view, attachment, child Structure, and edit choices.](https://files.readme.io/5417aaec8dd89edc0762a780bff6557500e4aea23a9eef710929552ffe343aab-structure-actions.png)
3. In **Edit Structure**, review **Structure Type** and **Structure Name**. The dialog does not contain a parent picker; renaming a node does not move it.

![Edit Structure dialog showing Structure Type, Structure Name, Cancel, and Update for an example node.](https://files.readme.io/d02b99d04f3fa0695a7e2ade3fdfd685988147ca5ee6a562d0a707c7eeccf157-structure-edit.png)
4. Change **Structure Name** to the approved value.
5. Select **Update**, then **Refresh from database**. Reopen **Edit structure** and confirm the saved name.

If the update fails or the old name remains, record the visible error and check `update structures` before trying again. To discard an unsubmitted edit, select **Cancel**.

## Review before deletion

Deleting a node is not the same as removing a Structure Tag from an Element or Collection. Use the attachment guides below when the record only needs to be detached.

1. Open the intended node's actions menu and select **Delete structure…**.
2. Review the name, **Structure Type**, and **Sub-structures** count in **Delete Structure**.

![Delete Structure dialog showing an example node name, Structure Type, sub-structure count, and Cancel.](https://files.readme.io/749c93ecb82657c024e30f1f5ba7c1fddb0a4ae23991fa52fefeeaa5867ca7b6-structure-delete-confirmation.png)
3. Select **Cancel** if there are child nodes, attachments, or any uncertainty about the scope. Ask Support to confirm the impact before deleting a populated node.
4. For an approved empty test node, select **Delete** once. Refresh and search for the exact name to verify removal.

The confirmation shows a sub-structure count, but that count alone does not establish the impact on attached records. Do not assume deleting a parent moves or preserves its children. No restore procedure is verified here.

## Check your result

Search for the exact name, expand its parent, and confirm the type, location, and child records. Then check an attached Element or Collection if one already exists.

## Undo this change

Restore the previous editable value when possible. Before removing a Structure, detach its Elements and Collections and review its child nodes. Do not delete the attached assets themselves.

## Learn and continue

- **Learn:** [Understand Structures, Elements, and Collections](https://docs.wanaware.com/docs/understand-structures-elements-and-collections)
- **In WanAware:** Open `/structures` in your WanAware workspace.

## Next steps

- [Create and populate Elements](https://docs.wanaware.com/docs/create-and-populate-elements)
- [Attach Elements to Structures](https://docs.wanaware.com/docs/attach-elements-to-structures)
- [Attach Collections to Structures](https://docs.wanaware.com/docs/attach-collections-to-structures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Structure%20help) and include:

- Company, affected user, page URL, timestamp, and time zone
- Structure name and ID and the intended parent ID
- Reproduction steps and expected versus actual placement

Never send passwords, credentials, tokens, or secret values.
