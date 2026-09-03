---
title: Product map and terminology
excerpt: Learn where WanAware features live and how its core records fit together.
deprecated: false
hidden: false
metadata:
  title: Product map and terminology | WanAware Documentation
  description: Understand Launchpad, Integrations, Assets, Structures, Elements, Collections, Observability, Workers, Pulse, and IAM.
  keywords:
    - product map
    - glossary
    - terminology
    - navigation
    - integrations
  robots: index
---

<!-- kb-meta
content-type: concept
audience: customer
permission: none
product-area: Platform
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Product map and terminology

The left navigation shows only the areas included in your subscription and role.

## Main product areas

| Area | What you use it for |
| --- | --- |
| **Launchpad** | Review high-level workspace summaries and move into a detailed workflow. |
| **Functions → Structures** | Model organizational or logical groupings and attach operational records to them. |
| **Functions → Assets** | Review **Discovery** and **Inventory**, inspect asset details, and explore relationships. |
| **Functions → Observability** | Review monitoring coverage and results for assets, sites, Elements, and Collections. |
| **Functions → Elements** | Manage operational groupings, including sites and their Collections. |
| **Functions → Workers** | Review or manage the Worker capacity used to run monitoring tasks. |
| **Pulse** | Review diagnostic executions, evidence, root-cause context, and recommended actions when Pulse access is enabled. |
| **Administration → General** | Review company details and permitted workspace settings. |
| **Administration → IAM** | Invite members and manage roles and permissions. |
| **Administration → Integrations** | Add and manage supported data sources, test their connections, and start available collection jobs. |

## Core terms

**Integration**
A managed connection between WanAware and a supported data source. Each provider can have its own setup and collection steps without changing the core integration workflow.

**Asset**
A resource tracked by WanAware. An asset has a type, status, properties, and relationships. Examples depend on the connected provider and your custom asset types.

**Discovery**
The workspace for assets that have been found or are being reviewed before they become part of the maintained inventory.

**Inventory**
The maintained set of assets used for organization, relationships, and downstream workflows.

**Relationship**
A connection between two resources. Relationships may represent containment, dependency, network adjacency, ownership, or another modeled association.

**Structure**
A hierarchy or logical model used to organize the environment. Structure tags can be applied to Elements and other supported records.

**Element**
An operational grouping in WanAware. A Site is an Element type with location-oriented behavior.

**Collection**
A group inside an Element. Collections can contain associated assets and act as a monitoring scope where supported.

**Monitor**
A configured availability, performance, or cybersecurity check for a supported target.

**Worker**
The execution capacity that runs monitoring work. A monitor may require a suitable Worker assignment before it can produce results.

**Observability**
The area for configuring monitors and reviewing monitoring state and results across supported target types.

**Pulse**
The diagnostic experience that connects monitor evidence, affected resources, possible causes, and recommended actions. Pulse visibility is permission-specific.

**Role**
A named set of permissions assigned to one or more members. Roles control which pages and actions are available.

## Learn, show me, do it

- **Learn:** Use this page to understand the model.
- **Show me:** Follow the short Loom clips embedded in the relevant workflow articles.
- **Do it:** Start with [Your first 30 minutes](your-first-30-minutes).

## Get help

If the terminology in your workspace does not match this page, include a screenshot and the page URL in an email to [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20terminology%20question). Do not include customer-sensitive values or credentials.
