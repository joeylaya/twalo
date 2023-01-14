import { IconPaths, iconPaths } from "../../utils/icons.ts"

interface BaseSelectorProps {
  state: "standard" | "selected"
  text: string,
  icon: keyof IconPaths
}

export function BaseSelector(props: BaseSelectorProps) {
  const iconPath = iconPaths[props.icon]
  return (
    <button type="button" class={
      `p-6 rounded-2xl flex flex-col gap-4 items-center shadow ${
        props.state == "standard"
          ? "bg-white text-indigo-600 hover:text-indigo-800"
          : "bg-indigo-600 text-indigo-50 hover:bg-indigo-700" }`}>
      {props.state == "standard" ? "standard" : ""}
      <div>
        <svg class="fill-current h-12 w-12" viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: iconPath}}></svg>
      </div>
      <p class="font-bold text-xl md:text-3xl">{props.text}</p>
    </button>
  )
}
