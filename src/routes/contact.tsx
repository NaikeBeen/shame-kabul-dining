import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · Shaam Kabul" },
      {
        name: "description",
        content:
          "Contact Shaam Kabul — call us, visit us in Kabul, or send a message. We're open every day from 11 AM to 11 PM.",
      },
      { property: "og:title", content: "Contact · Shaam Kabul" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />
      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="space-y-6">
            <InfoRow icon={MapPin} title={t("contact.address")} value={SITE.address[lang]} />
            <InfoRow
              icon={Phone}
              title={t("nav.contact")}
              value={
                <div className="flex flex-col gap-1" dir="ltr">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:text-primary">
                      {p}
                    </a>
                  ))}
                </div>
              }
            />
            <InfoRow icon={Mail} title="Email" value="hello@shaamkabul.com" />
            <InfoRow
              icon={Facebook}
              title="Facebook"
              value={
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary" dir="ltr">
                  facebook.com/Shaamkabul
                </a>
              }
            />

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                src={SITE.mapEmbed}
                title="Map"
                loading="lazy"
                className="h-64 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="grid gap-4 rounded-[2rem] border border-border/60 bg-card p-6 shadow-sm md:p-8"
          >
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-foreground/80">{t("form.name")}</span>
              <input required className={inputCls} />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-foreground/80">{t("form.email")}</span>
                <input required type="email" dir="ltr" className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-foreground/80">{t("form.phone")}</span>
                <input type="tel" dir="ltr" className={inputCls} />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-foreground/80">{t("form.subject")}</span>
              <input className={inputCls} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-foreground/80">{t("form.message")}</span>
              <textarea required rows={5} className={`${inputCls} min-h-32 resize-y`} />
            </label>
            <Button type="submit" size="lg" className="rounded-full">
              {t("cta.send")}
            </Button>
            {sent && (
              <p className="text-sm text-[color:var(--color-success)]">{t("form.submitted")}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25";

function InfoRow({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <div className="mt-1 text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}