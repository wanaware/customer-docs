# Create an Asset Type and configure its custom Service Catalog

**Status:** Pending Harbor Meridian Systems capture, captions, Product review, and Support review
**Target length:** 3 minutes
**Embed in:** `/docs/create-a-custom-asset-type`, `/docs/create-a-custom-service-catalog`, and `/docs/publish-and-verify-an-asset-type`
**Audience:** Customer administrators and data model owners

## Recording guardrails

- Use a new `Docs Demo Device` Asset Type with no customer data.
- Confirm the draft and catalog can be removed after recording if publication is not demonstrated.
- Demonstrate publication only with Product approval because the schema can become read-only.

## Shot list and captions

| Time | On screen | Narration and captions |
| --- | --- | --- |
| 0:00–0:22 | Asset Types list | An Asset Type defines sections and fields. Its Service Catalog provides the managed values used by catalog-backed fields. Build both before publishing. |
| 0:22–0:48 | Create options | Select Create New Asset Type. You can Generate with AI, Utilize a Template, or Start from Scratch. For this small example, choose Start from Scratch. |
| 0:48–1:18 | Field builder | Name the type `Docs Demo Device`, add a clear section and field, and enable catalog support where the field should use managed choices. Save Draft. |
| 1:18–1:42 | Asset Type list | Return to the list and confirm Draft status. Publishing now would be too early. |
| 1:42–2:18 | Service Catalog | Open Service Catalog, select the draft type, and add the approved parent and child entries. Add specifications, attributes, or compatibility only when the model needs them. Save and refresh. |
| 2:18–2:38 | Compatibility | Reopen the entry and confirm its parent, details, and compatible selections. |
| 2:38–2:52 | Publish confirmation | Return to the draft, review every field and catalog choice, then read the Publish confirmation. Publishing can make the custom schema read-only. |
| 2:52–3:00 | Test asset | After approval, create a documentation asset and confirm the expected catalog-backed choices save correctly. |

## Transcript

An Asset Type defines sections and fields. Its Service Catalog provides the managed values used by catalog-backed fields. Build both before publishing.

Select Create New Asset Type. You can Generate with AI, Utilize a Template, or Start from Scratch. For this small example, choose Start from Scratch.

Name the type `Docs Demo Device`, add a clear section and field, and enable catalog support where the field should use managed choices. Save Draft.

Return to the list and confirm Draft status. Publishing now would be too early.

Open Service Catalog, select the draft type, and add the approved parent and child entries. Add specifications, attributes, or compatibility only when the model needs them. Save and refresh.

Reopen the entry and confirm its parent, details, and compatible selections.

Return to the draft, review every field and catalog choice, then read the Publish confirmation. Publishing can make the custom schema read-only.

After approval, create a documentation asset and confirm the expected catalog-backed choices save correctly.
