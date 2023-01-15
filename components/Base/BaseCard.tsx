import { IconPaths, iconPaths } from "../../utils/icons.ts"

export interface BaseCardProps {
  style: "standard" | "dark" | "light",
  width: string,
  title: string,
  text: string,
  icon?: keyof IconPaths
}

export function BaseCard(props: BaseCardProps) {
  let iconPath = ""
  if (props.icon) {
    iconPath = iconPaths[props.icon]
  }

  return (
    <section class={`p-6 rounded-2xl flex flex-col gap-2 items-center shadow ${props.width} ${
      props.style == "standard"
        ? "bg-indigo-500"
        : props.style == "dark"
          ? "bg-indigo-800"
          : "bg-white" }`}>
      {props.icon && <div class={`m-4 ${props.style == "light" ? "text-indigo-500" : "text-white"}`}>
        <svg class="fill-current h-16 w-16" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: iconPath}}></svg>
      </div>}
      <header>
        <h2 class={`text-2xl md:(text-3xl) text-center font-bold ${
          props.style == "light"
            ? "text-indigo-700"
            : "text-white" }`}>
          {props.title}
        </h2>
      </header>  
      <p class={`md:text-lg ${
        props.style == "light"
        ? "text-neutral-900"
        : "text-white" }`}>
        {props.text}
      </p>        
    </section>    
  )
}
