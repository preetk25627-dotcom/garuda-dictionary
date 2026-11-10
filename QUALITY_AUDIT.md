# Garuda Dictionary — Quality Audit

Date: 11 November 2026
Scope: the 55-entry starter dataset and the current web interface on `main`.

## 1. Linguistic review — preliminary, not expert-certified

The dataset contains 55 Hindi headwords with Roman spellings, parts of speech, English glosses, Hindi definitions, and bilingual examples.

### What was checked
- All 55 records have seven non-empty string fields (covered by the automated data-integrity test).
- Headwords are Devanagari and Roman spellings use lowercase Latin letters (structural checks only).
- The entries were read for obvious editorial consistency and clarity.

### Important limitations
- This is not a formal linguistic validation by a Hindi lexicographer or independent fluent-speaker panel.
- Transliteration is not a single universal standard. Spellings such as `gyaan`, `aasha`, `svatantra`, and `zimmedaari` should be checked against the project's chosen transliteration convention.
- Grammatical labels, context-dependent meanings, regional usage, and example naturalness require fluent-speaker review.
- The collection must continue to be described as a starter dataset, not an authoritative dictionary.

### Reviewer checklist
For each of the 55 entries, a fluent Hindi reviewer should confirm:
- headword spelling and commonly accepted variants;
- Roman transliteration and consistency with a declared scheme;
- part of speech and grammatical form;
- English gloss and Hindi definition;
- naturalness and correctness of both example sentences.

**Status: preliminary editorial review only; independent linguistic sign-off pending.**

## 2. Accessibility audit — code inspection

### Positive findings
- The document declares a language and viewport.
- Search and sentence inputs have associated labels.
- Most interactive controls are native HTML buttons.
- Search results and sentence output use live-region announcements.
- The word dialog has a native `<dialog>` element and a labelled close button.
- Hindi text fragments use `lang="hi"` in key content areas.
- Responsive layouts are defined at 760px, 600px, and 430px breakpoints.

### Issues to verify or improve
- Add and maintain `aria-pressed` on filter and toggle buttons so their state is available to assistive technology.
- Give the dialog an explicit accessible name and verify focus is returned to the invoking control after close.
- Verify keyboard-only operation for every tool, quiz flow, browse group, and dialog.
- Verify visible focus indicators and text/control contrast in all states.
- Verify zoom/reflow at 200% and 400%, including the filter row and dialog.
- Verify screen-reader announcements for search result counts, quiz feedback, and voice-search status.
- Voice search must remain optional; all dictionary functionality should remain usable without speech recognition.

### Manual test plan
1. Use Tab and Shift+Tab through the page; ensure focus order is logical and focus is always visible.
2. Open and close a word dialog using keyboard only; confirm focus restoration.
3. Operate filters, saved words, browse, quiz, and sentence finder without a mouse.
4. Test with VoiceOver on macOS and confirm names, roles, states, and Hindi pronunciation/language metadata.
5. Test 200% and 400% zoom and a 320 CSS-pixel viewport.
6. Check contrast with an automated checker and manually inspect hover, active, disabled, and focus states.

**Status: preliminary code inspection; full WCAG 2.2 AA conformance has not been established.**

## Summary

The app has a useful semantic foundation, but neither expert linguistic sign-off nor a complete accessibility conformance audit should be claimed yet. Keep these limitations visible until the reviewer and manual test steps are completed.
