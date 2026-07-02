import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-config";

export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-foreground">{t("brand.name")}</h3>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            {t("brand.tagline")} · {t("about.body")}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">{t("footer.quick")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/menu" className="text-muted-foreground hover:text-primary">{t("nav.menu")}</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/gallery" className="text-muted-foreground hover:text-primary">{t("nav.gallery")}</Link></li>
            <li><Link to="/reservation" className="text-muted-foreground hover:text-primary">{t("nav.reservation")}</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{SITE.address[lang]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{SITE.hours[lang]}</span>
            </li>
            <li className="flex flex-col gap-1">
              {SITE.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  dir="ltr"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  {p}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {t("brand.name")} · {t("footer.rights")}</p>
          <p dir="ltr" className="opacity-80">Handcrafted in Kabul</p>
        </div>
      </div>
    </footer>
  );
}