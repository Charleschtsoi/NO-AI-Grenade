import type { Metadata } from "next";
import { Site } from "@/components/Site";

export const metadata: Metadata = {
  title: "no AI 手雷",
  description: "请不要把没看过的 AI 回复丢给别人。先自己看一眼，再问真正的问题。",
  openGraph: {
    locale: "zh_CN",
    title: "no AI 手雷",
    description: "请不要把没看过的 AI 回复丢给别人。先自己看一眼，再问真正的问题。",
  },
  alternates: {
    canonical: "/zh-cn",
    languages: {
      en: "/",
      "zh-CN": "/zh-cn",
      "x-default": "/",
    },
  },
};

export default function ZhCnPage() {
  return <Site locale="zh-cn" />;
}
