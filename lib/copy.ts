import type { Locale } from "./i18n";
import type { SignalId, Verdict } from "./detect";

export type ChatLine = {
  name: string;
  initials: string;
  color: string;
  time: string;
  text: string;
  dump?: {
    badge: string;
    lines: string[];
  };
};

export type Copy = {
  htmlLang: string;
  localeName: string;
  docTitle: string;
  docDescription: string;
  brand: string;
  prefix: string;
  typedWords: string[];
  subtitle: string;
  leadBefore: string;
  leadEm: string;
  leadAfter: string;
  skipDetector: string;
  otherLocale: { href: string; label: string };
  dontTitle: string;
  doTitle: string;
  dontMessages: ChatLine[];
  doMessages: ChatLine[];
  dontParagraphs: string[];
  dontListLabel: string;
  dontList: string[];
  dontCloser: string;
  doParagraphs: string[];
  doListLabel: string;
  doList: string[];
  doCloser: string;
  detectorEyebrow: string;
  detectorTitle: string;
  detectorLead: string;
  detectorPrivacy: string;
  placeholder: string;
  analyze: string;
  analyzing: string;
  paste: string;
  sampleGrenade: string;
  sampleHuman: string;
  clear: string;
  tokenLabel: (n: number) => string;
  aiMeter: string;
  grenadeMeter: string;
  verdicts: Record<Verdict, { title: string; body: string }>;
  signalLabels: Record<SignalId, { title: string; hint: string }>;
  hitsLabel: string;
  highlightLegend: string;
  sampleGrenadeText: string;
  sampleHumanText: string;
  footer: string[];
  inspired: string;
  nohello: string;
  detectorNote: string;
  languagesLabel: string;
};

const EN_GRENADE_SAMPLE = `Absolutely! Here's a comprehensive analysis of your architecture.

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

In conclusion, I hope this helps! Let me know if you'd like me to dive deeper into any of these points. If you have any other questions, feel free to ask.`;

const ZH_GRENADE_SAMPLE = `当然可以！以下是对你系统架构的全面分析。

在当今快速发展的技术环境中，值得注意的是，可扩展性在分布式系统这一多维领域中发挥着至关重要的作用。接下来我们将深入探讨如何通过稳健、无缝集成的重试策略，全面赋能你的平台。

## 1. 引言
需要指出的是，面对超时问题，必须采取系统性、全方位的方法论。无论你是资深工程师还是刚刚入门，复杂的失败模式都提醒我们进行全面而细致的规划。

## 2. 关键考虑
1. 指数退避
2. 熔断
3. 幂等
4. 可观测性
5. 队列深度
6. 异地容灾
7. 缓存击穿
8. 长尾延迟
9. 过载保护
10. 优雅降级

综上所述，这些策略将助力组织实现韧性建设的范式升级。总而言之，系统不仅应当重试失败请求，而且应当编排卓越的用户体验。

希望对你有帮助！如果您有任何其他问题，欢迎继续提问。`;

const EN_HUMAN_SAMPLE = `hey — I asked ChatGPT about the timeout. I actually read it.

the one useful bit: it thinks our retry is racing the circuit breaker. everything else was filler.

does that match what you saw last week? if yes I'll bump the delay to 200ms and leave the rest alone.`;

const ZH_HUMAN_SAMPLE = `我问了 ChatGPT 超时的事，我自己看过了。

有用的就一句：它觉得我们的重试在和熔断抢跑。后面那一大段都可以忽略。

你上周看到的是这个吗？如果是，我把间隔改成 200ms，别的先不动。`;

export const copy: Record<Locale, Copy> = {
  en: {
    htmlLang: "en",
    localeName: "English",
    docTitle: "no AI grenade",
    docDescription:
      "Please don't throw unread AI at people. Read it first. Ask the actual question.",
    brand: "no AI",
    prefix: "no AI",
    typedWords: [
      "grenade",
      "dump",
      "paste",
      "wall",
      "slop",
      "essay",
      "手雷",
      "长文",
    ],
    subtitle: "please don't throw unread AI at people",
    leadBefore: "Imagine handing someone a live grenade with a sticky note that says ",
    leadEm: "“I asked ChatGPT”",
    leadAfter: " — without checking whether the pin is still in.",
    skipDetector: "Skip to the detector",
    otherLocale: { href: "/zh-cn", label: "简体中文" },
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
    sampleGrenadeText: EN_GRENADE_SAMPLE,
    sampleHumanText: EN_HUMAN_SAMPLE,
    footer: [
      "This is kinda only half serious (kinda) so please don't get mad at the person who sent you here.",
      "That said, if you see this site's URL in someone's status or bio, be prepared to be ignored if you only throw an unread AI dump.",
    ],
    inspired: "Inspired by",
    nohello: "nohello.net",
    detectorNote: "The detector stays in your browser. Nothing is uploaded.",
    languagesLabel: "This site is available in",
  },
  "zh-cn": {
    htmlLang: "zh-CN",
    localeName: "简体中文",
    docTitle: "no AI 手雷",
    docDescription:
      "请不要把没看过的 AI 回复丢给别人。先自己看一眼，再问真正的问题。",
    brand: "no AI",
    prefix: "no AI",
    typedWords: [
      "手雷",
      "长文",
      "粘贴",
      "堆砌",
      "水文",
      "grenade",
      "dump",
      "slop",
    ],
    subtitle: "请不要把没看过的 AI 回复丢给别人",
    leadBefore: "想象一下，你把一颗贴着",
    leadEm: "「我问了 ChatGPT」",
    leadAfter: "的手雷扔给同事，却没自己先看过引信还在不在。",
    skipDetector: "跳到检测器",
    otherLocale: { href: "/", label: "English" },
    dontTitle: "不要这样做",
    doTitle: "试着这样做",
    dontMessages: [
      {
        name: "阿凯",
        initials: "凯",
        color: "#c45c26",
        time: "下午 2:15",
        text: "你看一下这个呗，很快的",
      },
      {
        name: "阿凯",
        initials: "凯",
        color: "#c45c26",
        time: "下午 2:15",
        text: "",
        dump: {
          badge: "没看过 · 847 字",
          lines: [
            "当然可以！以下是对你系统架构的全面分析。",
            "",
            "在当今快速发展的技术环境中，值得注意的是，可扩展性发挥着至关重要的作用……",
            "",
            "1. 引言",
            "2. 关键考虑",
            "3. 实施路径",
            "4. 结论",
            "",
            "希望对你有帮助！如果您有任何其他问题，欢迎继续提问。",
          ],
        },
      },
      {
        name: "小陈",
        initials: "陈",
        color: "#3b5b92",
        time: "下午 2:41",
        text: "你自己看过吗",
      },
      {
        name: "阿凯",
        initials: "凯",
        color: "#c45c26",
        time: "下午 2:42",
        text: "呃 AI 写的，我就直接发过来了",
      },
    ],
    doMessages: [
      {
        name: "阿凯",
        initials: "凯",
        color: "#c45c26",
        time: "下午 2:15",
        text: "我问了 ChatGPT 超时的事，我自己看过了。有用的就一句：它觉得我们的重试在和熔断抢跑。你上周看到的是这个吗？",
      },
      {
        name: "小陈",
        initials: "陈",
        color: "#3b5b92",
        time: "下午 2:16",
        text: "对，就是这个。熔断 5 次就开 — 把重试间隔加大就行。",
      },
      {
        name: "阿凯",
        initials: "凯",
        color: "#c45c26",
        time: "下午 2:16",
        text: "好，我去改，谢谢",
      },
      {
        name: "小陈",
        initials: "陈",
        color: "#3b5b92",
        time: "下午 2:16",
        text: "嗯",
      },
    ],
    dontParagraphs: [
      "阿凯省了三十秒。小陈花了二十分钟，在一堵没人看过的模型输出里找真正的问题。",
      "这样做的人多半出于好意——「我不想浪费你的时间，所以全给你。」聊天不是文件柜。到了 2026 年，把没看过的 AI 回复丢过去，就是新的「在吗？」。你等于把一颗手雷塞给别人，然后自己走开。",
    ],
    dontListLabel: "同一类手雷还有：",
    dontList: [
      "「gpt 说的」+ 八百字",
      "自己没点开过的 Copilot PR",
      "先贴一部小说，再让对方「帮我总结」",
      "把十四节「全面指南」转发进群",
      "等等",
    ],
    dontCloser: "先看一眼，再扔出去。",
    doParagraphs: [
      "你还是可以用 AI。重点不是这个。重点是你先看，留下那句有用的，再问一个真正的问题。",
      "如果只问问题觉得太冲，寒暄可以留。把真正要问的事写在同一条消息里。",
    ],
    doListLabel: "比如：",
    doList: [
      "「Claude 起了个重试草稿，我删过一遍——200ms 这个间隔你看着对吗？」",
      "「GPT 的回答我扫了，大部分别看。问题就一句：我们还支持 IE11 吗？」",
      "「AI 建议重写缓存。我不信。真正的限制是什么？」",
    ],
    doCloser:
      "这样也适合异步。对方不在，回来仍然能回答问题，而不是对着一千二百字的手雷发呆，猜你到底要什么。做成这样，大家的手都还在。",
    detectorEyebrow: "引信检查",
    detectorTitle: "扔出去之前，先闻一下",
    detectorLead:
      "把草稿贴进来。这是嗅探，不是法庭：套话、助手口吻、Markdown 长文，以及你到底有没有问问题。",
    detectorPrivacy: "在你的浏览器里运行。文字不会上传、存储，也不会发给模型接口。",
    placeholder: "把你正要发出去的消息贴在这里……",
    analyze: "闻一下",
    analyzing: "在闻……",
    paste: "粘贴",
    sampleGrenade: "手雷样例",
    sampleHuman: "人写样例",
    clear: "清空",
    tokenLabel: (n) => `${n.toLocaleString()} 个词元`,
    aiMeter: "像不像 AI",
    grenadeMeter: "没看就丢",
    verdicts: {
      "too-short": {
        title: "太短，不好说",
        body: "再给一点文字。两行招呼不是手雷——也闻不出什么。",
      },
      "likely-human": {
        title: "像人写的",
        body: "乱、具体、还问了事情。这是消息。发出去吧。",
      },
      uncertain: {
        title: "信号混杂",
        body: "两边都像。你要是没看，就看一眼。看过了，就把真正的问题写上。",
      },
      "likely-ai": {
        title: "读起来像模型",
        body: "口吻像生成的。这不一定是罪——用你的话包一层问题，或者只留下那句有用的。",
      },
      grenade: {
        title: "这是一颗手雷",
        body: "又长，又像模型，还没有你真正要问的事。别扔给别人。先看，先砍，再问。",
      },
    },
    signalLabels: {
      "tell-phrases": {
        title: "AI 套话",
        hint: "delve、tapestry、comprehensive、综上所述——常见指纹。",
      },
      "assistant-voice": {
        title: "助手口吻",
        hint: "开头「Absolutely! / 当然可以」，结尾「Let me know if / 希望对你有帮助」。",
      },
      "markdown-dump": {
        title: "Markdown 长文",
        hint: "标题、十条列表、代码块——把论文塞进聊天。",
      },
      "uniform-rhythm": {
        title: "节奏过于整齐",
        hint: "句子差不多长。人写的通常会晃。",
      },
      "low-contractions": {
        title: "几乎不缩写",
        hint: "满篇 do not / it is / we are。人通常不会这样。",
      },
      "no-question": {
        title: "没有问题",
        hint: "一堵字，没有要对方回答的事。",
      },
      "no-ownership": {
        title: "你没看过",
        hint: "没有 I read / I asked / 我看了。在说话的是模型，不是你。",
      },
      "length-wall": {
        title: "字数墙",
        hint: "聊天不是白皮书。",
      },
      "fancy-unicode": {
        title: "隐形 / 花哨字符",
        hint: "零宽字符，或人很少手打的排版符号。",
      },
      "discourse-scaffold": {
        title: "修辞支架",
        hint: "不仅 X 而且 Y；whether you're A or B——模型爱用的骨架。",
      },
      "human-wrapper": {
        title: "你包过一层",
        hint: "先有一句人话，再引用。这正好不是手雷。",
      },
    },
    hitsLabel: "命中",
    highlightLegend: "高亮的是套话或助手口吻。",
    sampleGrenadeText: ZH_GRENADE_SAMPLE,
    sampleHumanText: ZH_HUMAN_SAMPLE,
    footer: [
      "这事没有那么严重（一定程度上），所以请不要对把你送来的人生气。",
      "也就是说，如果你在某人的状态或简介里看到这个网址，还只丢没看过的 AI 长文，请做好被无视的准备。",
    ],
    inspired: "灵感来自",
    nohello: "nohello.net",
    detectorNote: "检测器在你的浏览器里运行，什么都不会上传。",
    languagesLabel: "本站语言",
  },
};
