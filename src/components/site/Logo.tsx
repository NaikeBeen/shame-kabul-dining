import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Logo({ className = "" }: { className?: string }) {
  const { t, lang } = useI18n();
  return (
    <Link
      to="/"
      aria-label={t("brand.name")}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-transform group-hover:scale-105"
      >
        <span className="text-lg font-black tracking-tight">S</span>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="text-base font-bold text-foreground">
          {t("brand.name")}
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {lang === "en" ? "Est. Kabul" : t("brand.tagline")}
        </span>
      </span>
    </Link>
  );
}