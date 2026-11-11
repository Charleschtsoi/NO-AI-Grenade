import type { Verdict } from "./detect";

export type NextStepKind = "template" | "ok" | "read" | null;

export function nextStepKind(verdict: Verdict): NextStepKind {
  if (verdict === "grenade" || verdict === "likely-ai") return "template";
  if (verdict === "likely-human") return "ok";
  if (verdict === "uncertain") return "read";
  return null;
}
