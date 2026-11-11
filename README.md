# no AI grenade

Live site: [https://noaigrenade.vercel.app/](https://noaigrenade.vercel.app/)

A [nohello.net](https://nohello.net/)-style page for the other thing that wastes everyone’s time: throwing unread AI output at people.

Please don’t send an AI grenade without looking at it first. Use the model, then keep the useful sentence, then ask the actual question.

The detector on the page is a sniff test that runs in your browser. Nothing is uploaded.

## Languages

- [English](https://noaigrenade.vercel.app/)
- [简体中文](https://noaigrenade.vercel.app/zh-cn)
- [繁體中文](https://noaigrenade.vercel.app/zh-tw)
- [日本語](https://noaigrenade.vercel.app/ja)
- [Français](https://noaigrenade.vercel.app/fr)

## Improve this page

PRs are welcome. Tone, examples, translations, detector tells — if you use this site and it is missing a language or a fingerprint, send a change.

Typical additions:

1. Copy: add `lib/copy/<locale>.ts` and register it in `lib/copy/index.ts` and `lib/i18n.ts`.
2. Detector: add tell-phrases in `lib/detect.ts` if the new language has assistant-voice tics the sniff test should catch.
3. Keep the manifesto sounding like a person. The grenade *samples* should sound like a model; the rest of the page should not.

```bash
npm install
npm test
npm run lint
npm run dev
```

## License

[MIT](LICENSE)
