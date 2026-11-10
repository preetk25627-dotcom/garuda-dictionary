# Garuda Dictionary

A lightweight Hindi–English dictionary with search across Devanagari, Romanised Hindi, and English.

## Features
- 55 starter entries with Hindi headwords, Roman spellings, parts of speech, English glosses, Hindi definitions, and bilingual examples.
- Search across Devanagari, Romanised spelling, English meaning, definitions, and examples.
- Filter by part of speech.
- Save favourite words in browser localStorage.
- Responsive layout and Cmd/Ctrl + K search shortcut.
- No framework, package installation, or build step.

## Run locally
1. Clone this repository.
2. Open index.html in a browser, or run `python3 -m http.server 8000`.
3. Visit http://localhost:8000.

## Project files
- index.html — page structure
- styles.css — responsive interface
- app.js — dictionary records and interactions

## Data quality
The included records are a starter dataset, not a certified lexicon. Hindi spellings, transliterations, grammatical labels, meanings, and example usage need review by fluent Hindi speakers and reliable dictionaries before production or formal submission. Romanisation is a practical search aid, not one strict transliteration standard. Gender metadata and source citations are not yet included.

## Next steps
- Verify every entry and record references.
- Add gender and inflection information where useful.
- Add tests for search, filters, and saved words.
- Add accessible pronunciation and offline support.
- Add contribution guidelines.

## Licence
No licence has been selected yet. Add one before inviting reuse.