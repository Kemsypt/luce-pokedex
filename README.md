# Luce Pokédex

A complete static Pokédex website with 24 custom Pokémon, original 80×80 sprites, front/back two-frame animations, searchable cards, type filters, and evolution families. No build tools, API keys, server or subscriptions needed.

## Preview

Double-click `index.html`. It works directly from a local file as well as on GitHub Pages. Keep the folders together.

## Put it on GitHub Pages

1. Sign in at https://github.com and open https://github.com/new.
2. Name the repository `luce-pokedex`. Choose **Public** for GitHub Free, tick **Add README**, then click **Create repository**.
3. Extract `Luce-Pokedex.zip` on your computer. In the repository, choose **Add file → Upload files**. Upload the **contents** of the extracted `luce-pokedex` folder, including `assets/`, rather than the ZIP or its parent folder. `index.html` must be at the repository root. Commit the upload.
4. Open **Settings → Pages**. Under **Source**, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
5. The Pages settings will show the published address once deployment completes: `https://YOUR-USERNAME.github.io/luce-pokedex/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Add or update Pokémon

All records are in `pokemon.js`. Each has a name, local display number, types, evolution family, description and sprite sheet path. Display numbers are collection numbers, not original ROM species IDs.

- Copy an original 320×80 PNG sheet into `assets/`.
- Frame order: **back 1, back 2, front 1, front 2**, each 80×80.
- Add a record to `window.POKEMON` in `pokemon.js`, giving it a unique lowercase `id` and display `number`.
- Use the same `family` value for related stages, listed in evolution order.
- Keep an unknown description as `entry: ""`; the site displays “Pokédex entry coming soon.”
- All file URLs are relative, so the site works under a GitHub Pages repository path.
- Commit the changed files to GitHub to update the site.

Example:

```js
{
  "id": "cinnacub",
  "number": 4,
  "name": "Cinnacub",
  "types": ["Normal"],
  "family": "Cinnamon bears",
  "entry": "Your agreed Pokédex entry.",
  "sheet": "assets/cinnacub.png",
  "category": "",
  "typeNote": ""
}
```

## Artwork and animation

Source PNGs are copied unchanged. The browser hides only pixels that exactly match the sheet's top-left background colour. The sprite's original colours and pixels are retained. This assumes the background colour is not intentionally used inside the creature.

The animation alternates the supplied poses in a short burst, with a three-display-pixel bounce and a pause. It is Platinum-inspired, not an extracted reproduction of its per-species animation scripts. Display scaling uses nearest-neighbour rendering. Reduced-motion preferences disable autoplay; a manual replay remains available. No shiny palettes are invented; shiny sheets can be added when supplied.

## Content to finish

- Descriptions not recovered verbatim remain empty.
- The sheet named `Elphling_connected.png` is shown under the agreed name **Elphlet**.
- The ZIP also contained character portraits. These are excluded from this Pokémon-only catalogue.
- The Pokémon already supplied are included; future creations can be added to `pokemon.js`.

## Mobile update

Phones use sticky **Pokémon entry / Browse Pokémon** tabs. Selecting a card opens its entry. The grid has two columns, controls have larger touch targets, and form fields use 16px text to avoid automatic iPhone input zoom. Upload the new `index.html`, `style.css`, and `app.js` over the previous files to apply this update.

## Confirmed Pokédex data

The supplied Pokédex entries and typings are included verbatim. Cinnecub uses the supplied name spelling; its original `cinnacub` asset path and URL ID are retained for existing links. Descriptions for Andi, Andusk, Andistral, Lemomo and Appaloft remain empty pending their text.
