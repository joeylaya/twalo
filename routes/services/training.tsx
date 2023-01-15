import BaseLayout from "../../components/Base/BaseLayout.tsx"
import { CustomSection } from "../../components/Services/CustomSection.tsx";
import { HeroSection } from "../../components/Services/HeroSection.tsx";
import { SpacesSection } from "../../components/Services/SpacesSection.tsx";
import { TrainingsSection } from "../../components/Services/TrainingsSection.tsx";

export default function Services() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      <>
        <HeroSection />
        <TrainingsSection />
        <SpacesSection />
        <CustomSection />      
      </>
    </BaseLayout>
  );
}
