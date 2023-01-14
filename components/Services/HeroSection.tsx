import { BaseButton } from "../Base/BaseButton.tsx";

export function HeroSection() {
  return (
    <header class="relative items-center flex flex-col gap-8 md:(flex-row gap-16)">
      <span id="our-approach" class="absolute -top-16"></span>
      <div class="flex flex-col gap-4 md:w-3/5">
        <h1 class="font-extrabold text-3xl md:text-5xl">
          We provide {" "}
          <span class="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">engaging, {" "}</span>
          <span class="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">personalized, {" "}</span>
          and {" "}
          <span class="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">transformative {" "}</span>
          training experiences.
        </h1>
        <p class="text-lg md:text-xl">
          Join us in building trans and queer understanding, cultivating supportive spaces and services, and enacting change.
        </p>
        <div class="flex flex-col md:(flex-row) items-center gap-2">
          <BaseButton style="primary" text="View trainings" href="#trainings" />
          <BaseButton style="secondary" text="Contact us" href="./contact" />
        </div>
      </div>
      <img class="h-96 shadow" src="/certificate.png" alt="" />
    </header>
  )
}
