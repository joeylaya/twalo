const trainings = [
  {
    "name": "Trans & Queer Identity, Politics, & Inclusion",
    "description": "an overview of terminology, identities, historical and current issues, and action points for better inclusion"
  },
  {
    "name": "Pronouns: Designing Inclusive Practices",
    "description": "tools and resources to confidently improve the school environment for all students through implementing pronoun best practices"
  },
  {
    "name": "Gender Liberation & Queer Futures",
    "description": "unlearning and exploring the myths, limitations, and stereotypes surrounding gender and sexuality, and ways to create safer spaces for everyone"
  },
]

export function TrainingsSection() {
  return (
    <section class="relative w-full py-8 items-center flex flex-col gap-8 lg:(flex-row gap-16)">
      <span id="trainings" class="absolute -top-24"></span>
      <img class="order-last lg:(w-1/2 order-first)" src="/illustrations/group-discussion.svg" alt="" />
      <div class="flex flex-col gap-6">
        {trainings.map((training) => (
          <div class="flex flex-col gap-2">
            <p class="font-display font-bold text-indigo-700 text-2xl md:(text-3xl) ">{training.name}</p>
            <p class="md:text-lg">{training.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
