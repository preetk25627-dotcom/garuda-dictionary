const test = require("node:test");
const assert = require("node:assert/strict");

test("search engine handles Hindi, Roman and English queries", async () => {
  const { searchWords } = await import("../search-engine.js");
  const words = [
    { id: 1, hi: "प्रेम", roman: "prem", pos: "noun", meaning: "love, affection", definition: "स्नेह", example: "प्रेम", translation: "love" },
    { id: 2, hi: "आशा", roman: "aasha", pos: "noun", meaning: "hope", definition: "उम्मीद", example: "आशा", translation: "hope" },
    { id: 3, hi: "साहस", roman: "saahas", pos: "noun", meaning: "courage", definition: "हिम्मत", example: "साहस", translation: "courage" }
  ];
  assert.equal(searchWords(words, "प्रेम")[0].id, 1);
  assert.equal(searchWords(words, "prem")[0].id, 1);
  assert.equal(searchWords(words, "love")[0].id, 1);
  assert.equal(searchWords(words, "pyaar")[0].id, 1);
  assert.equal(searchWords(words, "aasha")[0].id, 2);
});

test("search respects part-of-speech and saved-word filters", async () => {
  const { searchWords } = await import("../search-engine.js");
  const words = [
    { id: 1, hi: "प्रेम", roman: "prem", pos: "noun", meaning: "love", definition: "", example: "", translation: "" },
    { id: 2, hi: "सुंदर", roman: "sundar", pos: "adjective", meaning: "beautiful", definition: "", example: "", translation: "" }
  ];
  assert.deepEqual(searchWords(words, "", { filter: "adjective" }).map(w => w.id), [2]);
  assert.deepEqual(searchWords(words, "", { savedOnly: true, savedIds: [1] }).map(w => w.id), [1]);
});

test("short queries do not trigger fuzzy matches", async () => {
  const { searchWords } = await import("../search-engine.js");
  const words = [{ id: 1, hi: "प्रेम", roman: "prem", pos: "noun", meaning: "love", definition: "", example: "", translation: "" }];
  assert.equal(searchWords(words, "pram").length, 1);
  assert.equal(searchWords(words, "prxm").length, 1);
  assert.equal(searchWords(words, "pxem").length, 1);
  assert.equal(searchWords(words, "przz").length, 0);
});
