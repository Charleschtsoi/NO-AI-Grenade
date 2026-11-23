import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { en } from "./copy/en.ts";
import { fr } from "./copy/fr.ts";
import { ja } from "./copy/ja.ts";
import { zhCn } from "./copy/zh-cn.ts";
import { zhTw } from "./copy/zh-tw.ts";
import {
  PUBLIC_DETECTORS,
  PUBLIC_DETECTOR_IDS,
  type PublicDetectorId,
} from "./public-detectors.ts";

const locales = { en, fr, ja, "zh-cn": zhCn, "zh-tw": zhTw };

describe("public detectors", () => {
  it("lists three https paste boxes, not API endpoints", () => {
    assert.deepEqual(
      PUBLIC_DETECTORS.map((tool) => tool.id),
      [...PUBLIC_DETECTOR_IDS],
    );
    assert.equal(PUBLIC_DETECTORS.length, 3);
    for (const tool of PUBLIC_DETECTORS) {
      assert.match(tool.url, /^https:\/\//);
      assert.equal(tool.url.includes("api."), false, tool.id);
      assert.ok(tool.name.length > 0, tool.id);
    }
  });

  it("keeps honest copy in every locale: estimates, no fabricated certainty", () => {
    for (const [id, copy] of Object.entries(locales)) {
      assert.ok(copy.publicDetectorsTitle.length > 0, id);
      assert.ok(copy.publicDetectorsLead.length > 0, id);
      assert.ok(copy.publicDetectorsPrivacy.length > 0, id);
      assert.equal(copy.publicDetectorsLead.includes("100%"), false, id);
      assert.equal(copy.publicDetectorsLead.includes("99.9"), false, id);
      assert.equal(copy.detectorPrivacy.includes("100%"), false, id);
      for (const toolId of PUBLIC_DETECTOR_IDS) {
        const hint: string = copy.publicDetectorHints[toolId as PublicDetectorId];
        assert.ok(hint.length > 0, `${id}.${toolId}`);
        assert.equal(hint.includes("100%"), false, `${id}.${toolId}`);
        assert.equal(hint.includes("99.9"), false, `${id}.${toolId}`);
      }
    }
  });
});
