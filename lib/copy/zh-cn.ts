import type { Copy } from "./types";

export const zhCn: Copy = {
  htmlLang: "zh-CN",
  localeName: "简体中文",
  docTitle: "no AI 手雷",
  docDescription: "请不要把没看过的 AI 回复丢给别人。先自己看一眼，再问真正的问题。",
  brand: "no AI",
  prefix: "no AI",
  typedWords: ["手雷", "长文", "粘贴", "堆砌", "水文", "grenade", "dump", "slop"],
  subtitle: "请不要把没看过的 AI 回复丢给别人",
  leadBefore: "想象一下，你把一颗贴着",
  leadEm: "「我问了 ChatGPT」",
  leadAfter: "的手雷扔给同事，却没自己先看过引信还在不在。",
  skipDetector: "跳到检测器",
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
  sampleGrenadeText: `当然可以！以下是对你系统架构的全面分析。

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

希望对你有帮助！如果您有任何其他问题，欢迎继续提问。`,
  sampleHumanText: `我问了 ChatGPT 超时的事，我自己看过了。

有用的就一句：它觉得我们的重试在和熔断抢跑。后面那一大段都可以忽略。

你上周看到的是这个吗？如果是，我把间隔改成 200ms，别的先不动。`,
  footer: [
    "这事没有那么严重（一定程度上），所以请不要对把你送来的人生气。",
    "也就是说，如果你在某人的状态或简介里看到这个网址，还只丢没看过的 AI 长文，请做好被无视的准备。",
  ],
  inspired: "灵感来自",
  nohello: "nohello.net",
  detectorNote: "检测器在你的浏览器里运行，什么都不会上传。",
  languagesLabel: "本站语言",
};
