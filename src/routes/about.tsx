import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import chef from "@/assets/chef.jpg";
import ambience from "@/assets/ambience.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · Shaam Kabul" },
      {
        name: "description",
        content:
          "The story of Shaam Kabul — a family restaurant in Kabul serving authentic Afghan cuisine with warmth, craft and hospitality.",
      },
      { property: "og:title", content: "About · Shaam Kabul" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader eyebrow={t("about.eyebrow")} title={t("about.title")} subtitle={t("about.body")} />
      <section className="container-page pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-border/60 shadow-lg"
          >
            <img
              src={chef}
              alt="Head chef preparing traditional Afghan cuisine"
              loading="lazy"
              decoding="async"
              width={900}
              height={1200}
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col justify-center gap-6 text-base leading-relaxed text-muted-foreground">
            <p>{t("about.body")}</p>
            <p>
              {t("brand.tagline")}. {t("why.chef.body")} {t("why.fresh.body")}
            </p>
            <p>{t("why.ambience.body")}</p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-border/60 shadow-lg">
          <img
            src={ambience}
            alt="Dining room at Shaam Kabul"
            loading="lazy"
            decoding="async"
            width={1400}
            height={900}
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}