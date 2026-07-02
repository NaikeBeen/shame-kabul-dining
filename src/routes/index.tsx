import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { FeaturedDishes } from "@/components/site/FeaturedDishes";
import { WhyUs } from "@/components/site/WhyUs";
import { AboutTeaser } from "@/components/site/AboutTeaser";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutTeaser />
      <WhyUs />
    </>
  );
}
