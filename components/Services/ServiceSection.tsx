import { BaseButton } from "../Base/BaseButton.tsx";

export interface ServiceSectionProps {
  name: string,
  description: string,
  illustration: string,
  order: "standard" | "reverse",
  buttonText?: string
}

export function ServiceSection(props: ServiceSectionProps) {
  return (
    <section class="relative items-center flex flex-col gap-4 md:(flex-row gap-16)">
      <span id={props.name.toLowerCase()} class="absolute -top-24"></span>
      <div class={`flex flex-col items-start gap-4 md:w-1/2 ${
        props.order == "standard" ? "order-last md:order-first" : "order-last" }`}>
        <div class="flex flex-col gap-2">
          <p class="font-display font-bold text-indigo-700 text-2xl md:(text-3xl)">{props.name}</p>
          <p class="md:text-lg">{props.description}</p>
        </div>
        {props.buttonText && <BaseButton style="primary" text={props.buttonText} href={`services/${props.name.toLowerCase()}`} />}
      </div>
      <img class="md:w-1/2" src={`/illustrations/${props.illustration}.svg`} alt="" />
    </section>
  )
}
