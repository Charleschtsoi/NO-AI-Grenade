import type { Copy } from "./types";

export const fr: Copy = {
  htmlLang: "fr",
  localeName: "Français",
  docTitle: "no AI grenade",
  docDescription:
    "N'envoyez pas d'IA non relue aux gens. Lisez d'abord. Posez la vraie question.",
  brand: "no AI",
  prefix: "no AI",
  typedWords: ["grenade", "pavé", "collage", "mur", "slop", "dissert", "手雷", "長文"],
  subtitle: "s'il te plaît, n'envoie pas d'IA non relue aux gens",
  leadBefore: "Imagine tendre à quelqu'un une grenade réelle avec un post-it ",
  leadEm: "« J'ai demandé à ChatGPT »",
  leadAfter: " — sans vérifier si la goupille est encore là.",
  skipDetector: "Aller au détecteur",
  dontTitle: "Ne fais pas ça",
  doTitle: "Essaie plutôt ça",
  dontMessages: [
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "14:15",
      text: "hey tu peux jeter un œil vite fait",
    },
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "14:15",
      text: "",
      dump: {
        badge: "non relu · 847 mots",
        lines: [
          "Bien entendu ! Voici une analyse complète de votre architecture.",
          "",
          "Dans le paysage actuel en rapide évolution, il est important de noter que la scalabilité joue un rôle essentiel…",
          "",
          "1. Introduction",
          "2. Points clés",
          "3. Feuille de route",
          "4. Conclusion",
          "",
          "N'hésitez pas si vous souhaitez que je développe l'un de ces points !",
        ],
      },
    },
    {
      name: "Sam",
      initials: "S",
      color: "#3b5b92",
      time: "14:41",
      text: "t'as lu ça",
    },
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "14:42",
      text: "euh c'est l'IA qui l'a écrit alors j'ai envoyé comme ça",
    },
  ],
  doMessages: [
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "14:15",
      text: "hey — j'ai demandé à ChatGPT pour le timeout. Je l'ai vraiment lu. Le seul truc utile : il pense que notre retry course le disjoncteur. C'est ce que t'avais vu la semaine dernière ?",
    },
    {
      name: "Sam",
      initials: "S",
      color: "#3b5b92",
      time: "14:16",
      text: "oui c'est ça. ça s'ouvre à 5 échecs — augmente le délai.",
    },
    {
      name: "Kai",
      initials: "K",
      color: "#c45c26",
      time: "14:16",
      text: "je m'en occupe, merci",
    },
    {
      name: "Sam",
      initials: "S",
      color: "#3b5b92",
      time: "14:16",
      text: "np",
    },
  ],
  dontParagraphs: [
    "Kai a gagné trente secondes. Sam a passé vingt minutes à chercher la vraie question dans un mur de sortie de modèle non relue.",
    "Les gens qui font ça veulent souvent bien faire — « je veux pas te faire perdre de temps, donc voilà tout ». Le chat n'est pas une armoire à dossiers. En 2026, coller une réponse d'IA non relue, c'est le nouveau « t'es là ? ». Tu viens de tendre une grenade réelle, et tu t'en vas.",
  ],
  dontListLabel: "Même famille de grenades :",
  dontList: [
    "« gpt a dit ça » + 800 mots",
    "une PR Copilot que tu n'as jamais ouverte",
    "« tu peux résumer » après avoir collé un roman",
    "transférer un « guide complet » en 14 sections dans Slack",
    "etc.",
  ],
  dontCloser: "Lis-la avant de la jeter.",
  doParagraphs: [
    "Tu peux toujours utiliser l'IA. C'est pas le débat. Le débat, c'est que tu regardes d'abord, tu gardes la phrase utile, et tu poses une vraie question.",
    "Si un salut tout seul te paraît brusque, garde le salut. Mets la vraie demande dans le même message.",
  ],
  doListLabel: "Par exemple :",
  doList: [
    "« Claude a rédigé ce retry. J'ai coupé — le délai de 200 ms te va ? »",
    "« J'ai survolé la réponse GPT. Ignore le reste. La question : on gère encore IE11 ? »",
    "« L'IA veut réécrire le cache. J'y crois pas. C'est quoi la vraie contrainte ? »",
  ],
  doCloser:
    "Ça marche aussi en asynchrone. S'ils sont absents, ils peuvent répondre à la question au lieu de fixer une grenade de 1 200 mots en se demandant ce que tu voulais. Quand c'est bien fait, tout le monde garde ses mains.",
  detectorEyebrow: "Contrôle de goupille",
  detectorTitle: "Avant de la jeter, renifle-la",
  detectorLead:
    "Colle un brouillon. C'est un test d'odeur, pas un tribunal : tics de style, voix d'assistant, pavés Markdown, et si tu as vraiment posé une question.",
  detectorPrivacy:
    "Ça tourne dans ton navigateur. Le texte n'est ni envoyé, ni stocké, ni transmis à une API de modèle.",
  placeholder: "Colle le message que tu allais envoyer…",
  analyze: "Renifler",
  analyzing: "Reniflage…",
  paste: "Coller",
  sampleGrenade: "Exemple de grenade",
  sampleHuman: "Exemple humain",
  clear: "Effacer",
  tokenLabel: (n) => `${n.toLocaleString()} jeton${n === 1 ? "" : "s"}`,
  aiMeter: "Air d'IA",
  grenadeMeter: "Pavé non lu",
  verdicts: {
    "too-short": {
      title: "Trop court pour dire",
      body: "Il faut un peu plus de texte. Un ping de deux lignes n'est pas une grenade — et ça ne suffit pas à renifler.",
    },
    "likely-human": {
      title: "Ça a l'air humain",
      body: "Bordélique, précis, et ça demande quelque chose. C'est un message. Envoie.",
    },
    uncertain: {
      title: "Signaux mêlés",
      body: "Ça peut aller dans les deux sens. Si tu n'as pas lu, lis. Si tu as lu, ajoute la vraie question.",
    },
    "likely-ai": {
      title: "Ça sonne modèle",
      body: "La voix a l'air générée. Ce n'est pas un crime en soi — entoure d'une vraie question, ou réécris le bout utile avec tes mots.",
    },
    grenade: {
      title: "C'est une grenade",
      body: "Long, en forme de modèle, et sans ta vraie demande. Ne jette pas ça à quelqu'un. Lis, coupe, pose la question.",
    },
  },
  signalLabels: {
    "tell-phrases": {
      title: "Tics d'IA",
      hint: "delve, tapestry, comprehensive, 综上所述 — les empreintes habituelles.",
    },
    "assistant-voice": {
      title: "Voix d'assistant",
      hint: "S'ouvre sur Absolutely! / Bien entendu, se ferme sur Let me know if / N'hésitez pas.",
    },
    "markdown-dump": {
      title: "Pavé Markdown",
      hint: "Titres, listes de dix, blocs de code — un mémoire déguisé en chat.",
    },
    "uniform-rhythm": {
      title: "Rythme trop régulier",
      hint: "Des phrases à peu près de la même longueur. Les humains vacillent.",
    },
    "low-contractions": {
      title: "Presque pas de contractions",
      hint: "do not / it is / we are toute la journée. Les gens ne font généralement pas ça.",
    },
    "no-question": {
      title: "Pas de question",
      hint: "Un mur de texte, rien à quoi répondre.",
    },
    "no-ownership": {
      title: "Tu n'as pas regardé",
      hint: "Pas de I read / j'ai lu / 我看了. C'est le modèle qui parle. Pas toi.",
    },
    "length-wall": {
      title: "Mur de longueur",
      hint: "Le chat n'est pas un livre blanc.",
    },
    "fancy-unicode": {
      title: "Caractères invisibles / chic",
      hint: "Caractères de largeur nulle, ou une typo trop soignée pour du tapé à la main.",
    },
    "discourse-scaffold": {
      title: "Échafaudage rhétorique",
      hint: "not just X but Y ; whether you're A or B — le plan sur lequel un modèle s'appuie.",
    },
    "human-wrapper": {
      title: "Tu as emballé",
      hint: "Une courte demande humaine autour d'une citation. C'est l'inverse d'une grenade.",
    },
  },
  hitsLabel: "Correspondances",
  highlightLegend: "Les passages surlignés sont des tics ou de la voix d'assistant.",
  sampleGrenadeText: `Bien entendu ! Voici une analyse complète de votre architecture.

Dans le paysage actuel en rapide évolution, il est important de noter que la scalabilité joue un rôle essentiel dans le domaine aux multiples facettes des systèmes distribués. Par ailleurs, cette vue d'ensemble de pointe va explorer les innombrables façons dont une politique de retry robuste et intégrée de manière transparente peut libérer le potentiel de votre plateforme.

## 1. Introduction
Lorsqu'il s'agit de timeouts, une approche holistique est indispensable. Que vous soyez un ingénieur chevronné ou que vous débutiez, la riche tapisserie des modes de défaillance souligne le besoin d'une planification méticuleuse.

## 2. Points clés
1. Backoff exponentiel
2. Disjoncteur
3. Idempotence
4. Observabilité
5. Profondeur de file
6. Basculement régional
7. Cache stampedes
8. Latence de queue
9. Délestage
10. Dégradation gracieuse

De plus, ces stratégies favorisent un changement de paradigme vers une résilience en constante évolution. Au fond, le système ne devrait pas seulement réessayer les appels en échec, mais plutôt orchestrer une expérience utilisateur transformatrice.

En conclusion, j'espère que cela vous aide ! N'hésitez pas si vous souhaitez que je développe l'un de ces points. Si vous avez d'autres questions, n'hésitez pas à demander.`,
  sampleHumanText: `hey — j'ai demandé à ChatGPT pour le timeout. Je l'ai vraiment lu.

le seul truc utile : il pense que notre retry course le disjoncteur. le reste c'était du remplissage.

c'est ce que t'avais vu la semaine dernière ? si oui je passe le délai à 200 ms et je touche à rien d'autre.`,
  footer: [
    "C'est à moitié sérieux (à moitié) donc ne t'énerve pas contre la personne qui t'a envoyé ici.",
    "Cela dit, si tu vois l'URL de ce site dans un statut ou une bio, sois prêt à être ignoré si tu te contentes de jeter un pavé d'IA non relu.",
  ],
  inspired: "Inspiré par",
  nohello: "nohello.net",
  detectorNote: "Le détecteur reste dans ton navigateur. Rien n'est envoyé.",
  languagesLabel: "Ce site existe en",
};
