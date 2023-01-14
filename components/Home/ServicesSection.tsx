import { BaseButton } from "../Base/BaseButton.tsx"
import { BaseCard } from "../Base/BaseCard.tsx"

const services = [
  {
    slug: "training",
    name: "Training",
    description: "Professional development, learning spaces, & workshops"
  },
  {
    slug: "advising",
    name: "Advising",
    description: "Strategies to move toward liberation and social change"
  },
  {
    slug: "mediation",
    name: "Mediation",
    description: "DEI crisis response, conflict mediation, & prevention"
  },
  {
    slug: "curation",
    name: "Curation",
    description: "Resources, tips, and tools for motivated learners"
  }  
]

export function ServicesSection() {
  return (
    <section class="py-8 flex flex-col gap-6">
      {/* <header class="flex items-center gap-8 justify-between">
        <BaseButton style="primary" text="See what we offer" href="about#approach" />
        <p class="text-xl md:text-3xl">Personalized consulting services for educators, organizations, and communities</p>
      </header> */}
      <div class="flex flex-col gap-4 justify-center items-center md:(flex-row items-start)">
        {services.map((service) => (
          <a href={service.slug == "training" ? "services/training" : `services#${service.slug}`}>
            <BaseCard style="light" width="w-auto" title={service.name} text={service.description} icon={service.slug} />
          </a>
        ))}
      </div>
      <BaseButton style="primary" text="View all services" href="services" />
    </section>
  )  
}
