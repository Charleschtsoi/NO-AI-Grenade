import type { Copy } from "./types";

export const en: Copy = {
  htmlLang: "en",
  localeName: "English",
  docTitle: "no AI grenade",
  docDescription:
    "Please don't throw unread AI at people. Read it first. Ask the actual question.",
  brand: "no AI",
  prefix: "no AI",
  typedWords: ["grenade", "dump", "paste", "wall", "slop", "essay", "手雷", "長文"],
  subtitle: "please don't throw unread AI at people",
  leadBefore: "Imagine handing someone a live grenade with a sticky note that says ",
  leadEm: "“I asked ChatGPT”",
  leadAfter: " — without checking whether the pin is still in.",
  skipDetector: "Skip to the detector",
  dontTitle: "Don't do this",
  doTitle: "Instead try this",
  dontMessages: [
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "2:15 PM",
      text: "hey can you look at this real quick",
    },
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "2:15 PM",
      text: "",
      dump: {
        badge: "unreviewed · 847 words",
        lines: [
          "Absolutely! Here's a comprehensive analysis of your architecture.",
          "",
          "In today's rapidly evolving landscape, it is important to note that scalability plays a pivotal role…",
          "",
          "1. Introduction",
          "2. Key Considerations",
          "3. Implementation Roadmap",
          "4. Conclusion",
          "",
          "Let me know if you'd like me to dive deeper into any of these points!",
        ],
      },
    },
    {
      name: "Sam",
      initials: "S",
      color: "#3b5b92",
      time: "2:41 PM",
      text: "did you read this",
    },
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "2:42 PM",
      text: "uh the AI wrote it so I figured I'd just send it",
    },
  ],
  doMessages: [
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "2:15 PM",
      text: "hey — I asked ChatGPT about the timeout. I actually read it. The one useful bit: it thinks our retry is racing the circuit breaker. Does that match what you saw last week?",
    },
    {
      name: "Sam",
      initials: "S",
      color: "#3b5b92",
      time: "2:16 PM",
      text: "yes that's it. breaker opens at 5 failures — bump the retry delay.",
    },
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "2:16 PM",
      text: "on it, thanks",
    },
    {
      name: "Sam",
      initials: "S",
      color: "#3b5b92",
      time: "2:16 PM",
      text: "np",
    },
  ],
  dontParagraphs: [
    "Kai saved thirty seconds. Sam spent twenty minutes hunting for the actual question inside a wall of unreviewed model output.",
    "People who do this are usually trying to be helpful — “I don't want to waste your time, so here's everything.” Chat is not a filing cabinet. In 2026, dumping an unread AI answer is the new “hello, you there?” You just handed someone a live grenade and walked away.",
  ],
  dontListLabel: "Same family of grenades:",
  dontList: [
    "“gpt said this” + 800 words",
    "a Copilot PR you never opened",
    "“can you summarize” after pasting a novel",
    "forwarding a 14-section “comprehensive guide” into Slack",
    "etc.",
  ],
  dontCloser: "Read it before you throw it.",
  doParagraphs: [
    "You can still use AI. That's not the argument. The argument is that you look at it first, keep the useful sentence, and ask a real question.",
    "If a greeting alone feels abrupt, keep the greeting. Put the actual ask in the same message.",
  ],
  doListLabel: "For example:",
  doList: [
    "“Claude drafted this retry. I cut it down — does the 200ms delay look right to you?”",
    "“I skimmed the GPT answer. Ignore most of it. Question is: do we still support IE11?”",
    "“AI suggested rewriting the cache. I don't buy it. What's the actual constraint?”",
  ],
  doCloser:
    "That also works asynchronously. If they're away, they can answer the question instead of staring at a 1,200-word grenade and wondering what you actually needed. When it's done right, everyone keeps their hands.",
  detectorEyebrow: "Pin check",
  detectorTitle: "Before you throw it, sniff it",
  detectorLead:
    "Paste a draft. This is a sniff test — stylometry, assistant-voice, markdown dumps, and whether you actually asked a question. It is not a courtroom.",
  detectorPrivacy:
    "It runs in your browser. The text is not uploaded, stored, or sent to a model API.",
  placeholder: "Paste the message you were about to send…",
  analyze: "Sniff this",
  analyzing: "Sniffing…",
  paste: "Paste",
  sampleGrenade: "Sample grenade",
  sampleHuman: "Sample human",
  clear: "Clear",
  tokenLabel: (n) => `${n.toLocaleString()} token${n === 1 ? "" : "s"}`,
  aiMeter: "AI-looking",
  grenadeMeter: "Unread dump",
  verdicts: {
    "too-short": {
      title: "Too short to call",
      body: "Need a bit more text. A two-line ping isn't a grenade — and it isn't enough to sniff.",
    },
    "likely-human": {
      title: "Looks human",
      body: "Messy, specific, and it asks something. That's a message. Send it.",
    },
    uncertain: {
      title: "Mixed signals",
      body: "Could go either way. If you didn't read it, read it. If you did, add the actual question.",
    },
    "likely-ai": {
      title: "Reads like a model",
      body: "The voice looks generated. That isn't automatically a crime — wrap a real question around it, or rewrite the useful bit in your own words.",
    },
    grenade: {
      title: "That's a grenade",
      body: "Long, model-shaped, and missing your actual ask. Don't throw this at someone. Read it, cut it, ask the question.",
    },
  },
  signalLabels: {
    "tell-phrases": {
      title: "AI tell phrases",
      hint: "delve, tapestry, comprehensive, 综上所述 — the usual fingerprints.",
    },
    "assistant-voice": {
      title: "Assistant voice",
      hint: "Opens with Absolutely! / 当然可以, closes with Let me know if / 希望对你有帮助.",
    },
    "markdown-dump": {
      title: "Markdown dump",
      hint: "Headings, ten-item lists, code fences — an essay pretending to be a chat.",
    },
    "uniform-rhythm": {
      title: "Uniform rhythm",
      hint: "Sentences about the same length. Humans usually wobble.",
    },
    "low-contractions": {
      title: "Almost no contractions",
      hint: "do not / it is / we are, all day. People usually don't.",
    },
    "no-question": {
      title: "No question",
      hint: "A wall of text with nothing to answer.",
    },
    "no-ownership": {
      title: "You didn't look at it",
      hint: "No I read / I asked / 我看了. The model is speaking. You aren't.",
    },
    "length-wall": {
      title: "Length wall",
      hint: "Chat is not a white paper.",
    },
    "fancy-unicode": {
      title: "Invisible / fancy characters",
      hint: "Zero-width chars or heavy typographic polish that people rarely type.",
    },
    "discourse-scaffold": {
      title: "Rhetorical scaffold",
      hint: "not just X but Y; whether you're A or B — the outline a model leans on.",
    },
    "human-wrapper": {
      title: "You wrapped it",
      hint: "A short human ask around a quote. That's the opposite of a grenade.",
    },
  },
  hitsLabel: "Matched",
  highlightLegend: "Highlighted spans are tell phrases or assistant-voice.",
  sampleGrenadeText: `Absolutely! Here's a comprehensive analysis of your architecture.

In today's rapidly evolving landscape, it is important to note that scalability plays a pivotal role in the multifaceted realm of distributed systems. Furthermore, this cutting-edge overview will delve into the myriad ways in which a robust, seamlessly integrated retry policy can unlock the potential of your platform.

## 1. Introduction
When it comes to timeouts, a holistic approach is essential. Whether you're a seasoned engineer or just getting started, the rich tapestry of failure modes underscores the need for meticulous planning.

## 2. Key Considerations
1. Exponential backoff
2. Circuit breaking
3. Idempotency
4. Observability
5. Queue depth
6. Regional failover
7. Cache stampedes
8. Tail latency
9. Load shedding
10. Graceful degradation

Moreover, these strategies foster a paradigm shift toward ever-evolving resilience. At its core, the system should not only retry failed calls, but rather orchestrate a game-changing user experience.

In conclusion, I hope this helps! Let me know if you'd like me to dive deeper into any of these points. If you have any other questions, feel free to ask.`,
  sampleHumanText: `hey — I asked ChatGPT about the timeout. I actually read it.

the one useful bit: it thinks our retry is racing the circuit breaker. everything else was filler.

does that match what you saw last week? if yes I'll bump the delay to 200ms and leave the rest alone.`,
  footer: [
    "This is kinda only half serious (kinda) so please don't get mad at the person who sent you here.",
    "That said, if you see this site's URL in someone's status or bio, be prepared to be ignored if you only throw an unread AI dump.",
  ],
  inspired: "Inspired by",
  nohello: "nohello.net",
  detectorNote: "The detector stays in your browser. Nothing is uploaded.",
  languagesLabel: "This site is available in",
};
