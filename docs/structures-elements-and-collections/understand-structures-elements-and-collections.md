---
title: Understand Structures, Elements, and Collections
excerpt: Choose the right record for hierarchy, operational units, and asset groupings.
deprecated: false
hidden: false
metadata:
  title: Understand Structures, Elements, and Collections | WanAware Documentation
  description: Learn how WanAware Structures, Elements, Collections, and Structure Tags work together.
  keywords:
    - Structure hierarchy
    - Element
    - Collection
    - Structure Tag
  robots: index
---

<!-- kb-meta
content-type: concept
audience: customer administrator, engineer
permission: STRUCTURES, ELEMENTS
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: organization-model-overview
video-status: planned
release-status: draft
-->

# Understand Structures, Elements, and Collections

WanAware uses three related records for organization:

- A **Structure** is a hierarchy. Supported types include Company, Organization, Group, and Vendor, with placement rules that keep the hierarchy valid.
- An **Element** is an operational unit. The supported Element types are Application, Service, and Site.
- A **Collection** is a named group of existing assets inside an Element.

**Structure Tags** attach an Element or Collection to a node in the Structure hierarchy. The tag is the connection; matching names alone do not create it.

## Choose by the question you need to answer

| Question | Use |
| --- | --- |
| Where does this belong in our hierarchy? | Structure and Structure Tag |
| Which Application, Service, or Site is this? | Element |
| Which assets belong together for this purpose? | Collection |
| Which assets are at a Site? | Site Element and Site Assets |

Start with the smallest model that answers a real question. Avoid creating separate records with nearly identical names to represent the same concept.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20organization%20model%20question) with your company, affected user, record names or IDs, page URL, timestamp and time zone, and the hierarchy you are trying to represent. Never send passwords, credentials, tokens, or secret values.
