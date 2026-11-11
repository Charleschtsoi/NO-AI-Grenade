import Link from "next/link";
import { localeMeta, type Locale } from "@/lib/i18n";

export function LanguageNav({
  locale,
  label,
  variant,
}: {
  locale: Locale;
  label: string;
  variant: "bar" | "list";
}) {
  const links = localeMeta.map((item) => (
    <Link
      key={item.id}
      href={item.path}
      hrefLang={item.hreflang}
      aria-current={locale === item.id ? "page" : undefined}
    >
      {item.label}
    </Link>
  ));

  if (variant === "bar") {
    return (
      <nav className="lang-bar" aria-label={label}>
        {links}
      </nav>
    );
  }

  return <ul className="lang-list">{links.map((link) => <li key={link.key}>{link}</li>)}</ul>;
}
