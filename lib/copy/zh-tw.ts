import type { Copy } from "./types";

export const zhTw: Copy = {
  htmlLang: "zh-TW",
  localeName: "繁體中文",
  docTitle: "no AI 手雷",
  docDescription: "請不要把沒看過的 AI 回覆丟給別人。先自己看一眼，再問真正的問題。",
  brand: "no AI",
  prefix: "no AI",
  typedWords: ["手雷", "長文", "貼上", "堆砌", "水文", "grenade", "dump", "slop"],
  subtitle: "請不要把沒看過的 AI 回覆丟給別人",
  leadBefore: "想像一下，你把一顆貼著",
  leadEm: "「我問了 ChatGPT」",
  leadAfter: "的手雷扔給同事，卻沒自己先看過引信還在不在。",
  skipDetector: "跳到偵測器",
  sentHere:
    "如果有人把你送到這兒，多半是剛挨了一記沒看過的 AI 長文。把連結拷進 Slack 狀態或簡介——或者先聞一下草稿，再決定扔不扔。",
  copyLink: "複製本頁連結",
  copiedLink: "已複製",
  sniffDraft: "去聞草稿",
  expandDump: "展開全文",
  collapseDump: "收合",
  shortcutHint: "Ctrl / ⌘ Enter",
  pasteBlocked: "這裡沒法讀剪貼簿——用 Ctrl / ⌘ V 貼上。",
  copyTemplate: "複製骨架",
  copiedTemplate: "已複製",
  nextStepGrenadeTitle: "別原樣發出去",
  nextStepGrenadeBody:
    "這是估計，不是證據。你自己看過，再用一句人話包一層。空要你填——這裡不會替你改寫。",
  nextStepTemplate:
    "我問了 [模型] 關於 [題目]。我自己看過了。有用的就一句：[一句話]。你覺得對得上嗎？",
  nextStepOkTitle: "這像能發的訊息",
  nextStepOkBody: "亂一點、具體一點沒問題。你看過、還問了真事，就發出去。",
  nextStepUncertainTitle: "先看，再問",
  nextStepUncertainBody:
    "訊號混雜。沒看就先看。看過了，把真正的問題寫上再發。",
  dontTitle: "不要這樣做",
  doTitle: "試著這樣做",
  dontMessages: [
    {
      name: "阿凱",
      initials: "凱",
      color: "#c45c26",
      time: "下午 2:15",
      text: "你看一下這個呗，很快的",
    },
    {
      name: "阿凱",
      initials: "凱",
      color: "#c45c26",
      time: "下午 2:15",
      text: "",
      dump: {
        badge: "沒看過 · 847 字",
        lines: [
          "當然可以！以下是對你系統架構的全面分析。",
          "",
          "在當今快速發展的技術環境中，值得注意的是，可擴展性發揮著至關重要的作用……",
          "",
          "1. 引言",
          "2. 關鍵考量",
          "3. 實施路徑",
          "4. 結論",
          "",
          "希望對你有幫助！如果您有任何其他問題，歡迎繼續提問。",
        ],
      },
    },
    {
      name: "小陳",
      initials: "陳",
      color: "#3b5b92",
      time: "下午 2:41",
      text: "你自己看過嗎",
    },
    {
      name: "阿凱",
      initials: "凱",
      color: "#c45c26",
      time: "下午 2:42",
      text: "呃 AI 寫的，我就直接發過來了",
    },
  ],
  doMessages: [
    {
      name: "阿凱",
      initials: "凱",
      color: "#c45c26",
      time: "下午 2:15",
      text: "我問了 ChatGPT 超時的事，我自己看過了。有用的就一句：它覺得我們的重試在和熔斷搶跑。你上週看到的是這個嗎？",
    },
    {
      name: "小陳",
      initials: "陳",
      color: "#3b5b92",
      time: "下午 2:16",
      text: "對，就是這個。熔斷 5 次就開 — 把重試間隔加大就行。",
    },
    {
      name: "阿凱",
      initials: "凱",
      color: "#c45c26",
      time: "下午 2:16",
      text: "好，我去改，謝謝",
    },
    {
      name: "小陳",
      initials: "陳",
      color: "#3b5b92",
      time: "下午 2:16",
      text: "嗯",
    },
  ],
  dontParagraphs: [
    "阿凱省了三十秒。小陳花了二十分鐘，在一堵沒人看過的模型輸出裡找真正的問題。",
    "這樣做的人多半出於好意——「我不想浪費你的時間，所以全給你。」聊天不是檔案櫃。到了 2026 年，把沒看過的 AI 回覆丟過去，就是新的「在嗎？」。你等於把一顆手雷塞給別人，然後自己走開。",
  ],
  dontListLabel: "同一類手雷還有：",
  dontList: [
    "「gpt 說的」+ 八百字",
    "自己沒點開過的 Copilot PR",
    "先貼一部小說，再讓對方「幫我總結」",
    "把十四節「全面指南」轉發進群",
    "等等",
  ],
  dontCloser: "先看一眼，再扔出去。",
  doParagraphs: [
    "你還是可以用 AI。重點不是這個。重點是你先看，留下那句有用的，再問一個真正的問題。",
    "如果只問問題覺得太衝，寒暄可以留。把真正要問的事寫在同一則訊息裡。",
  ],
  doListLabel: "比如：",
  doList: [
    "「Claude 起了個重試草稿，我刪過一遍——200ms 這個間隔你看著對嗎？」",
    "「GPT 的回答我掃了，大部分別看。問題就一句：我們還支援 IE11 嗎？」",
    "「AI 建議重寫快取。我不信。真正的限制是什麼？」",
  ],
  doCloser:
    "這樣也適合非同步。對方不在，回來仍然能回答問題，而不是對著一千二百字的手雷發呆，猜你到底要什麼。做成這樣，大家的手都還在。",
  detectorEyebrow: "引信檢查",
  detectorTitle: "扔出去之前，先聞一下",
  detectorLead:
    "把草稿貼進來。這是嗅探，不是法庭：套話、助手口吻、Markdown 長文，以及你到底有沒有問問題。",
  detectorPrivacy: "在你的瀏覽器裡執行。文字不會上傳、儲存，也不會發給模型介面。",
  placeholder: "把你正要發出去的訊息貼在這裡……",
  analyze: "聞一下",
  analyzing: "在聞……",
  paste: "貼上",
  sampleGrenade: "手雷樣例",
  sampleHuman: "人寫樣例",
  clear: "清空",
  tokenLabel: (n) => `${n.toLocaleString()} 個詞元`,
  aiMeter: "像不像 AI",
  grenadeMeter: "沒看就丟",
  verdicts: {
    "too-short": {
      title: "太短，不好說",
      body: "再給一點文字。兩行招呼不是手雷——也聞不出什麼。",
    },
    "likely-human": {
      title: "像人寫的",
      body: "亂、具體、還問了事情。這是訊息。發出去吧。",
    },
    uncertain: {
      title: "訊號混雜",
      body: "兩邊都像。你要是沒看，就看一眼。看過了，就把真正的問題寫上。",
    },
    "likely-ai": {
      title: "讀起來像模型",
      body: "口吻像生成的。這不一定是罪——用你的話包一層問題，或者只留下那句有用的。",
    },
    grenade: {
      title: "這是一顆手雷",
      body: "又長，又像模型，還沒有你真正要問的事。別扔給別人。先看，先砍，再問。",
    },
  },
  signalLabels: {
    "tell-phrases": {
      title: "AI 套話",
      hint: "delve、tapestry、comprehensive、綜上所述——常見指紋。",
    },
    "assistant-voice": {
      title: "助手口吻",
      hint: "開頭「Absolutely! / 當然可以」，結尾「Let me know if / 希望對你有幫助」。",
    },
    "markdown-dump": {
      title: "Markdown 長文",
      hint: "標題、十條列表、程式碼區塊——把論文塞進聊天。",
    },
    "uniform-rhythm": {
      title: "節奏過於整齊",
      hint: "句子差不多長。人寫的通常會晃。",
    },
    "low-contractions": {
      title: "幾乎不縮寫",
      hint: "滿篇 do not / it is / we are。人通常不會這樣。",
    },
    "no-question": {
      title: "沒有問題",
      hint: "一堵字，沒有要對方回答的事。",
    },
    "no-ownership": {
      title: "你沒看過",
      hint: "沒有 I read / I asked / 我看了。在說話的是模型，不是你。",
    },
    "length-wall": {
      title: "字數牆",
      hint: "聊天不是白皮書。",
    },
    "fancy-unicode": {
      title: "隱形 / 花俏字元",
      hint: "零寬字元，或人很少手打的排版符號。",
    },
    "discourse-scaffold": {
      title: "修辭支架",
      hint: "不僅 X 而且 Y；whether you're A or B——模型愛用的骨架。",
    },
    "human-wrapper": {
      title: "你包過一層",
      hint: "先有一句人話，再引用。這正好不是手雷。",
    },
  },
  hitsLabel: "命中",
  highlightLegend: "高亮的是套話或助手口吻。",
  sampleGrenadeText: `當然可以！以下是對你系統架構的全面分析。

在當今快速發展的技術環境中，值得注意的是，可擴展性在分散式系統這一多維領域中發揮著至關重要的作用。接下來我們將深入探討如何透過穩健、無縫整合的重試策略，全面賦能你的平台。

## 1. 引言
需要指出的是，面對超時問題，必須採取系統性、全方位的方法論。無論你是資深工程師還是剛剛入門，複雜的失敗模式都提醒我們進行全面而細緻的規劃。

## 2. 關鍵考量
1. 指數退避
2. 熔斷
3. 冪等
4. 可觀測性
5. 佇列深度
6. 異地容災
7. 快取擊穿
8. 長尾延遲
9. 過載保護
10. 優雅降級

綜上所述，這些策略將助力組織實現韌性建設的範式升級。總而言之，系統不僅應當重試失敗請求，而且應當編排卓越的使用者體驗。

希望對你有幫助！如果您有任何其他問題，歡迎繼續提問。`,
  sampleHumanText: `我問了 ChatGPT 超時的事，我自己看過了。

有用的就一句：它覺得我們的重試在和熔斷搶跑。後面那一大段都可以忽略。

你上週看到的是這個嗎？如果是，我把間隔改成 200ms，別的先不動。`,
  footer: [
    "這事沒有那麼嚴重（一定程度上），所以請不要對把你送來的人生氣。",
    "也就是說，如果你在某人的狀態或簡介裡看到這個網址，還只丟沒看過的 AI 長文，請做好被無視的準備。",
  ],
  inspired: "靈感來自",
  nohello: "nohello.net",
  detectorNote: "偵測器在你的瀏覽器裡執行，什麼都不會上傳。",
  languagesLabel: "本站語言",
};
