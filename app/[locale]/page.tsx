import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { copy } from "@/lib/copy";
import {
  isLocale,
  languageAlternates,
  localeMeta,
  pathFor,
  type Locale,
} from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return localeMeta
    .filter((item) => item.id !== "en")
    .map((item) => ({ locale: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  const page = copy[locale];
  const meta = localeMeta.find((item) => item.id === locale);
  return {
    title: page.docTitle,
    description: page.docDescription,
    openGraph: {
      locale: meta?.og,
      title: page.docTitle,
      description: page.docDescription,
    },
    alternates: {
      canonical: pathFor(locale),
      languages: languageAlternates(),
    },
  };
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <Site locale={locale as Exclude<Locale, "en">} />;
}
