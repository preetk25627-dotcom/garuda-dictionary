# AI-assisted development log — Garuda Dictionary

## Tools used
- **ChatGPT (GPT-6):** planning the upgrade, reviewing the existing repository, drafting and integrating the ranked search module, interface enhancements, PWA shell, tests, and documentation.
- **GitHub integration:** created the feature branch and committed repository changes.
- **Node.js test runner / GitHub Actions:** validation path; the updated tests must be run and the workflow result checked before this work is described as fully verified.
- **Manual browser testing:** still required on desktop and a real mobile device.

## Development approach
Work is being done on the feat/advanced-dictionary branch so the existing main branch and production deployment are not changed until the upgrade is reviewed.

## Changes in this iteration
1. Extracted ranked search into search-engine.js.
2. Added exact Hindi, Romanised and English matches, a small curated alias list, prefix ranking and conservative edit-distance matching for longer queries.
3. Integrated search with existing part-of-speech and saved-word filters.
4. Added alphabetical browsing, a lightweight practice quiz, Hindi speech-recognition input where supported, sentence headword lookup, and a larger-text toggle.
5. Added speech playback and shareable word-card image generation in the word detail dialog.
6. Added a web app manifest, SVG app icon and service worker for an installable/offline app shell.
7. Added search-engine tests and updated the README to describe capabilities and limitations.

## Decisions and limitations
- Very short queries do not use fuzzy matching, to reduce irrelevant suggestions.
- Search aliases are intentionally limited; they are convenience spellings, not a complete transliteration system.
- Sentence lookup currently finds exact Devanagari headwords only. It is not a full Hindi tokenizer, lemmatizer or grammatical analyser.
- Voice input and speech playback depend on browser/device support. Speech recognition may rely on the browser's remote speech service.
- The service worker caches the app shell; first installation requires a successful online visit.
- The 55 dictionary entries are still a starter dataset. Their meanings, transliterations, grammatical labels and examples have not all been independently verified against authoritative dictionaries or by a language expert.
- Automated tests cover selected search behaviors and data structure; they do not prove linguistic correctness, accessibility compliance, browser compatibility or offline reliability.

## Required manual verification
- Run node --test tests/*.test.cjs and inspect the GitHub Actions result.
- Test Devanagari, Romanised, English, alias and typo searches; confirm short queries do not produce noisy fuzzy matches.
- Test filters, saved words, quiz, browse, voice input, sentence lookup, larger text, pronunciation and share-card export.
- Install the PWA, then test reload/search with the network disabled.
- Test keyboard navigation, focus visibility, dialog close behavior and a narrow mobile viewport.
- Review dictionary content against reliable Hindi references and record the exact sources and corrections here.

## Prompt and contribution note
The project owner should add the actual prompts they personally supplied and any external references they personally used. Do not claim manual checks, linguistic review, screenshots, user testing or offline verification until they have actually been completed.
