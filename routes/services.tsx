import BaseLayout from "../components/Base/BaseLayout.tsx";
import { ServiceSection } from "../components/Services/ServiceSection.tsx";

const services = [
  {
    name: "Training",
    description: "We facilitate focus groups, professional development, and learning spaces, as well as training for young people and adults that motivate, innovate, challenge, and inspire.",
    illustration: "lesson",
    order: "reverse",
    buttonText: "View our trainings"
  },
  {
    name: "Advising",
    description: "description",
    illustration: "learning",
    order: "standard"
  },
  {
    name: "Mediation",
    description: "description",
    illustration: "team",
    order: "reverse"
  },
  {
    name: "Curation",
    description: "description",
    illustration: "studying",
    order: "standard"
  },
  
]

export default function Services() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      {services.map((service) => (
        <ServiceSection {...service} />
      ))}
    </BaseLayout>
  );
}
