# Clovis — Landing Page (Static)

Refined one-page site for a classy, cigar/whisky-inspired cannabis-adjacent brand. No store, just info + media.

## How to use
1. Replace images in `/assets` (see filenames below). Keep them ~1600px wide JPG.
2. Optional: replace `assets/hero.mp4` with a subtle greenhouse clip and `hero-poster.jpg` as fallback.
3. Edit copy in `index.html` under sections: Story, Method, Media, Contact.

## Assets to provide
- `assets/logo-badge.png` (transparent PNG of your badge)
- `assets/hero.mp4` (optional) and `assets/hero-poster.jpg`
- `assets/story.jpg`
- `assets/media-1.jpg` ... `assets/media-6.jpg`

## Local preview
Just open `index.html` or run a simple server:
```
python3 -m http.server 8000
```

## Publish free with GitHub Pages
- New repo → upload files (keep this project at the root).
- Settings → Pages → Branch: `main` + `/ (root)` → Save.
- Visit `https://<username>.github.io/<repo>`

## Notes
- Fonts via Google Fonts: Cormorant Garamond (serif) + Inter (sans).
- Accessible: keyboard-friendly, high contrast, semantic landmarks.
