import { BaseButton } from "../Base/BaseButton.tsx";

export function HeroSection() {
  return (
    <header class="relative items-center flex flex-col gap-8 md:(flex-row gap-16)">
      <span id="our-approach" class="absolute -top-16"></span>
      <div class="flex flex-col gap-4 md:w-3/5">
        <h1 class="font-extrabold text-3xl md:text-5xl">
          At Twalo, we believe in {" "}
          <span class="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">
            embracing young people as their whole selves.
          </span>
        </h1>
        <p class="text-lg md:text-xl">
          We do so by addressing opportunities for strategic change, organizational learning, and personal transformation that center the root issues of inequity and oppression.
        </p>
        <div class="flex flex-col md:(flex-row) items-center gap-2">
          <BaseButton style="primary" text="Meet the facilitator" href="#facilitator" />
          <BaseButton style="secondary" text="Contact us" href="./contact" />
        </div>
      </div>
      <img src="/illustrations/collab.svg" alt="" />
    </header>
  )
}
