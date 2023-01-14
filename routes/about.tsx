import { Head } from "$fresh/runtime.ts";
import BaseLayout from "../components/Base/BaseLayout.tsx";
import { HeroSection } from "../components/About/HeroSection.tsx";
import {ClientCarousel} from "../components/About/ClientCarousel.tsx";
import { FacilitatorSection } from "../components/About/FacilitatorSection.tsx";

export default function About() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      <HeroSection />
      <ClientCarousel />
      <FacilitatorSection />
    </BaseLayout>
  );
}
