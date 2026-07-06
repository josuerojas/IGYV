# Iglesia Gracia y Verdad — website

Bilingual (ES/EN) static site. No build step, no dependencies — plain HTML/CSS/JS.

## Structure

- `index.html`, `about.html`, `beliefs.html`, `community.html`, `sermons.html`, `events.html`, `giving.html`, `contact.html`
- `assets/css/style.css` — shared styles (monochrome design system)
- `assets/js/main.js` — language toggle (persists via localStorage) + mobile menu

## Editing content

Each bilingual string is a pair of `<span data-i18n="es">...</span>` / `<span data-i18n="en">...</span>` elements sitting next to each other — edit both when you change copy.

## To-do before launch

- Swap the placeholder cross-mark logo in the header for the real logo file.
- Replace the sermon list / embed in `sermons.html` and the homepage with the actual latest YouTube videos.
- Add real photos (currently solid black placeholder blocks).
- Confirm SINPE/bank transfer details on `giving.html` (left as "contact us" placeholders).
- The contact form on `contact.html` doesn't send anywhere yet — needs a form backend (e.g. Formspree, Netlify Forms) or a `mailto:` fallback.

## Hosting

Deployed via GitHub Pages from this repo.
