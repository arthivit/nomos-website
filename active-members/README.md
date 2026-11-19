# Active Members Page

Members page for the Philonomosian Society website: officers plus a searchable, filterable list of all active members.

> **Note:** All names in `data/members.json` are placeholders, not real members.

## How to run it

You need [Node.js](https://nodejs.org) (version 18 or newer). No other packages to install.

```bash
cd active-members
npm start
```

Then open **http://localhost:3000** in your browser. Press `Ctrl + C` in the terminal to stop it.

## What's in here

| File | What it does |
| --- | --- |
| `server.js` | Small Node.js server. Serves the page and sends the member list from `/api/members`. |
| `data/members.json` | The member list. Edit this to add, remove or change people. |
| `public/index.html` | Page layout. |
| `public/styles.css` | All colors, fonts and formatting. Colors are set at the top of the file. |
| `public/script.js` | Loads members and runs search, filters and sorting. |

- The menu at the top links to the Society's current Google Site pages, so this page can sit alongside it.

## Editing members

Each person is one line in `data/members.json`:

```json
{ "name": "First Last", "role": "Member", "cohort": "Federalist", "classYear": 2028, "school": "College", "major": "Government", "hometown": "City, ST" }
```

- `role`: use `"Member"` for regular members. Any other role (e.g. `"President"`) lists them in the Officers section. Officers are shown in this order: President, Vice President, Secretary, Treasurer, Amanuensis, Censor.
- `cohort`: one of Progressive, Liberal, Independent, Federalist or Tory.
- Keep the commas between lines, and no comma after the last one.
