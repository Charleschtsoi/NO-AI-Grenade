export type SignalId =
  | "tell-phrases"
  | "assistant-voice"
  | "markdown-dump"
  | "uniform-rhythm"
  | "low-contractions"
  | "no-question"
  | "no-ownership"
  | "length-wall"
  | "fancy-unicode"
  | "discourse-scaffold"
  | "human-wrapper";

export type Verdict =
  | "too-short"
  | "likely-human"
  | "uncertain"
  | "likely-ai"
  | "grenade";

export type Highlight = {
  start: number;
  end: number;
  id: SignalId;
};

export type Signal = {
  id: SignalId;
  score: number;
  hits: string[];
};

export type DetectionResult = {
  tokens: number;
  latinWords: number;
  cjkChars: number;
  sentenceCount: number;
  aiScore: number;
  grenadeScore: number;
  combinedScore: number;
  verdict: Verdict;
  signals: Signal[];
  highlights: Highlight[];
  hasQuestion: boolean;
  hasOwnership: boolean;
  hasHumanWrapper: boolean;
};

const MIN_TOKENS = 40;

type Phrase = { phrase: string; weight: number };

const EN_TELLS: Phrase[] = [
  { phrase: "as an ai", weight: 1 },
  { phrase: "as a language model", weight: 1 },
  { phrase: "i don't have personal", weight: 1 },
  { phrase: "i do not have personal", weight: 1 },
  { phrase: "here's a comprehensive", weight: 0.95 },
  { phrase: "here is a comprehensive", weight: 0.95 },
  { phrase: "that's a great question", weight: 0.85 },
  { phrase: "that is a great question", weight: 0.85 },
  { phrase: "great question!", weight: 0.7 },
  { phrase: "i'd be happy to", weight: 0.85 },
  { phrase: "i would be happy to", weight: 0.85 },
  { phrase: "let's dive in", weight: 0.8 },
  { phrase: "let us dive in", weight: 0.8 },
  { phrase: "delve into", weight: 0.85 },
  { phrase: "it is important to note", weight: 0.8 },
  { phrase: "it's important to note", weight: 0.8 },
  { phrase: "play a crucial role", weight: 0.75 },
  { phrase: "in today's", weight: 0.6 },
  { phrase: "in the world of", weight: 0.65 },
  { phrase: "whether you're", weight: 0.55 },
  { phrase: "look no further", weight: 0.7 },
  { phrase: "unlock the potential", weight: 0.7 },
  { phrase: "rest assured", weight: 0.6 },
  { phrase: "game-changer", weight: 0.65 },
  { phrase: "cutting-edge", weight: 0.5 },
  { phrase: "ever-evolving", weight: 0.75 },
  { phrase: "rich tapestry", weight: 0.9 },
  { phrase: "tapestry", weight: 0.55 },
  { phrase: "underscore", weight: 0.5 },
  { phrase: "underscores", weight: 0.55 },
  { phrase: "pivotal role", weight: 0.7 },
  { phrase: "pivotal", weight: 0.4 },
  { phrase: "multifaceted", weight: 0.7 },
  { phrase: "nestled", weight: 0.55 },
  { phrase: "meticulous", weight: 0.5 },
  { phrase: "groundbreaking", weight: 0.5 },
  { phrase: "holistic", weight: 0.45 },
  { phrase: "paradigm", weight: 0.5 },
  { phrase: "robust", weight: 0.35 },
  { phrase: "seamless", weight: 0.4 },
  { phrase: "seamlessly", weight: 0.5 },
  { phrase: "furthermore", weight: 0.55 },
  { phrase: "moreover", weight: 0.5 },
  { phrase: "in conclusion", weight: 0.7 },
  { phrase: "to summarize", weight: 0.55 },
  { phrase: "in summary", weight: 0.5 },
  { phrase: "that being said", weight: 0.45 },
  { phrase: "when it comes to", weight: 0.4 },
  { phrase: "a wide range of", weight: 0.45 },
  { phrase: "at its core", weight: 0.5 },
  { phrase: "testament to", weight: 0.55 },
  { phrase: "navigating the", weight: 0.5 },
  { phrase: "landscape", weight: 0.35 },
  { phrase: "realm", weight: 0.35 },
  { phrase: "vibrant", weight: 0.3 },
  { phrase: "invaluable", weight: 0.4 },
  { phrase: "foster", weight: 0.35 },
  { phrase: "harness", weight: 0.4 },
  { phrase: "embark", weight: 0.4 },
  { phrase: "noteworthy", weight: 0.45 },
  { phrase: "notably", weight: 0.35 },
  { phrase: "please don't hesitate", weight: 0.7 },
  { phrase: "feel free to", weight: 0.4 },
  { phrase: "hope this helps", weight: 0.65 },
  { phrase: "let me know if", weight: 0.55 },
  { phrase: "if you have any further", weight: 0.75 },
  { phrase: "if you have any other", weight: 0.65 },
];

const ZH_TELLS: Phrase[] = [
  { phrase: "作为一名人工智能", weight: 1 },
  { phrase: "作为人工智能", weight: 0.95 },
  { phrase: "我是一个语言模型", weight: 1 },
  { phrase: "综上所述", weight: 0.9 },
  { phrase: "总而言之", weight: 0.85 },
  { phrase: "值得注意的是", weight: 0.85 },
  { phrase: "需要指出的是", weight: 0.85 },
  { phrase: "需要注意的是", weight: 0.75 },
  { phrase: "不可否认", weight: 0.7 },
  { phrase: "在当今", weight: 0.7 },
  { phrase: "随着科技", weight: 0.7 },
  { phrase: "让我们深入", weight: 0.8 },
  { phrase: "接下来我们将", weight: 0.8 },
  { phrase: "希望对你有帮助", weight: 0.85 },
  { phrase: "希望这对您有帮助", weight: 0.85 },
  { phrase: "希望对您有所帮助", weight: 0.85 },
  { phrase: "如果您有任何其他问题", weight: 0.95 },
  { phrase: "如果您还有其他问题", weight: 0.9 },
  { phrase: "如果还有其他问题", weight: 0.75 },
  { phrase: "当然可以", weight: 0.55 },
  { phrase: "以下是", weight: 0.45 },
  { phrase: "下面为您", weight: 0.7 },
  { phrase: "好的，这是", weight: 0.7 },
  { phrase: "进行全面", weight: 0.65 },
  { phrase: "深度分析", weight: 0.6 },
  { phrase: "首先，", weight: 0.4 },
  { phrase: "其次，", weight: 0.5 },
  { phrase: "再次，", weight: 0.55 },
  { phrase: "最后，", weight: 0.35 },
  { phrase: "作為一名人工智慧", weight: 1 },
  { phrase: "作為人工智慧", weight: 0.95 },
  { phrase: "綜上所述", weight: 0.9 },
  { phrase: "總而言之", weight: 0.85 },
  { phrase: "當然可以", weight: 0.55 },
  { phrase: "希望對你有幫助", weight: 0.85 },
  { phrase: "如果您有任何其他問題", weight: 0.95 },
  { phrase: "接下來我們將", weight: 0.8 },
  { phrase: "在當今", weight: 0.7 },
  { phrase: "進行全面", weight: 0.65 },
  { phrase: "下面為您", weight: 0.7 },
  { phrase: "好的，這是", weight: 0.7 },
];

const JA_TELLS: Phrase[] = [
  { phrase: "もちろんです", weight: 0.85 },
  { phrase: "包括的な分析", weight: 0.9 },
  { phrase: "包括的", weight: 0.45 },
  { phrase: "特筆に値します", weight: 0.85 },
  { phrase: "極めて重要な役割", weight: 0.85 },
  { phrase: "今日の急速に進化する", weight: 0.85 },
  { phrase: "シームレス", weight: 0.55 },
  { phrase: "ご質問がございましたら", weight: 0.95 },
  { phrase: "お気軽に", weight: 0.55 },
  { phrase: "お役に立てば幸いです", weight: 0.85 },
  { phrase: "まとめると", weight: 0.7 },
  { phrase: "はじめに", weight: 0.35 },
  { phrase: "パラダイムシフト", weight: 0.7 },
  { phrase: "さらに深く掘り下げ", weight: 0.75 },
];

const FR_TELLS: Phrase[] = [
  { phrase: "bien entendu", weight: 0.75 },
  { phrase: "voici une analyse complète", weight: 0.95 },
  { phrase: "il est important de noter", weight: 0.85 },
  { phrase: "dans le paysage actuel", weight: 0.8 },
  { phrase: "joue un rôle essentiel", weight: 0.75 },
  { phrase: "en conclusion", weight: 0.7 },
  { phrase: "n'hésitez pas", weight: 0.7 },
  { phrase: "si vous avez d'autres questions", weight: 0.9 },
  { phrase: "j'espère que cela vous aide", weight: 0.8 },
  { phrase: "approche holistique", weight: 0.7 },
  { phrase: "riche tapisserie", weight: 0.9 },
  { phrase: "changement de paradigme", weight: 0.7 },
  { phrase: "de manière transparente", weight: 0.6 },
  { phrase: "libérer le potentiel", weight: 0.7 },
];

const ASSISTANT_OPENERS = [
  /^[\s"'“”]*absolutely[!！,，.]/i,
  /^[\s"'“”]*certainly[!！,，.]/i,
  /^[\s"'“”]*of course[!！,，.]/i,
  /^[\s"'“”]*sure[!！,，.]/i,
  /^[\s"'“”]*great question/i,
  /^[\s"'“”]*that's a great question/i,
  /^[\s"'“”]*here(?:'s| is) a (?:comprehensive|detailed|complete)/i,
  /^[\s"'“”]*i'd be happy to/i,
  /^[\s"'“”]*of course[!！]?\s*here/i,
  /^[\s"'“”]*当然可以/,
  /^[\s"'“”]*當然可以/,
  /^[\s"'“”]*好的[，,！!]/,
  /^[\s"'“”]*没问题[，,！!]/,
  /^[\s"'“”]*沒問題[，,！!]/,
  /^[\s"'“”]*以下是/,
  /^[\s"'“”]*下面为您/,
  /^[\s"'“”]*下面為您/,
  /^[\s"'“”]*もちろんです/,
  /^[\s"'“”]*bien entendu/i,
  /^[\s"'“”]*voici une analyse/i,
];

const OWNERSHIP_RE =
  /\b(i (asked|read|skimmed|cut|checked|rewrote|edited|don't buy|do not buy|think|suspect|tried)|i actually (read|looked)|the (useful|only) (bit|part)|ignore (most|the rest)|does that (match|sound)|wdyt|what do you think|j'ai (demandé|lu|parcouru)|je l'ai vraiment lu|le seul truc utile)\b|[?？]|我(问了|問了|看了|读了|讀了|查了|改了|觉得|覺得|怀疑)|有用的(就|只有)|你觉得|你覺得|对得上吗|靠谱吗|自分で読んだ|聞いた|どう思う/i;

const QUESTION_RE =
  /[?？]|\b(wdyt|what do you think|does that|can you|could you|any idea|does this|est-ce que|tu penses)\b|吗[？?]?|嗎[？?]?|呢[？?]?|对吗|對嗎|行吗|可以吗|ですか|でしょうか|同じ\？/;

const HUMAN_WRAPPER_RE =
  /\b(i asked|i read|i skimmed|ignore most|useful bit|does that match|quick check|j'ai demandé|je l'ai vraiment lu|le seul truc utile)\b|我(问了|問了|看了|读了|讀了)|有用的就|你觉得呢|自分で読んだ|使えるの一句/;

const DISCOURSE_RES: { id: string; re: RegExp; weight: number }[] = [
  {
    id: "not-just-but",
    re: /\bnot (?:just|only|merely|simply)\b[^.?!]{0,80}\bbut (?:also|rather|instead)\b/gi,
    weight: 0.7,
  },
  {
    id: "whether-or",
    re: /\bwhether you(?:'re| are)\b[^.?!]{0,60}\bor\b/gi,
    weight: 0.45,
  },
  {
    id: "tricolon",
    re: /\b(\w+),\s+(\w+),?\s+and\s+(\w+)\b/g,
    weight: 0.25,
  },
  {
    id: "zh-not-but",
    re: /不仅[^。！？]{0,40}而且|不僅[^。！？]{0,40}而且/g,
    weight: 0.5,
  },
  {
    id: "fr-not-but",
    re: /ne devrait pas seulement[^.]{0,80}mais plutôt|non seulement[^.]{0,60}mais/gi,
    weight: 0.55,
  },
];

const INVISIBLE_RE = /[\u200B\u200C\u200D\u2060\uFEFF\u00AD]/g;

export function countTokens(text: string): {
  latinWords: number;
  cjkChars: number;
  tokens: number;
} {
  const latinWords = (text.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+(?:'[A-Za-zÀ-ÖØ-öø-ÿ]+)?/g) ?? [])
    .length;
  const cjkChars = (text.match(/[\u3040-\u30FF\u3400-\u9FFF\uF900-\uFAFF]/g) ?? [])
    .length;
  return { latinWords, cjkChars, tokens: latinWords + cjkChars };
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?。！？])\s+|\n+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

function findPhraseHits(
  text: string,
  phrases: Phrase[],
): { hits: string[]; score: number; highlights: Highlight[] } {
  const lower = text.toLowerCase();
  const hits: string[] = [];
  const highlights: Highlight[] = [];
  let weighted = 0;
  const seen = new Set<string>();

  for (const { phrase, weight } of phrases) {
    const needle = phrase.toLowerCase();
    let from = 0;
    let found = false;
    while (from < lower.length) {
      const at = lower.indexOf(needle, from);
      if (at === -1) break;
      const before = at === 0 ? "" : lower[at - 1];
      const after = lower[at + needle.length] ?? "";
      const latin = /[a-z]/i.test(needle[0]);
      if (latin) {
        if (before && /[a-z]/i.test(before)) {
          from = at + needle.length;
          continue;
        }
        if (after && /[a-z]/i.test(after)) {
          from = at + needle.length;
          continue;
        }
      }
      found = true;
      highlights.push({
        start: at,
        end: at + needle.length,
        id: "tell-phrases",
      });
      from = at + needle.length;
    }
    if (found && !seen.has(needle)) {
      seen.add(needle);
      hits.push(phrase);
      weighted += weight;
    }
  }

  const score = Math.min(1, weighted / 2.2);
  return { hits, score, highlights };
}

function contractionScore(text: string, latinWords: number): number {
  if (latinWords < 40) return 0;
  const contractions = (text.match(/\b(?:\w+n't|'ll|'re|'ve|'d|it's|that's|there's|here's|what's|i'm|you're|we're|they're)\b/gi) ?? [])
    .length;
  const ratio = contractions / latinWords;
  if (ratio >= 0.035) return 0;
  if (ratio >= 0.02) return 0.35;
  if (ratio >= 0.01) return 0.65;
  return 0.9;
}

function rhythmScore(sentences: string[]): {
  score: number;
  sentenceCount: number;
} {
  const lengths = sentences
    .map((sentence) => countTokens(sentence).tokens)
    .filter((n) => n >= 4);
  if (lengths.length < 4) return { score: 0, sentenceCount: sentences.length };
  const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const variance =
    lengths.reduce((sum, n) => sum + (n - mean) ** 2, 0) / lengths.length;
  const std = Math.sqrt(variance);
  const cv = mean === 0 ? 0 : std / mean;
  let score = 0;
  if (cv < 0.18) score = 0.85;
  else if (cv < 0.28) score = 0.55;
  else if (cv < 0.38) score = 0.25;
  return { score, sentenceCount: sentences.length };
}

function markdownScore(text: string): { score: number; hits: string[] } {
  const hits: string[] = [];
  const headings = (text.match(/^#{1,6}\s+/gm) ?? []).length;
  const numbered = (text.match(/^\s*\d+\.\s+/gm) ?? []).length;
  const fences = (text.match(/```/g) ?? []).length;
  const bullets = (text.match(/^\s*[-*]\s+/gm) ?? []).length;
  const boldHeaders = (text.match(/^\s*\*\*[^*]{4,80}\*\*\s*$/gm) ?? []).length;

  if (headings >= 2) hits.push("headings");
  if (numbered >= 5) hits.push("numbered-list");
  if (fences >= 2) hits.push("code-fences");
  if (bullets >= 6) hits.push("bullet-list");
  if (boldHeaders >= 2) hits.push("bold-headers");

  const raw =
    Math.min(1, headings / 6) * 0.35 +
    Math.min(1, numbered / 10) * 0.3 +
    Math.min(1, fences / 4) * 0.2 +
    Math.min(1, bullets / 12) * 0.15 +
    Math.min(1, boldHeaders / 4) * 0.2;
  return { score: Math.min(1, raw), hits };
}

function assistantScore(
  text: string,
): { score: number; hits: string[]; highlights: Highlight[] } {
  const hits: string[] = [];
  const highlights: Highlight[] = [];
  const trimmed = text.trim();
  for (const re of ASSISTANT_OPENERS) {
    if (re.test(trimmed)) {
      hits.push("assistant-opener");
      highlights.push({
        start: 0,
        end: Math.min(trimmed.length, 48),
        id: "assistant-voice",
      });
      break;
    }
  }
  const closers = [
    "let me know if you",
    "hope this helps",
    "if you have any other questions",
    "if you have any further questions",
    "feel free to ask",
    "希望对你有帮助",
    "希望这对您有帮助",
    "如果您有任何其他问题",
    "如果您还有其他问题",
    "希望對你有幫助",
    "如果您有任何其他問題",
    "ご質問がございましたら",
    "お役に立てば幸いです",
    "n'hésitez pas",
    "si vous avez d'autres questions",
    "j'espère que cela vous aide",
  ];
  const lower = text.toLowerCase();
  for (const closer of closers) {
    const at = lower.lastIndexOf(closer.toLowerCase());
    if (at !== -1) {
      hits.push("assistant-closer");
      highlights.push({
        start: at,
        end: at + closer.length,
        id: "assistant-voice",
      });
      break;
    }
  }
  let score = 0;
  if (hits.includes("assistant-opener")) score += 0.55;
  if (hits.includes("assistant-closer")) score += 0.45;
  return { score: Math.min(1, score), hits, highlights };
}

function discourseScore(
  text: string,
): { score: number; hits: string[] } {
  const hits: string[] = [];
  let weighted = 0;
  for (const rule of DISCOURSE_RES) {
    const matches = text.match(rule.re) ?? [];
    if (matches.length > 0) {
      hits.push(rule.id);
      weighted += rule.weight * Math.min(2, matches.length);
    }
  }
  return { score: Math.min(1, weighted / 1.6), hits };
}

function unicodeScore(text: string): { score: number; hits: string[] } {
  const hits: string[] = [];
  const invisible = text.match(INVISIBLE_RE) ?? [];
  const fancyDash = (text.match(/[—–]/g) ?? []).length;
  const curly = (text.match(/[“”‘’]/g) ?? []).length;
  if (invisible.length > 0) {
    hits.push("invisible-chars");
  }
  if (fancyDash + curly >= 8) {
    hits.push("typographic-polish");
  }
  const score = Math.min(
    1,
    invisible.length * 0.5 + Math.min(1, (fancyDash + curly) / 16) * 0.35,
  );
  return { score, hits };
}

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n));
}

function weightedAverage(
  parts: { score: number; weight: number }[],
): number {
  const total = parts.reduce((sum, part) => sum + part.weight, 0);
  if (total === 0) return 0;
  return parts.reduce((sum, part) => sum + part.score * part.weight, 0) / total;
}

export function analyze(text: string): DetectionResult {
  const raw = text.replace(/\r\n/g, "\n");
  const { latinWords, cjkChars, tokens } = countTokens(raw);
  const sentences = splitSentences(raw);
  const highlights: Highlight[] = [];

  const tells = findPhraseHits(raw, [
    ...EN_TELLS,
    ...ZH_TELLS,
    ...JA_TELLS,
    ...FR_TELLS,
  ]);
  highlights.push(...tells.highlights);

  const assistant = assistantScore(raw);
  highlights.push(...assistant.highlights);

  const markdown = markdownScore(raw);
  const rhythm = rhythmScore(sentences);
  const contractions = contractionScore(raw, latinWords);
  const discourse = discourseScore(raw);
  const unicode = unicodeScore(raw);

  const hasQuestion = QUESTION_RE.test(raw);
  const hasOwnership = OWNERSHIP_RE.test(raw);
  const opening = raw.slice(0, Math.min(raw.length, 280));
  const hasHumanWrapper =
    HUMAN_WRAPPER_RE.test(opening) && (hasQuestion || hasOwnership);

  const lengthScore = clamp01((tokens - 80) / 420);
  const noQuestionScore = hasQuestion ? 0 : tokens > 80 ? 0.85 : 0.4;
  const noOwnershipScore = hasOwnership ? 0 : tokens > 60 ? 0.7 : 0.25;

  const signals: Signal[] = [
    { id: "tell-phrases", score: tells.score, hits: tells.hits },
    { id: "assistant-voice", score: assistant.score, hits: assistant.hits },
    { id: "markdown-dump", score: markdown.score, hits: markdown.hits },
    { id: "uniform-rhythm", score: rhythm.score, hits: [] },
    {
      id: "low-contractions",
      score: latinWords >= 40 ? contractions : 0,
      hits: [],
    },
    {
      id: "no-question",
      score: noQuestionScore,
      hits: hasQuestion ? [] : ["no-question"],
    },
    {
      id: "no-ownership",
      score: noOwnershipScore,
      hits: hasOwnership ? [] : ["no-ownership"],
    },
    {
      id: "length-wall",
      score: lengthScore,
      hits: tokens >= 180 ? [`${tokens}-tokens`] : [],
    },
    { id: "fancy-unicode", score: unicode.score, hits: unicode.hits },
    {
      id: "discourse-scaffold",
      score: discourse.score,
      hits: discourse.hits,
    },
    {
      id: "human-wrapper",
      score: hasHumanWrapper ? 1 : 0,
      hits: hasHumanWrapper ? ["human-wrapper"] : [],
    },
  ];

  const aiScore = Math.round(
    100 *
      weightedAverage([
        { score: tells.score, weight: 1.3 },
        { score: assistant.score, weight: 1.1 },
        { score: discourse.score, weight: 0.9 },
        { score: rhythm.score, weight: 0.7 },
        { score: contractions, weight: latinWords >= 40 ? 0.6 : 0 },
        { score: unicode.score, weight: 0.4 },
        { score: markdown.score, weight: 0.5 },
      ]),
  );

  let grenade = weightedAverage([
    { score: lengthScore, weight: 1.1 },
    { score: markdown.score, weight: 1.2 },
    { score: assistant.score, weight: 1 },
    { score: noQuestionScore, weight: 1.1 },
    { score: noOwnershipScore, weight: 1 },
    { score: clamp01(aiScore / 100), weight: 0.8 },
  ]);

  if (hasHumanWrapper) grenade *= 0.35;
  if (hasQuestion && tokens < 140) grenade *= 0.55;
  if (tokens < 70) grenade *= 0.45;

  const grenadeScore = Math.round(100 * clamp01(grenade));
  const combinedScore = Math.round(aiScore * 0.45 + grenadeScore * 0.55);

  let verdict: Verdict;
  if (tokens < MIN_TOKENS) verdict = "too-short";
  else if (grenadeScore >= 62 && tokens >= 100) verdict = "grenade";
  else if (aiScore >= 68 && grenadeScore >= 48) verdict = "grenade";
  else if (aiScore >= 62) verdict = "likely-ai";
  else if (aiScore <= 32 && grenadeScore <= 40) verdict = "likely-human";
  else verdict = "uncertain";

  highlights.sort((a, b) => a.start - b.start);

  return {
    tokens,
    latinWords,
    cjkChars,
    sentenceCount: rhythm.sentenceCount,
    aiScore,
    grenadeScore,
    combinedScore,
    verdict,
    signals: signals.filter((signal) => signal.score >= 0.18 || signal.hits.length > 0),
    highlights,
    hasQuestion,
    hasOwnership,
    hasHumanWrapper,
  };
}

export { MIN_TOKENS };
