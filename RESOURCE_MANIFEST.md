# Resource Manifest

## HTML & Layout
- `index.html` - The main entry point (cleaned from NAQSH previews).

## Styling & Fonts
- `src/styles.css` - The primary stylesheet.
- `src/fonts.css` - Local typography stylesheet importing local fonts.
- `assets/fonts/*.woff2` - 17 Google Font files localized for `Cinzel Decorative`, `Italiana`, `Manrope`, and `Tiro Devanagari Hindi`.

## Scripts
- `src/app.js` - Main application logic (patched with video audio overlap fix and `shortName` title fix).
- `src/config.js` - Configuration file containing customized content (names, parents, venue, short names, mp3 path).
- `src/components/render.js` - Dynamic DOM generation script (patched to display short names in the closing text).
- `src/lib/scratch.js` - The scratch card reveal module.
- `src/lib/petals.js` - The falling petals animation module.

## Media
- `bismillah.mp3` - Provided background audio track.
- `assets/video/rajwada-intro-placeholder.mp4` - Intro video.
- `assets/video/rajwada-intro-poster.webp` - Video thumbnail.
- `assets/gallery/gallery-01.jpg` to `05.jpg` - Image gallery placeholders.
- `download_assets.py`, `download_fonts.py`, `scraper.py` - Build scripts used for asset localization (can be removed before deployment).
