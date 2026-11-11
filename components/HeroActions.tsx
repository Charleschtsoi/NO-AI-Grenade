"use client";

import { useState } from "react";
import { copyText } from "@/lib/clipboard";
import { pathFor, type Locale } from "@/lib/i18n";

export function HeroActions({
  locale,
  sentHere,
  copyLink,
  copiedLink,
  sniffDraft,
}: {
  locale: Locale;
  sentHere: string;
  copyLink: string;
  copiedLink: string;
  sniffDraft: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyPageLink() {
    const url = `${window.location.origin}${pathFor(locale)}`;
    const ok = await copyText(url);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="hero-actions">
      <p className="sent-here">{sentHere}</p>
      <div className="hero-buttons">
        <button className="primary" type="button" onClick={copyPageLink}>
          {copied ? copiedLink : copyLink}
        </button>
        <a className="ghost btn" href="#detector">
          {sniffDraft}
        </a>
      </div>
    </div>
  );
}
