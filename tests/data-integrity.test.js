const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const match = source.match(/^const words=(\[[\s\S]*?\])\.map\(\(x,i\)=>/m);

test("dictionary starter dataset has 55 records with required fields", () => {
  assert.ok(match, "could not locate the dictionary data array");
  const records = vm.runInNewContext("(" + match[1] + ")");
  assert.equal(records.length, 55);

  const ids = new Set();
  for (const [index, record] of records.entries()) {
    assert.equal(record.length, 7, `record ${index + 1} should contain seven fields`);
    for (const [fieldIndex, value] of record.entries()) {
      assert.equal(typeof value, "string", `record ${index + 1}, field ${fieldIndex + 1} should be text`);
      assert.ok(value.trim(), `record ${index + 1}, field ${fieldIndex + 1} should not be empty`);
    }
    assert.ok(!ids.has(record[0]), `duplicate Hindi headword: ${record[0]}`);
    ids.add(record[0]);
    assert.match(record[0], /[\u0900-\u097F]/, `headword should contain Devanagari: ${record[0]}`);
    assert.match(record[1], /^[a-z]+$/, `Roman spelling should be lowercase Latin letters: ${record[1]}`);
    assert.ok(["noun", "verb", "adjective", "adverb"].includes(record[2]), `unexpected part of speech: ${record[2]}`);
  }
});

test("the starter data test explicitly does not claim linguistic validation", () => {
  const readme = fs.readFileSync(new URL("../README.md", import.meta.url), "utf8");
  assert.match(readme, /do \*\*not\*\* verify linguistic accuracy/i);
});
