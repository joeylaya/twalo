import { BaseButton } from "../Base/BaseButton.tsx";

export function ApproachSection() {
  return (
    <section class="items-center flex flex-col -mb-12 gap-8 md:(flex-row gap-16)">
      <div class="flex flex-col gap-8 md:w-3/5">
        <p class="text-xl md:text-3xl">
          Discover how we can help you create more equitable communities, schools, services, and spaces.
        </p>
        <div class="flex flex-col md:(flex-row) items-center gap-2">
          <BaseButton style="primary" text="Learn about our approach" href="about#our-approach" />
          <BaseButton style="secondary" text="Contact us" href="contact" />
        </div>
      </div>
      <img class="md:(w-3/5)" src="/illustrations/students.svg" alt="" />
    </section>
  )
}
