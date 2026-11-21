export const PUBLIC_DETECTOR_IDS = ["gptzero", "copyleaks", "zerogpt"] as const;

export type PublicDetectorId = (typeof PUBLIC_DETECTOR_IDS)[number];

export type PublicDetector = {
  id: PublicDetectorId;
  name: string;
  url: string;
};

/**
 * Public paste-box detectors. None of these offer a key-free embed we can
 * host, and calling their APIs would send drafts through our server.
 * Open the site; the user pastes. Limits change — treat hints as approximate.
 */
export const PUBLIC_DETECTORS: readonly PublicDetector[] = [
  {
    id: "gptzero",
    name: "GPTZero",
    url: "https://gptzero.me/",
  },
  {
    id: "copyleaks",
    name: "Copyleaks",
    url: "https://copyleaks.com/ai-detector",
  },
  {
    id: "zerogpt",
    name: "ZeroGPT",
    url: "https://www.zerogpt.com/",
  },
];
