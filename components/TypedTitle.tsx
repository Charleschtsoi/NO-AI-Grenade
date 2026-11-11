"use client";

import { useEffect, useState } from "react";

export function TypedTitle({
  prefix,
  words,
}: {
  prefix: string;
  words: string[];
}) {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(words[0]?.length ?? 0);
  const [phase, setPhase] = useState<"hold" | "out" | "in">("hold");

  useEffect(() => {
    let delay = 80;

    if (phase === "hold") delay = 2200;
    else if (phase === "out") delay = 45;
    else delay = 70;

    const timer = window.setTimeout(() => {
      if (phase === "hold") {
        setPhase("out");
        return;
      }
      if (phase === "out") {
        if (chars <= 0) {
          setIndex((current) => (current + 1) % words.length);
          setPhase("in");
          return;
        }
        setChars((current) => current - 1);
        return;
      }
      const next = words[(index + words.length) % words.length] ?? "";
      if (chars >= next.length) {
        setPhase("hold");
        return;
      }
      setChars((current) => current + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [chars, index, phase, words]);

  const word = words[index] ?? "";
  const shown = word.slice(0, chars);

  return (
    <h1 className="name">
      <span className="name-prefix">{prefix}</span>
      <span id="strike" className="strike">
        {shown}
      </span>
      <span className="typed-cursor blink" aria-hidden="true">
        |
      </span>
    </h1>
  );
}
