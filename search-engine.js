const ALIASES = {
  "प्रेम": ["pyaar", "pyar"],
  "आशा": ["asha"],
  "साहस": ["himmat"],
  "मित्र": ["dost"],
  "खुशी": ["khushi", "khushee"],
  "आज़ादी": ["azadi", "azaadi"],
  "कहानी": ["kahani"],
  "मेहनत": ["mehnat", "parishram"],
  "शांति": ["shanti", "shaanti"],
  "विश्वास": ["bharosa", "vishwas"]
};

export function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("hi")
    .replace(/[़ॅॉ]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function editDistance(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diagonal = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const above = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = above;
    }
  }
  return row[b.length];
}

function scoreWord(word, query) {
  const headword = normalizeSearchText(word.hi);
  const roman = normalizeSearchText(word.roman);
  const aliases = (ALIASES[word.hi] || []).map(normalizeSearchText);
  const meaning = normalizeSearchText(word.meaning);
  const definition = normalizeSearchText(word.definition);
  const example = normalizeSearchText(word.example);
  const translation = normalizeSearchText(word.translation);
  const fields = [headword, roman, ...aliases, meaning, definition, example, translation];

  if (headword === query) return 120;
  if (roman === query || aliases.includes(query)) return 115;
  if (headword.startsWith(query) || roman.startsWith(query) || aliases.some(a => a.startsWith(query))) return 95;
  if (headword.includes(query) || roman.includes(query) || aliases.some(a => a.includes(query))) return 85;
  if (meaning.includes(query) || definition.includes(query)) return 65;
  if (example.includes(query) || translation.includes(query)) return 45;

  // Fuzzy matching is deliberately disabled for very short queries to avoid noisy results.
  if (query.length < 4) return 0;
  const threshold = query.length >= 8 ? 2 : 1;
  let best = Infinity;
  for (const field of fields.slice(0, 3)) {
    for (const token of field.split(" ")) {
      if (Math.abs(token.length - query.length) > threshold) continue;
      best = Math.min(best, editDistance(query, token));
    }
  }
  return best <= threshold ? 30 - best * 5 : 0;
}

export function searchWords(words, rawQuery, { filter = "all", savedOnly = false, savedIds = [] } = {}) {
  const query = normalizeSearchText(rawQuery);
  const saved = new Set(savedIds);
  return words
    .filter(word => (filter === "all" || word.pos === filter) && (!savedOnly || saved.has(word.id)))
    .map(word => ({ word, score: query ? scoreWord(word, query) : 1 }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || a.word.hi.localeCompare(b.word.hi, "hi"))
    .map(item => item.word);
}
