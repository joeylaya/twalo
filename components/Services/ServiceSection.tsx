import { BaseButton } from "../Base/BaseButton.tsx";
import { BaseCard } from "../Base/BaseCard.tsx";

interface ServiceSectionProps {
  name: string,
  description: string,
  illustration: string,
  order: "standard" | "reverse",
  buttonText?: string
}

export function ServiceSection(props: ServiceSectionProps) {
  return (
    <section class="relative items-center flex flex-col gap-8 md:(flex-row gap-16)">
      <span id={props.name.toLowerCase()} class="absolute -top-24"></span>
      <div class={`flex flex-col items-start gap-4 ${
          props.order == "standard" ? "order-first" : "order-last" }`}>
        <BaseCard style="light" width="w-auto" title={props.name} text={props.description} />
        {props.buttonText && <BaseButton style="primary" text={props.buttonText} href={`services/${props.name.toLowerCase()}`} />}
      </div>
      <img src={`/illustrations/${props.illustration}.svg`} alt="" />
    </section>
  )
}
