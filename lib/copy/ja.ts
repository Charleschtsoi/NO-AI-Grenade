import type { Copy } from "./types";

export const ja: Copy = {
  htmlLang: "ja",
  localeName: "日本語",
  docTitle: "no AI 手榴弾",
  docDescription:
    "読まずに AI の出力を投げないでください。先に自分で見て、本当の質問を書いてください。",
  brand: "no AI",
  prefix: "no AI",
  typedWords: ["手榴弾", "投下", "貼付け", "長文", "ポエム", "grenade", "dump", "slop"],
  subtitle: "読まずに AI の出力を投げないでください",
  leadBefore: "付箋に",
  leadEm: "「ChatGPT に聞いた」",
  leadAfter:
    "と書いてある実弾の手榴弾を、ピンが残っているか確認せずに渡すところを想像してみてください。",
  skipDetector: "検出へスキップ",
  sentHere:
    "ここに送られたなら、相手は読んでない AI の投下を受け取った。Slack のステータスやプロフィール用にリンクをコピーするか、投げる前に下書きを嗅いで。",
  copyLink: "このリンクをコピー",
  copiedLink: "コピーした",
  sniffDraft: "下書きを嗅ぐ",
  expandDump: "続きを見る",
  collapseDump: "閉じる",
  shortcutHint: "Ctrl / ⌘ Enter",
  pasteBlocked: "クリップボードを読めない。Ctrl / ⌘ V で貼って。",
  copyTemplate: "骨格をコピー",
  copiedTemplate: "コピーした",
  nextStepGrenadeTitle: "このまま送るな",
  nextStepGrenadeBody:
    "これは見積もりであり、証明ではない。自分で読んでから、人の一文で包め。空欄は自分で埋める。ここは書き直してくれない。",
  nextStepTemplate:
    "[モデル] に [話題] を聞いた。自分で読んだ。使えるの一句：[一文]。見てたのと同じ？",
  nextStepOkTitle: "送れそうなメッセージ",
  nextStepOkBody:
    "散らかって具体的ならそれでいい。読んで、本当の質問があるなら送っていい。",
  nextStepUncertainTitle: "読んでから聞け",
  nextStepUncertainBody:
    "信号が混ざる。読んでいないなら先に読め。読んだなら、送る前に本当の質問を足せ。",
  dontTitle: "こうしない",
  doTitle: "こうしてみる",
  dontMessages: [
    {
      name: "カイ",
      initials: "カ",
      color: "#c45c26",
      time: "14:15",
      text: "ちょっとこれ見て。すぐ終わるから",
    },
    {
      name: "カイ",
      initials: "カ",
      color: "#c45c26",
      time: "14:15",
      text: "",
      dump: {
        badge: "未読 · 847 語",
        lines: [
          "もちろんです！以下は、アーキテクチャの包括的な分析です。",
          "",
          "今日の急速に進化する状況において、スケーラビリティが極めて重要な役割を果たしていることは特筆に値します……",
          "",
          "1. はじめに",
          "2. 主要な考慮事項",
          "3. 実装ロードマップ",
          "4. 結論",
          "",
          "ご質問がございましたら、お気軽にお知らせください！",
        ],
      },
    },
    {
      name: "サム",
      initials: "サ",
      color: "#3b5b92",
      time: "14:41",
      text: "これ、自分で読んだ？",
    },
    {
      name: "カイ",
      initials: "カ",
      color: "#c45c26",
      time: "14:42",
      text: "えっと、AI が書いたからそのまま送っちゃった",
    },
  ],
  doMessages: [
    {
      name: "カイ",
      initials: "カ",
      color: "#c45c26",
      time: "14:15",
      text: "ChatGPT にタイムアウトのこと聞いた。自分で読んだよ。使えるの一句だけで、リトライがサーキットブレーカーと競合してるんじゃないか、と。先週見てたのと同じ？",
    },
    {
      name: "サム",
      initials: "サ",
      color: "#3b5b92",
      time: "14:16",
      text: "うん、それ。5 回で開くから、リトライ間隔を伸ばして。",
    },
    {
      name: "カイ",
      initials: "カ",
      color: "#c45c26",
      time: "14:16",
      text: "了解、直す。ありがとう",
    },
    {
      name: "サム",
      initials: "サ",
      color: "#3b5b92",
      time: "14:16",
      text: "おｋ",
    },
  ],
  dontParagraphs: [
    "カイは三十秒得した。サムは二十分かけて、誰も読んでいないモデル出力の壁の中から本当の質問を探した。",
    "こうする人は大概、親切のつもりだ。「時間を奪いたくないから全部渡す」。チャットは書庫じゃない。2026 年、読んでない AI の答えを投げるのは、新しい「いまいる？」だ。実弾の手榴弾を渡して、自分は立ち去っている。",
  ],
  dontListLabel: "同じ系統の手榴弾：",
  dontList: [
    "「gpt がこう言ってた」＋ 800 語",
    "自分で開いていない Copilot の PR",
    "小説を貼って「要約して」",
    "14 章の「包括的ガイド」を Slack に転送",
    "など",
  ],
  dontCloser: "投げる前に、自分で読め。",
  doParagraphs: [
    "AI を使っていい。そこが論点じゃない。先に自分で見て、使える一文を残して、本当の質問をすること。",
    "挨拶だけが素っ気ないなら、挨拶は残していい。聞きたいことは同じメッセージに書け。",
  ],
  doListLabel: "たとえば：",
  doList: [
    "「Claude がリトライ案を書いた。削った。200ms の間隔、これでいい？」",
    "「GPT の答えは流し読み。大半は無視。質問は一つ：まだ IE11 サポートしてる？」",
    "「AI がキャッシュの書き直しを勧めてきた。信じない。本当の制約は何？」",
  ],
  doCloser:
    "非同期でも動く。相手が席を外していても、1200 語の手榴弾を見て何を求められたか悩む代わりに、質問に答えられる。うまくやれば、みんな手は残る。",
  detectorEyebrow: "ピン確認",
  detectorTitle: "投げる前に、嗅いでみる",
  detectorLead:
    "下書きを貼る。これは嗅覚テストであって法廷ではない。決まり文句、アシスタント口調、Markdown の長文、そして本当に質問しているか。",
  detectorPrivacy:
    "ブラウザの中で動く。文章はアップロードも保存もされず、モデル API にも送らない。",
  placeholder: "今から送ろうとしていたメッセージを貼って……",
  analyze: "嗅ぐ",
  analyzing: "嗅いでいる…",
  paste: "貼り付け",
  sampleGrenade: "手榴弾の例",
  sampleHuman: "人が書いた例",
  clear: "消す",
  tokenLabel: (n) => `${n.toLocaleString()} トークン`,
  aiMeter: "AI っぽさ",
  grenadeMeter: "未読の投下",
  verdicts: {
    "too-short": {
      title: "短すぎて判断できない",
      body: "もう少し文章が要る。二行の呼びかけは手榴弾ではないし、嗅ぐ材料にも足りない。",
    },
    "likely-human": {
      title: "人の文章に見える",
      body: "散らかっていて、具体的で、何か聞いている。それはメッセージだ。送っていい。",
    },
    uncertain: {
      title: "信号が混ざる",
      body: "どちらにも転ぶ。読んでいないなら読め。読んだなら、本当の質問を足せ。",
    },
    "likely-ai": {
      title: "モデルっぽい",
      body: "口調が生成に見える。それ自体は罪ではない。本物の質問で包むか、使える一文を自分の言葉にせよ。",
    },
    grenade: {
      title: "それは手榴弾だ",
      body: "長く、モデル型で、本当に聞きたいことがない。人に投げるな。読んで、削って、質問しろ。",
    },
  },
  signalLabels: {
    "tell-phrases": {
      title: "AI の決まり文句",
      hint: "delve、tapestry、包括的、综上所述 — よくある指紋。",
    },
    "assistant-voice": {
      title: "アシスタント口調",
      hint: "冒頭が「Absolutely! / もちろんです」、末尾が「Let me know if / ご質問がございましたら」。",
    },
    "markdown-dump": {
      title: "Markdown の投下",
      hint: "見出し、十項目のリスト、コードフェンス。論文をチャットに見せかけている。",
    },
    "uniform-rhythm": {
      title: "リズムが揃いすぎ",
      hint: "文の長さがほぼ同じ。人は普通、揺れる。",
    },
    "low-contractions": {
      title: "短縮形がほぼない",
      hint: "do not / it is / we are ばかり。人は普通そう書かない。",
    },
    "no-question": {
      title: "質問がない",
      hint: "答えるべきことがない、ただの壁。",
    },
    "no-ownership": {
      title: "自分で見ていない",
      hint: "I read / I asked / 自分で読んだ がない。話しているのはモデルで、あなたではない。",
    },
    "length-wall": {
      title: "分量の壁",
      hint: "チャットは白書ではない。",
    },
    "fancy-unicode": {
      title: "見えない / 飾り文字",
      hint: "ゼロ幅文字や、人がめったに打たない組版。",
    },
    "discourse-scaffold": {
      title: "レトリックの足場",
      hint: "X だけでなく Y；whether you're A or B — モデルが寄りかかる骨格。",
    },
    "human-wrapper": {
      title: "人が包んでいる",
      hint: "短い人の質問のあとに引用。手榴弾の逆だ。",
    },
  },
  hitsLabel: "一致",
  highlightLegend: "ハイライトは決まり文句かアシスタント口調。",
  sampleGrenadeText: `もちろんです！以下は、アーキテクチャの包括的な分析です。

今日の急速に進化する状況において、スケーラビリティが分散システムの多面的な領域で極めて重要な役割を果たしていることは特筆に値します。さらに本概要では、堅牢でシームレスに統合された再試行方針が、プラットフォームの可能性を引き出す無数の方法を包括的に説明します。

## 1. はじめに
タイムアウトに関しては、全体最適のアプローチが不可欠です。経験豊富な技術者であっても、これから始める方であっても、障害モードの豊かな織物は、綿密な計画の必要性を強調します。

## 2. 主要な考慮事項
1. 指数バックオフ
2. サーキットブレーキング
3. 冪等性
4. 可観測性
5. キュー深度
6. リージョンフェイルオーバー
7. キャッシュスタンピード
8. テールレイテンシ
9. 負荷制限
10. グレースフルデグラデーション

これらの戦略は、進化し続けるレジリエンスへのパラダイムシフトを促進します。本質的にシステムは、失敗した呼び出しを再試行するだけでなく、変革的なユーザー体験を編成すべきです。

まとめると、お役に立てば幸いです。さらに深く掘り下げたい点があればお知らせください。ご質問がございましたら、お気軽にどうぞ。`,
  sampleHumanText: `ChatGPT にタイムアウトのこと聞いた。自分で読んだよ。

使えるの一句だけ：リトライがサーキットブレーカーと競合してる、だって。あとは全部つなぎ。

先週見てたのと同じ？よければ delay を 200ms にして、他は触らない。`,
  footer: [
    "半分は冗談だ（半分は）。ここに送った人に怒らないでほしい。",
    "ただ、誰かのステータスやプロフィールにこの URL があるなら、読んでない AI を投げるだけだと無視される覚悟をしておいて。",
  ],
  inspired: "着想元",
  nohello: "nohello.net",
  detectorNote: "検出はブラウザの中で動く。何もアップロードしない。",
  languagesLabel: "対応言語",
};
