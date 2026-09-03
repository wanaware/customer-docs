# Screenshot publishing standard

WanAware screenshots use a focused product capture inside a consistent branded frame. The treatment borrows the useful part of Linear's documentation pattern: one legible UI state, generous padding, rounded corners, and a quiet gradient that separates the product from the article.

## What each screenshot must do

- Answer one question or show one consequential step. Split a long workflow into separate checkpoints instead of shrinking an entire page into one image.
- Keep the WanAware UI unchanged. Do not invent values, move controls, blur labels, or edit the visible product state.
- Crop browser chrome, the account switcher, unrelated navigation, empty space, internal URLs, identifiers, notifications, and customer or secret data.
- Use environment-neutral sample values. The capture workspace is provenance, not part of the customer instruction.
- Keep the matching written steps authoritative. A screenshot supplements the procedure; it never replaces it.

## Capture and frame a screenshot

1. Use a 1720 × 1024 browser viewport in Light mode unless the article specifically explains themes.
2. Put the released UI into the exact checkpoint the article describes. Do not save or submit a consequential change merely to obtain a screenshot.
3. Capture the browser content to a temporary PNG outside the repository.
4. Choose a tight crop containing the page title or step heading, the relevant fields or choices, and the action the reader needs next.
5. Run the framing command:

   ```bash
   npm run media:frame -- \
     --input /tmp/capture.png \
     --source-out media/screenshots/source/example.png \
     --output media/screenshots/example.png \
     --crop 230,70,1460,700
   ```

6. Inspect the source crop and framed PNG. The publishing image must be 750–1000 pixels wide, remain readable at normal article width, and be 250 KB or less.
7. Record the image in `media/screenshot-manifest.json`, obtain Product and Support approval, upload the publishing PNG through ReadMe's image API, and use the resulting `files.readme.io` URL in the article.

Only the safe crop and framed publishing copy belong in Git. Keep the raw full-browser capture temporary.

## Callouts

Prefer an article sentence immediately before the image. Add numbered callouts only when one image must distinguish two or three nearby controls. More than three callouts means the screenshot is trying to explain too much and should be split.
