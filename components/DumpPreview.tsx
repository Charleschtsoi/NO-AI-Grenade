"use client";

import { useId, useState } from "react";

export function DumpPreview({
  badge,
  lines,
  expandLabel,
  collapseLabel,
}: {
  badge: string;
  lines: string[];
  expandLabel: string;
  collapseLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const bodyId = useId();

  return (
    <div>
      <div className={open ? "dump open" : "dump"} id={bodyId}>
        <div className="dump-badge">{badge}</div>
        <div className="dump-body">{lines.join("\n")}</div>
      </div>
      <button
        type="button"
        className="dump-toggle"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? collapseLabel : expandLabel}
      </button>
    </div>
  );
}
