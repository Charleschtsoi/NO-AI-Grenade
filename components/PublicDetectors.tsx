"use client";

import { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { copy as allCopy } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";
import {
  PUBLIC_DETECTORS,
  type PublicDetector,
} from "@/lib/public-detectors";

export function PublicDetectors({
  locale,
  text,
}: {
  locale: Locale;
  text: string;
}) {
  const copy = allCopy[locale];
  const [opened, setOpened] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const hasText = text.trim().length > 0;

  async function openTool(tool: PublicDetector) {
    let didCopy = false;
    if (hasText) {
      didCopy = await copyText(text);
    }
    setCopied(didCopy);
    setCopyFailed(hasText && !didCopy);
    setOpened(tool.id);
    window.open(tool.url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="public-detectors">
      <h3>{copy.publicDetectorsTitle}</h3>
      <p>{copy.publicDetectorsLead}</p>
      <p className="privacy">{copy.publicDetectorsPrivacy}</p>
      <ul>
        {PUBLIC_DETECTORS.map((tool) => (
          <li key={tool.id}>
            <div>
              <strong>{tool.name}</strong>
              <p>{copy.publicDetectorHints[tool.id]}</p>
            </div>
            <button
              className="ghost"
              type="button"
              disabled={!hasText}
              onClick={() => void openTool(tool)}
              aria-label={`${copy.publicDetectorsOpen} ${tool.name}`}
            >
              {copy.publicDetectorsOpen} {tool.name}
            </button>
          </li>
        ))}
      </ul>
      {!hasText ? (
        <p className="legend">{copy.publicDetectorsEmpty}</p>
      ) : copied && opened ? (
        <p className="legend" role="status">
          {copy.publicDetectorsCopied}
        </p>
      ) : copyFailed ? (
        <p className="paste-error">{copy.publicDetectorsCopyFailed}</p>
      ) : null}
    </div>
  );
}
