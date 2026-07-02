import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ambience from "@/assets/ambience.jpg";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function AboutTeaser() {
  const { t } = useI18n();
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-xl"
        >
          <img
            src={ambience}
            alt="Warm dining ambience at Shaam Kabul"
            loading="lazy"
            decoding="async"
            width={1400}
            height={900}
            className="aspect-[4/3] w-full object-cover"
          />
        </motion.div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            {t("about.eyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("about.body")}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/about">{t("nav.about")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}