import { BaseButton } from "../Base/BaseButton.tsx";

export function CustomSection() {
  return (
    <section class="items-center flex flex-col gap-8 md:(flex-row gap-16)">
      <div class="flex flex-col gap-8 md:w-3/5">
        <p class="text-xl md:text-3xl">
          Don’t see what you’re looking for? Just let us know! We can design a training to fit your specific needs.
        </p>
        <div class="flex flex-col md:(flex-row) items-center gap-2">
          <BaseButton style="primary" text="Contact us" />
        </div>
      </div>
      <img class="md:w-1/3" src="/illustrations/teaching.svg" alt="" />
    </section>
  )
}
