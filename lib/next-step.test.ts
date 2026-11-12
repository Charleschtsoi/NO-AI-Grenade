import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { en } from "./copy/en.ts";
import { fr } from "./copy/fr.ts";
import { ja } from "./copy/ja.ts";
import { zhCn } from "./copy/zh-cn.ts";
import { zhTw } from "./copy/zh-tw.ts";
import { nextStepKind } from "./next-step.ts";

const locales = { en, fr, ja, "zh-cn": zhCn, "zh-tw": zhTw };

describe("nextStepKind", () => {
  it("offers a human wrapper skeleton for grenades and model-like text", () => {
    assert.equal(nextStepKind("grenade"), "template");
    assert.equal(nextStepKind("likely-ai"), "template");
  });

  it("does not invent a rewrite for human or too-short text", () => {
    assert.equal(nextStepKind("likely-human"), "ok");
    assert.equal(nextStepKind("too-short"), null);
    assert.equal(nextStepKind("uncertain"), "read");
  });
});

describe("engagement copy", () => {
  it("keeps a fill-in skeleton in every locale, not a generated rewrite", () => {
    for (const [id, copy] of Object.entries(locales)) {
      assert.match(
        copy.nextStepTemplate,
        /\[/,
        `${id} template should keep blanks to fill in`,
      );
      assert.equal(copy.nextStepGrenadeBody.includes("100%"), false);
      assert.ok(copy.copyLink.length > 0, id);
      assert.ok(copy.expandDump.length > 0, id);
      assert.ok(copy.shortcutHint.length > 0, id);
    }
  });
});
