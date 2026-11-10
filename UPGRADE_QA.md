# Garuda Dictionary — upgrade verification checklist

## Automated
- [ ] Run node --test tests/*.test.cjs
- [ ] Confirm GitHub Actions passes on feat/advanced-dictionary
- [ ] Review all warnings and failures

## Functional browser QA
- [ ] Hindi, Roman, English, alias and longer typo searches
- [ ] Confirm short queries do not produce fuzzy noise
- [ ] Part-of-speech filters and saved-word persistence
- [ ] Alphabetical browse and word detail
- [ ] Practice quiz with saved words and with no saved words
- [ ] Voice input on a supported browser
- [ ] Sentence lookup with exact Devanagari headwords
- [ ] Larger text toggle, pronunciation and share-card export
- [ ] Install PWA and test offline app-shell reload

## Accessibility and responsive checks
- [ ] Keyboard-only navigation and visible focus
- [ ] Dialog opens and closes correctly
- [ ] Screen reader labels and live regions
- [ ] 390px phone, 768px tablet and desktop layouts

## Content review
- [ ] Verify Hindi headwords, meanings and examples against trusted references
- [ ] Review transliteration and part-of-speech labels
- [ ] Record sources and changes in AI_LOG.md
