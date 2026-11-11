import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const viewport = {
  themeColor: "#fefefe",
  colorScheme: "light" as const,
};

export const metadata: Metadata = {
  title: {
    default: "no AI grenade",
    template: "%s",
  },
  description:
    "Please don't throw unread AI at people. Read it first. Ask the actual question.",
  applicationName: "no AI grenade",
  keywords: [
    "AI grenade",
    "no hello",
    "AI dump",
    "AI text detector",
    "don't send unread AI",
  ],
  authors: [{ name: "no AI grenade" }],
  openGraph: {
    type: "website",
    title: "no AI grenade",
    description:
      "Please don't throw unread AI at people. Read it first. Ask the actual question.",
    locale: "en",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "no AI grenade",
    description:
      "Please don't throw unread AI at people. Read it first. Ask the actual question.",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh-cn",
      "x-default": "/",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
