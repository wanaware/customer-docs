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
permission: read structures and read elements
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

![Diagram showing Structure Tags attaching Elements and Collections while Collections group Assets.](https://files.readme.io/24a1f6eb59b16c7bd53f480d9b7c456531a2a5268b2381b83fe96294e4c735d4-organization-model.png)

WanAware uses three related records for organization:

- A **Structure** is a hierarchy. Supported types include Company, Organization, Group, and Vendor, with placement rules that keep the hierarchy valid.
- An **Element** is an operational unit. The supported Element types are Application, Service, and Site.
- A **Collection** is a named group of existing Assets inside an Element.

A **Structure Tag** connects an Element or Collection to one node in a Structure. Matching names alone do not create this connection.

## Choose by the question you need to answer

| Question | Use |
| --- | --- |
| Where does this belong in our hierarchy? | A Structure and its Structure Tag |
| Which Application, Service, or Site is this? | Element |
| Which Assets belong together for this purpose? | Collection |
| Which Assets are at a Site? | A Site Element and Site Assets |

Start with the smallest model that answers a real question. Avoid creating separate records with nearly identical names to represent the same concept.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20organization%20model%20question) with your company, affected user, record names or IDs, page URL, timestamp and time zone, and the hierarchy you are trying to represent. Never send passwords, credentials, tokens, or secret values.
