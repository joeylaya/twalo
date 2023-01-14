import gsap from "gsap"
import { createRef } from "https://esm.sh/v99/preact@10.11.0/src/index"

const clients = ["vivipary", "storyset", "vivipary", "storyset"]

export function ClientCarousel() {

  return (
    <section class="relative py-16 w-full flex flex-col gap-8 items-center">
      <span id="past-clients" class="absolute -top-16"></span>
      <div class="flex flex-wrap justify-center items-center justify-between gap-32">
        {clients.map((client) => (
          <div>
            <img src={`/${client}.png`} alt="" />
          </div>
        ))}
      </div>
      <p class="text-uppercase tracking-widest text-gray-500">Organizations Elita has worked with</p>
    </section>
  )
}
