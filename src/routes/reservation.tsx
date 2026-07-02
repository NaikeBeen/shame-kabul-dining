import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/reservation")({
  component: ReservePage,
  head: () => ({
    meta: [
      { title: "Reservations · Shaam Kabul" },
      {
        name: "description",
        content:
          "Reserve your table at Shaam Kabul — indoor, outdoor and VIP seating available every day.",
      },
      { property: "og:title", content: "Reservations · Shaam Kabul" },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
});

function ReservePage() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <>
      <PageHeader eyebrow={t("cta.reserve")} title={t("reserve.title")} subtitle={t("reserve.subtitle")} />
      <section className="container-page pb-24">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-border/60 bg-card p-6 shadow-[0_20px_60px_-30px_rgba(60,20,10,0.25)] md:p-10">
          {done ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]">
                <CheckCircle2 className="h-8 w-8" aria-hidden />
              </div>
              <p className="text-lg font-semibold text-foreground">{t("form.submitted")}</p>
              <Button variant="outline" onClick={() => setDone(false)}>
                {t("cta.book")}
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label={t("form.name")}>
                <input required name="name" type="text" className={inputCls} />
              </Field>
              <Field label={t("form.phone")}>
                <input required name="phone" type="tel" dir="ltr" className={inputCls} />
              </Field>
              <Field label={t("form.email")} className="sm:col-span-2">
                <input name="email" type="email" dir="ltr" className={inputCls} />
              </Field>
              <Field label={t("form.date")}>
                <input required name="date" type="date" className={inputCls} />
              </Field>
              <Field label={t("form.time")}>
                <input required name="time" type="time" className={inputCls} />
              </Field>
              <Field label={t("form.guests")}>
                <input required name="guests" type="number" min={1} max={30} defaultValue={2} className={inputCls} />
              </Field>
              <Field label={t("form.seating")}>
                <select name="seating" className={inputCls} defaultValue="indoor">
                  <option value="indoor">{t("form.seating.indoor")}</option>
                  <option value="outdoor">{t("form.seating.outdoor")}</option>
                  <option value="vip">{t("form.seating.vip")}</option>
                </select>
              </Field>
              <Field label={t("form.notes")} className="sm:col-span-2">
                <textarea name="notes" rows={3} className={`${inputCls} min-h-24 resize-y`} />
              </Field>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full rounded-full">
                  {t("cta.book")}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

const inputCls =
  "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}