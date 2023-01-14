import { BaseButton } from "../Base/BaseButton.tsx";

export function HeroSection() {
  return (
    <header class="items-center flex flex-col gap-8 md:(flex-row gap-16)">
      <div class="flex flex-col gap-8 md:w-3/5">
        <h1 class="font-extrabold text-6xl md:text-8xl">
          Education Consulting for{" "}
          <span class="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">
            Youth Liberation
          </span>
        </h1>
        <p class="text-xl md:text-2xl">
          At Twalo, we work with professionals to advocate for—and
          actualize—liberatory environments for youth and students.
        </p>
        <div class="flex flex-col md:(flex-row) items-center gap-2">
          <BaseButton style="primary" text="View our services" />
          <BaseButton style="secondary" text="Contact us" />
        </div>
      </div>
      <img class="md:(w-1/2 -mr-32 -mt-32)" src="/illustrations/happy-student.svg" alt="" />
    </header>
  )
}
