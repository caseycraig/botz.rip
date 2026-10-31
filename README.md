# botz.rip

A single page about proportion.

Reality and Rampaging show the same three sentences. One leaves them at their size. The other sets them in a shout. The extra volume is fear. The line on the masthead — a website faked by truth — is the theme Casey set for the site: don't panic, it's just fear.

Nothing on the page is a news report or a claim about a person. The fader only changes how much of the screen the loud side occupies.

## Run it locally

There is no install and no build.

```bash
python3 -m http.server 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

Drag **Fear**, or focus it and use the arrow keys. Left is closer to reality. Right gives Rampaging more of the page. The words on each side stay the same.

Open with `#fear=80` in the address to start closer to the loud side, for example [http://127.0.0.1:4173/#fear=80](http://127.0.0.1:4173/#fear=80).

Motion is slow on purpose: a thin rule that breathes on the quiet side, and a stripe that drifts on the loud side. Both stop when the browser is set to reduced motion.

## Deploy on Vercel

The site is static files in the repository root. Import the repo in Vercel and leave the framework preset, build command, and output directory empty. Vercel serves `index.html` with no configuration.

`robots.txt` and `sitemap.xml` already name the production host, [https://botz.rip](https://botz.rip). Attach that domain to the project when it is ready.

## What is in the repo

- `index.html` — the page, title, description, and Open Graph / Twitter tags
- `css/styles.css` — layout, type, color, and motion
- `js/main.js` — the fear fader
- `fonts/` — Fraunces and Anton, both under the SIL Open Font License (see `fonts/Fraunces-OFL.txt` and `fonts/Anton-OFL.txt`)
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` — the split mark
- `og.png` — the social preview image
- `robots.txt`, `sitemap.xml`
- `.github/ISSUE_TEMPLATE/` — bug, feature, and custom issue templates

## Accessibility

The document language is English. The fader has a visible label, a description, and a text value. Copy on the paper field and the dark field is set in colors that stay above ordinary contrast. The mark next to the name is decorative (`alt=""`), because the link already reads botz.rip. The social image has its own alt text in the Open Graph and Twitter tags.
