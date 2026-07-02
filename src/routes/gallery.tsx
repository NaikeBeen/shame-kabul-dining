import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import g01 from "@/assets/gallery-01.asset.json";
import g10 from "@/assets/gallery-10.asset.json";
import ambience from "@/assets/ambience.jpg";
import kabuli from "@/assets/hero-kabuli.jpg";
import kebab from "@/assets/dish-kebab.jpg";
import mantu from "@/assets/dish-mantu.jpg";
import bolani from "@/assets/dish-bolani.jpg";
import chapli from "@/assets/dish-chapli.jpg";
import firni from "@/assets/dish-firni.jpg";
import tea from "@/assets/dish-tea.jpg";
import chef from "@/assets/chef.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery · Shaam Kabul" },
      {
        name: "description",
        content:
          "Step inside Shaam Kabul — photos of our dining room, chefs, and signature Afghan dishes.",
      },
      { property: "og:title", content: "Gallery · Shaam Kabul" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const images: { src: string; alt: string; span?: string }[] = [
  { src: g01.url, alt: "Traditional Afghan tent seating at Shaam Kabul", span: "sm:col-span-2 sm:row-span-2" },
  { src: kabuli, alt: "Kabuli Pulao signature dish" },
  { src: kebab, alt: "Charcoal lamb kebab" },
  { src: g10.url, alt: "Outdoor terrace lounge at night", span: "sm:col-span-2" },
  { src: mantu, alt: "Mantu dumplings" },
  { src: bolani, alt: "Fresh herb bolani" },
  { src: ambience, alt: "Warm dining room ambience" },
  { src: chapli, alt: "Chapli kebab platter" },
  { src: chef, alt: "Head chef at work" },
  { src: firni, alt: "Saffron firni dessert" },
  { src: tea, alt: "Cardamom chai" },
];

function GalleryPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t("gallery.title")} subtitle={t("gallery.subtitle")} />
      <section className="container-page pb-24">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.03 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-secondary shadow-sm ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}