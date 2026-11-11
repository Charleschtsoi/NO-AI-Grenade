"use client";

import { useMemo, useRef, useState } from "react";
import { copyText } from "@/lib/clipboard";
import { copy as allCopy } from "@/lib/copy";
import { analyze, countTokens, type DetectionResult } from "@/lib/detect";
import type { Locale } from "@/lib/i18n";
import { nextStepKind } from "@/lib/next-step";

function Meter({
  label,
  value,
  danger,
}: {
  label: string;
  value: number;
  danger?: boolean;
}) {
  return (
    <div>
      <div className="meter-label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className={`track${danger ? " danger" : ""}`}>
        <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
}

function Highlighted({
  text,
  result,
}: {
  text: string;
  result: DetectionResult;
}) {
  if (result.highlights.length === 0) {
    return <>{text}</>;
  }

  const ranges = mergeRanges(result.highlights);
  const parts: { text: string; mark: boolean }[] = [];
  let cursor = 0;
  for (const range of ranges) {
    if (range.start > cursor) {
      parts.push({ text: text.slice(cursor, range.start), mark: false });
    }
    parts.push({ text: text.slice(range.start, range.end), mark: true });
    cursor = range.end;
  }
  if (cursor < text.length) {
    parts.push({ text: text.slice(cursor), mark: false });
  }

  return (
    <>
      {parts.map((part, index) =>
        part.mark ? <mark key={index}>{part.text}</mark> : <span key={index}>{part.text}</span>,
      )}
    </>
  );
}

function mergeRanges(highlights: DetectionResult["highlights"]) {
  const sorted = [...highlights].sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [];
  for (const range of sorted) {
    const last = merged[merged.length - 1];
    if (!last || range.start > last.end) {
      merged.push({ start: range.start, end: range.end });
    } else {
      last.end = Math.max(last.end, range.end);
    }
  }
  return merged;
}

export function Detector({ locale }: { locale: Locale }) {
  const copy = allCopy[locale];
  const [text, setText] = useState("");
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [pasteError, setPasteError] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const tokens = useMemo(() => countTokens(text).tokens, [text]);

  async function run() {
    setBusy(true);
    setPasteError(false);
    await new Promise((resolve) => window.setTimeout(resolve, 30));
    setResult(analyze(text));
    setBusy(false);
    window.setTimeout(() => resultRef.current?.focus(), 0);
  }

  async function pasteFromClipboard() {
    try {
      const pasted = await navigator.clipboard.readText();
      setText(pasted);
      setResult(null);
      setPasteError(false);
    } catch {
      setPasteError(true);
    }
  }

  async function copyTemplate() {
    const ok = await copyText(copy.nextStepTemplate);
    if (ok) {
      setCopiedTemplate(true);
      window.setTimeout(() => setCopiedTemplate(false), 2000);
    }
  }

  const verdict = result ? copy.verdicts[result.verdict] : null;
  const step = result ? nextStepKind(result.verdict) : null;

  return (
    <section className="detector-wrap" id="detector">
      <div className="detector">
        <p className="eyebrow">{copy.detectorEyebrow}</p>
        <h2>{copy.detectorTitle}</h2>
        <p className="detector-lead">{copy.detectorLead}</p>
        <p className="privacy">{copy.detectorPrivacy}</p>
        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setResult(null);
            setPasteError(false);
          }}
          onKeyDown={(event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
              event.preventDefault();
              void run();
            }
          }}
          placeholder={copy.placeholder}
          aria-label={copy.detectorTitle}
          aria-describedby="detector-shortcut"
        />
        <div className="detector-toolbar">
          <button
            className="primary"
            type="button"
            onClick={run}
            disabled={busy}
            aria-busy={busy}
          >
            {busy ? copy.analyzing : copy.analyze}
          </button>
          <button className="ghost" type="button" onClick={pasteFromClipboard}>
            {copy.paste}
          </button>
          <button
            className="ghost"
            type="button"
            onClick={() => {
              setText(copy.sampleGrenadeText);
              setResult(null);
              setPasteError(false);
            }}
          >
            {copy.sampleGrenade}
          </button>
          <button
            className="ghost"
            type="button"
            onClick={() => {
              setText(copy.sampleHumanText);
              setResult(null);
              setPasteError(false);
            }}
          >
            {copy.sampleHuman}
          </button>
          <button
            className="ghost"
            type="button"
            onClick={() => {
              setText("");
              setResult(null);
              setPasteError(false);
            }}
          >
            {copy.clear}
          </button>
          <span className="grow" id="detector-shortcut">
            {copy.tokenLabel(tokens)}
            <span className="shortcut"> · {copy.shortcutHint}</span>
          </span>
        </div>
        {pasteError ? <p className="paste-error">{copy.pasteBlocked}</p> : null}

        {result && verdict ? (
          <div className="results">
            <div className={`verdict ${result.verdict}`}>
              <h3 ref={resultRef} id="detector-result" tabIndex={-1}>
                {verdict.title}
              </h3>
              <p>{verdict.body}</p>
            </div>
            {step === "template" ? (
              <div className="next-step">
                <h4>{copy.nextStepGrenadeTitle}</h4>
                <p>{copy.nextStepGrenadeBody}</p>
                <pre className="skeleton">{copy.nextStepTemplate}</pre>
                <button className="ghost" type="button" onClick={copyTemplate}>
                  {copiedTemplate ? copy.copiedTemplate : copy.copyTemplate}
                </button>
              </div>
            ) : null}
            {step === "ok" ? (
              <div className="next-step ok">
                <h4>{copy.nextStepOkTitle}</h4>
                <p>{copy.nextStepOkBody}</p>
              </div>
            ) : null}
            {step === "read" ? (
              <div className="next-step">
                <h4>{copy.nextStepUncertainTitle}</h4>
                <p>{copy.nextStepUncertainBody}</p>
              </div>
            ) : null}
            <div className="meters">
              <Meter label={copy.aiMeter} value={result.aiScore} />
              <Meter
                label={copy.grenadeMeter}
                value={result.grenadeScore}
                danger={result.verdict === "grenade"}
              />
            </div>
            <div className="signals">
              {result.signals.map((signal) => {
                const label = copy.signalLabels[signal.id];
                return (
                  <div className="signal" key={signal.id}>
                    <div className="signal-score">
                      {Math.round(signal.score * 100)}%
                    </div>
                    <div>
                      <h4>{label.title}</h4>
                      <p>{label.hint}</p>
                      {signal.hits.length > 0 ? (
                        <div className="hits">
                          {signal.hits.slice(0, 8).map((hit) => (
                            <code key={hit}>{hit}</code>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="preview">
                <Highlighted text={text} result={result} />
              </div>
              <p className="legend">{copy.highlightLegend}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
