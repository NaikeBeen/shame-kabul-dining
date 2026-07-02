import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { DishCard } from "@/components/site/DishCard";
import { CATEGORIES, MENU, type Category } from "@/lib/menu-data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu · Shaam Kabul" },
      {
        name: "description",
        content:
          "Explore the Shaam Kabul menu — Kabuli Pulao, charcoal kebabs, mantu, bolani, saffron firni and traditional cardamom tea.",
      },
      { property: "og:title", content: "Menu · Shaam Kabul" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

function MenuPage() {
  const { t } = useI18n();
  const [cat, setCat] = useState<"all" | Category>("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return MENU.filter((d) => (cat === "all" ? true : d.category === cat)).filter(
      (d) =>
        !query ||
        d.name.en.toLowerCase().includes(query) ||
        d.name.fa.includes(query) ||
        d.name.ps.includes(query),
    );
  }, [cat, q]);

  return (
    <>
      <PageHeader eyebrow={t("nav.menu")} title={t("menu.title")} subtitle={t("menu.subtitle")} />
      <section className="container-page pb-24">
        <div className="mb-8 flex flex-col gap-4">
          <div className="relative mx-auto w-full max-w-xl">
            <Search
              className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("menu.search")}
              className="h-12 w-full rounded-full border border-border bg-card ps-10 pe-4 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              aria-label={t("menu.search")}
            />
          </div>
          <div
            className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Category filter"
          >
            {CATEGORIES.map((c) => {
              const active = c.id === cat;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCat(c.id)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow"
                      : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {t(c.key)}
                </button>
              );
            })}
          </div>
        </div>

        {list.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">{t("menu.empty")}</p>
        ) : (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {list.map((d) => (
                <motion.div
                  key={d.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <DishCard dish={d} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </>
  );
}