# Garuda Dictionary

A mobile-friendly Hindi–English dictionary for exploring a starter collection of Hindi words.

## Live demo
https://garuda-dictionary.vercel.app

## Features
- 55 starter entries with Devanagari headwords, Roman spellings, parts of speech, English glosses, Hindi definitions and bilingual examples.
- Ranked search across Hindi, Romanised spellings, English meanings, definitions and examples, with a small curated alias list and conservative typo matching.
- Part-of-speech filters, saved words and alphabetical browsing.
- Practice quiz, Hindi voice search where browser speech recognition is supported, sentence headword finder and larger-text control.
- Installable/offline-ready PWA shell using a service worker.
- Responsive layout and Cmd/Ctrl + K search shortcut.

## Run locally
Open `index.html` through a local server, for example:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Tests
Requires Node.js 18 or later:
```bash
node --test tests/*.test.cjs
```
The tests cover the starter data structure and ranked search behavior. They do not establish that every dictionary meaning, transliteration or example has been independently reviewed by a linguist.

## Data quality
The 55 records remain a starter dataset. Meanings, transliterations, grammatical labels and examples should be reviewed against reliable Hindi dictionaries and by fluent speakers before describing the collection as authoritative. Search aliases are convenience mappings, not a complete transliteration standard.

## Project files
- `index.html` — application structure
- `styles.css` — responsive interface
- `app.js` — dictionary data and interface behavior
- `search-engine.js` — ranked multilingual search
- `sw.js` — offline app shell cache
- `manifest.webmanifest` — install metadata
- `tests/` — data and search tests

## Limitations
- Voice search depends on browser support and may use the browser's speech service.
- Sentence lookup currently matches exact Devanagari headwords from the starter dataset; it is not a full Hindi tokenizer or grammatical analyser.
- The quiz uses the current dataset and saved words; it is a lightweight practice aid, not an adaptive learning system.
- No formal linguistic review or source citation has yet been completed for all 55 records.

## Licence
No licence has been selected yet. Add one before inviting reuse.
