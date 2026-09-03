# Screenshot publishing standard

WanAware screenshots use a full-width product capture inside a consistent branded frame. The treatment borrows the useful part of Linear's documentation pattern: one legible UI state, comfortable spacing, rounded corners, and a quiet navy surface with a restrained cyan highlight.

## What each screenshot must do

- Answer one question or show one consequential step. Preserve the complete application content width; split a long workflow into separate checkpoints instead of shrinking an entire page into one image.
- Keep the WanAware UI unchanged. Do not invent values, move controls, blur labels, or edit the visible product state.
- Crop browser chrome, the account switcher, unrelated navigation, empty space, internal URLs, identifiers, notifications, and customer or secret data.
- Use environment-neutral sample values. The capture workspace is provenance, not part of the customer instruction.
- Keep the matching written steps authoritative. A screenshot supplements the procedure; it never replaces it.

## Capture and frame a screenshot

1. Use a 1720 × 1024 browser viewport in Light mode unless the article specifically explains themes.
2. Put the released UI into the exact checkpoint the article describes. Do not save or submit a consequential change merely to obtain a screenshot.
3. Capture the browser content to a temporary PNG outside the repository.
4. Crop out only unrelated navigation and empty space below the last useful checkpoint. Keep the full application content width, page title or step heading, relevant fields or choices, and the action the reader needs next.
5. Run the framing command:

   ```bash
   npm run media:frame -- \
     --input /tmp/capture.png \
     --source-out media/screenshots/source/example.png \
     --output media/screenshots/example.png \
     --crop 63,0,1658,760
   ```

   The command defaults to an 1800-pixel publishing canvas. If a different width is needed, pass `--canvas-width` with a value from 1500 through 2200; the command rejects widths outside the same range enforced by `npm run check`.

6. For a standard capture, inspect the source crop and framed PNG. For a retina publishing copy, run the image-generator enhancement workflow below. The publishing image must be 1500–2200 pixels wide, remain readable at normal article width, and be 500 KB or less.
7. Record the image in `media/screenshot-manifest.json`, obtain Product and Support approval, upload the publishing PNG through ReadMe's image API, and use the resulting `files.readme.io` URL in the article.

Only the safe crop and framed publishing copy belong in Git. Keep the raw full-browser capture temporary.

## Image-generator enhancement

Use image generation to improve the decorative frame, color balance, and apparent clarity—not to redraw the product UI. Preserve the exact sanitized source crop as the authoritative layer:

```bash
npm run media:enhance -- \
  --input media/screenshots/source/example.png \
  --generated /tmp/generated-style-reference.png \
  --output media/screenshots/example.png
```

The command heavily obscures all generated UI pixels, then places the unchanged source crop over the result at its native resolution. This prevents a generated label, field, or state from becoming product documentation. Mark these files `wanaware-ai-assisted-v3` in the manifest and compare every visible label with the released UI before upload.

## Callouts

Prefer an article sentence immediately before the image. Add numbered callouts only when one image must distinguish two or three nearby controls. More than three callouts means the screenshot is trying to explain too much and should be split.
