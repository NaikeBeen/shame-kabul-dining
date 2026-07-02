import { motion } from "framer-motion";
import { ChefHat, Leaf, Sparkles, Truck } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { useI18n } from "@/lib/i18n";

export function WhyUs() {
  const { t } = useI18n();
  const items = [
    { icon: Leaf, title: t("why.fresh.title"), body: t("why.fresh.body") },
    { icon: ChefHat, title: t("why.chef.title"), body: t("why.chef.body") },
    { icon: Sparkles, title: t("why.ambience.title"), body: t("why.ambience.body") },
    { icon: Truck, title: t("why.delivery.title"), body: t("why.delivery.body") },
  ];
  return (
    <Section className="bg-secondary/50">
      <SectionHeader title={t("why.title")} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}