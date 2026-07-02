import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { primaryPhone } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";

export function StickyMobileCTA() {
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${primaryPhone}`}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground"
          aria-label={`Call ${primaryPhone}`}
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="sr-only">Call</span>
        </a>
        <Link
          to="/reservation"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          {t("cta.reserve")}
        </Link>
        <Link
          to="/menu"
          className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-sm font-semibold text-primary"
        >
          {t("cta.order")}
        </Link>
      </div>
    </div>
  );
}