import BaseLayout from "../components/Base/BaseLayout.tsx";
import { HeroSection } from "../components/About/HeroSection.tsx";
import {ClientsSection} from "../components/About/ClientsSection.tsx";
import { FacilitatorSection } from "../components/About/FacilitatorSection.tsx";

export default function About() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      <>
        <HeroSection />
        <ClientsSection />
        <FacilitatorSection />      
      </>
    </BaseLayout>
  );
}
