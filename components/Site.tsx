import { ChatThread } from "@/components/ChatThread";
import { Detector } from "@/components/Detector";
import { LanguageNav } from "@/components/LanguageNav";
import { LocaleLang } from "@/components/LocaleLang";
import { TypedTitle } from "@/components/TypedTitle";
import { copy as allCopy } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";

export function Site({ locale }: { locale: Locale }) {
  const copy = allCopy[locale];

  return (
    <div lang={copy.htmlLang}>
      <LocaleLang lang={copy.htmlLang} />
      <a className="skip-link" href="#detector">
        {copy.skipDetector}
      </a>
      <LanguageNav locale={locale} label={copy.languagesLabel} variant="bar" />

      <header className="container hero">
        <TypedTitle prefix={copy.prefix} words={copy.typedWords} />
        <span className="subtitle">{copy.subtitle}</span>
        <p className="lead">
          {copy.leadBefore}
          <em>{copy.leadEm}</em>
          {copy.leadAfter}
        </p>
      </header>

      <section className="container pair">
        <div className="section-left">
          <h2 className="section-title">
            <span className="mark no" aria-hidden="true">
              ×
            </span>
            {copy.dontTitle}
          </h2>
          <ChatThread messages={copy.dontMessages} />
        </div>
        <div className="section-right">
          <div className="prose dont">
            {copy.dontParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{copy.dontListLabel}</p>
            <ul>
              {copy.dontList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="closer">{copy.dontCloser}</p>
          </div>
        </div>
      </section>

      <section className="container pair">
        <div className="section-left">
          <h2 className="section-title">
            <span className="mark yes" aria-hidden="true">
              ✓
            </span>
            {copy.doTitle}
          </h2>
          <ChatThread messages={copy.doMessages} />
        </div>
        <div className="section-right">
          <div className="prose do">
            {copy.doParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{copy.doListLabel}</p>
            <ul>
              {copy.doList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.doCloser}</p>
          </div>
        </div>
      </section>

      <Detector locale={locale} />

      <footer className="site-footer">
        <div className="footer-inner">
          {copy.footer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {copy.inspired}{" "}
            <a href="https://nohello.net/" rel="noreferrer">
              {copy.nohello}
            </a>
            . {copy.detectorNote}
          </p>
          <p>{copy.languagesLabel}:</p>
          <LanguageNav locale={locale} label={copy.languagesLabel} variant="list" />
        </div>
      </footer>
    </div>
  );
}
