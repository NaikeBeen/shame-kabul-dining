import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./Section";
import { DishCard } from "./DishCard";
import { MENU } from "@/lib/menu-data";
import { useI18n } from "@/lib/i18n";

export function FeaturedDishes() {
  const { t } = useI18n();
  const featured = MENU.filter((d) => d.popular || d.isNew).slice(0, 6);
  return (
    <Section id="featured">
      <SectionHeader
        eyebrow={t("featured.eyebrow")}
        title={t("featured.title")}
        subtitle={t("featured.subtitle")}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link to="/menu">{t("cta.viewAll")}</Link>
        </Button>
      </div>
    </Section>
  );
}