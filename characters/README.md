# Platinum character index

The existing Pokédex remains the main site. The character index lives at `/characters/` and has three views:

- **Official** shows original Pokémon Platinum reference information, character artwork, Pokémon artwork, appearances, teams and gifts. It has no editing or backup controls.
- **Luce’s Version** is read-only and shows only explicitly confirmed values. An unconfirmed name, profile field, image, appearance or team stays blank. It never falls back to the original or a draft.
- **Drafts** contains editable profile fields, custom images, appearance notes, team plans, the changes/testing log, import/export and confirmation controls. Original reference information stays alongside the editable fields.

The bottom-right view switch retains the character and tab, open timeline entries, filter and scroll position. Changes & testing falls back to Profile in read-only views and returns when switching back to Drafts.

## Existing data and local storage

Drafts use the existing IndexedDB database `luce-platinum-character-notebook-v1`, object store `notebook`, key `current`; localStorage is the fallback. Version 1 notebooks migrate to version 2. A pre-migration copy is kept at `pre-v2` (or the localStorage key ending `-pre-v2`). Existing replacement names, notes, images, team variations and tested/edited statuses are preserved as **drafts**, never automatically confirmed. Character and appearance IDs are unchanged.

Complete JSON backups contain drafts, images, confirmed copies and the latest 200 confirmation-history records. Version 1 and version 2 backups can be restored. Import replaces the local notebook and does not alter the repository. CSV export contains the private change log.

## Confirmed changes and publication

Each profile field, replacement image, appearance field and team variant has its own confirmation button. Confirming creates a separate value snapshot with date and ROM build; subsequent draft edits do not change it. Confirm again to update the snapshot, or withdraw to return that field to blank. Withdrawal records prevent a previously published value from reappearing locally. A draft status of Edited/Tested alone never confirms anything.

Confirmation is local until publication. To share the same read-only Luce’s Version across devices:

1. In Drafts, export the confirmed snapshot as `confirmed.json`.
2. Replace `characters/confirmed.json` in this repository and commit to main.
3. GitHub Pages serves that snapshot on subsequent page loads.

The GitHub uploader is linked in Drafts. The exported file can also be provided to an assistant with repository write access for publication. No access token is embedded in this public static site. The shared snapshot contains only approved profile/appearance values, images, team variants and confirmation metadata; private project notes, DSPRE locations, testing details and change logs are excluded. Newer local confirmations are merged with the published snapshot by confirmation date. Publish the latest export to synchronize those changes.

An empty shared snapshot is supplied initially; local draft work is not published by this update.

## Reference information and artwork

`data.js` contains the canonical Platinum profiles and 191 timeline entries. Appearances are marked for battles, partner battles, gifts, item/HM rewards, progression, repeatable visits, optional events, postgame, tutorials, contests and facilities. Starter branches share an appearance but have independent party variants. Contest parties and Battle Tower pools are distinguished from fixed Trainer battles. Coverage is documented in linked sources, including grouped dialogue states; this index does not claim to list every possible line or visit.

Character artwork and game sprites are served from `images/`. `pokemon-art.js` maps 116 associated original species to official artwork and Platinum sprites in the PokeAPI sprite archive. Table entries, gift Pokémon and other documented Pokémon are illustrated. A Platinum sprite is used if the artwork cannot load. Pokémon artwork belongs to Nintendo / Game Freak / Creatures, and reference sources are linked in the UI.

Confirmed custom Pokémon can display existing sprites from the main Pokédex via its unchanged `pokemon.js` manifest. The main Pokédex files and completion-tracking storage are not modified by the character view update.

This is a static notebook: it records ROM changes manually and does not modify a ROM. Drafts remain in the browser until exported; clearing site storage removes them. Use complete backups to keep a durable copy.
