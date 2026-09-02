# WanAware customer documentation

This repository contains the public customer documentation published at [docs.wanaware.com](https://docs.wanaware.com/).

Private engineering repositories remain separate. Do not copy internal architecture, credentials, customer data, private URLs, or operational runbooks into this repository.

## Publishing workflow

1. Create a branch from the ReadMe live branch, `v1.0`.
2. Update or add a page under `docs/`.
3. Verify every step against the released WanAware Portal.
4. Open a pull request and complete the Product and Support review checklist.
5. Merge only after Product confirms accuracy and Support confirms that the article is usable for customer self-service.

ReadMe synchronizes merged documentation from GitHub. Upcoming or unreleased product behavior stays on a branch until the feature is available to customers.

## Content rules

- Write for customer administrators, engineers, support staff, and finance users.
- Lead with the outcome the reader is trying to achieve.
- State the required permission, prerequisites, expected result, and recovery path.
- Use demo data in screenshots and recordings.
- Never publish passwords, tokens, credentials, customer identifiers, private endpoints, or internal architecture.
- Keep written steps authoritative. Remove or hide a video as soon as its UI no longer matches the released product.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for article templates and review requirements.
