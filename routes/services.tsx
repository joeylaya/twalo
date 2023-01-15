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
    description: "We coach educators, organizational leaders, and nonprofit administrators and advise on strategies to increase capacity to work toward liberation and social change.",
    illustration: "learning",
    order: "standard"
  },
  {
    name: "Mediation",
    description: "We guide the creation of impactful responses, mediate conflict, and analyze strategies for change post “call-out” letters and during DEI crises.",
    illustration: "team",
    order: "reverse"
  },
  {
    name: "Curation",
    description: "We curate courses or a list of resources, tips, and tools to create a safe and affirming environment.",
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
      <div class="flex flex-col gap-16">
        {services.map((service) => (
          <ServiceSection {...service} />
        ))}
      </div>
    </BaseLayout>
  );
}
