import { motion } from "framer-motion";
import { Clock, Flame, Leaf, Plus } from "lucide-react";
import type { Dish } from "@/lib/menu-data";
import { useI18n } from "@/lib/i18n";

export function DishCard({ dish, priority = false }: { dish: Dish; priority?: boolean }) {
  const { t, lang } = useI18n();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_2px_20px_-8px_rgba(60,20,10,0.08)] transition-shadow hover:shadow-[0_10px_40px_-12px_rgba(198,93,58,0.25)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={dish.image}
          alt={dish.name[lang]}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute start-3 top-3 flex flex-col gap-1.5">
          {dish.popular && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground shadow">
              {t("menu.popular")}
            </span>
          )}
          {dish.isNew && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground shadow">
              {t("menu.new")}
            </span>
          )}
        </div>
        {dish.vegetarian && (
          <span
            className="absolute end-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/85 text-[color:var(--color-success)] backdrop-blur"
            aria-label={t("menu.veg")}
          >
            <Leaf className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-foreground">
            {dish.name[lang]}
          </h3>
          <span dir="ltr" className="whitespace-nowrap text-base font-bold text-primary">
            {dish.price} AFN
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {dish.desc[lang]}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              <span dir="ltr">{dish.prepMin}</span> {t("menu.min")}
            </span>
            {dish.spicy ? (
              <span className="inline-flex items-center gap-0.5 text-primary" aria-label={t("menu.spicy")}>
                {Array.from({ length: dish.spicy }).map((_, i) => (
                  <Flame key={i} className="h-3.5 w-3.5" aria-hidden />
                ))}
              </span>
            ) : null}
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden />
            {t("menu.addCart")}
          </button>
        </div>
      </div>
    </motion.article>
  );
}