# ModuleXVB Decor — Premium Mediterranean Plants & Event Decor

Bilingual (SR/EN) one-page static website. Plain HTML/CSS/JS, no build step, no framework.

## Files
- `index.html` — page shell
- `styles.css` — all styles
- `script.js` — renders content, language switch, mobile nav, scroll reveal
- `content.js` — all SR/EN copy (edit this to change text)
- `assets/` — images + logo

## Run locally
Just open `index.html` in a browser, or serve the folder with any static server
(needed for the `content.js` ES module import to work over `file://` in some browsers):

```
npx serve .
```

## Publish on GitHub Pages
1. Push this folder's contents to a GitHub repo (root, or a `/docs` folder).
2. Repo Settings → Pages → Deploy from branch → select the branch/folder.
3. Site goes live at `https://<username>.github.io/<repo-name>/`.
