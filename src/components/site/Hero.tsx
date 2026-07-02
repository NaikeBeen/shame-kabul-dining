import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-kabuli.jpg";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28">
      <div className="container-page grid gap-10 pb-16 pt-6 md:pb-24 md:pt-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link to="/reservation">
                {t("cta.reserve")}
                <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-foreground/15 bg-background hover:bg-secondary"
            >
              <Link to="/menu">{t("cta.explore")}</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[color:var(--color-gold)] text-[color:var(--color-gold)]" aria-hidden />
              ))}
            </div>
            <span dir="ltr">1,200+ happy guests</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-secondary shadow-[0_30px_60px_-30px_rgba(60,20,10,0.35)]">
            <img
              src={heroImg}
              alt="Signature Kabuli Pulao platter"
              width={1600}
              height={1008}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 start-6 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t("brand.tagline")}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{t("brand.name")}</p>
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent)]"
      />
    </section>
  );
}