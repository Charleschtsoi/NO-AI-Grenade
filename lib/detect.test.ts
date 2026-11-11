import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { en } from "./copy/en.ts";
import { fr } from "./copy/fr.ts";
import { ja } from "./copy/ja.ts";
import { zhCn } from "./copy/zh-cn.ts";
import { zhTw } from "./copy/zh-tw.ts";
import { analyze, countTokens } from "./detect.ts";

const copy = {
  en,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
  ja,
  fr,
};

describe("countTokens", () => {
  it("counts latin words and CJK characters", () => {
    const result = countTokens("hello world 你好");
    assert.equal(result.latinWords, 2);
    assert.equal(result.cjkChars, 2);
    assert.equal(result.tokens, 4);
  });
});

describe("analyze", () => {
  it("flags the English grenade sample", () => {
    const result = analyze(copy.en.sampleGrenadeText);
    assert.ok(result.tokens >= 40);
    assert.equal(result.verdict, "grenade");
    assert.ok(result.aiScore >= 55, `aiScore ${result.aiScore}`);
    assert.ok(result.grenadeScore >= 55, `grenadeScore ${result.grenadeScore}`);
    assert.ok(result.signals.some((signal) => signal.id === "tell-phrases"));
    assert.ok(result.signals.some((signal) => signal.id === "assistant-voice"));
  });

  it("does not flag a short human ask as a grenade", () => {
    const result = analyze(copy.en.sampleHumanText);
    assert.notEqual(result.verdict, "grenade");
    assert.ok(result.hasQuestion);
    assert.ok(result.hasOwnership);
    assert.ok(result.hasHumanWrapper);
    assert.ok(result.grenadeScore < 50, `grenadeScore ${result.grenadeScore}`);
  });

  it("flags the Simplified Chinese grenade sample", () => {
    const result = analyze(copy["zh-cn"].sampleGrenadeText);
    assert.equal(result.verdict, "grenade");
    assert.ok(result.aiScore >= 50, `aiScore ${result.aiScore}`);
  });

  it("keeps a Simplified Chinese human wrapper under the grenade line", () => {
    const result = analyze(copy["zh-cn"].sampleHumanText);
    assert.notEqual(result.verdict, "grenade");
    assert.ok(result.hasQuestion || result.hasOwnership);
  });

  it("flags the Traditional Chinese grenade sample", () => {
    const result = analyze(copy["zh-tw"].sampleGrenadeText);
    assert.equal(result.verdict, "grenade");
    assert.ok(result.aiScore >= 50, `aiScore ${result.aiScore}`);
  });

  it("flags the Japanese grenade sample", () => {
    const result = analyze(copy.ja.sampleGrenadeText);
    assert.equal(result.verdict, "grenade");
    assert.ok(result.aiScore >= 50, `aiScore ${result.aiScore}`);
  });

  it("keeps a Japanese human wrapper under the grenade line", () => {
    const result = analyze(copy.ja.sampleHumanText);
    assert.notEqual(result.verdict, "grenade");
    assert.ok(result.hasQuestion || result.hasOwnership);
  });

  it("flags the French grenade sample", () => {
    const result = analyze(copy.fr.sampleGrenadeText);
    assert.equal(result.verdict, "grenade");
    assert.ok(result.aiScore >= 50, `aiScore ${result.aiScore}`);
  });

  it("keeps a French human wrapper under the grenade line", () => {
    const result = analyze(copy.fr.sampleHumanText);
    assert.notEqual(result.verdict, "grenade");
    assert.ok(result.hasQuestion || result.hasOwnership);
  });

  it("abstains on very short text", () => {
    const result = analyze("hey, you there?");
    assert.equal(result.verdict, "too-short");
  });
});
