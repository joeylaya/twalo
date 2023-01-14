export function Tag(props: {tag: string, index?: number}) {
  let style = "" as "dark" | "light" | "standard"
  
  if (!props.index && props.index != 0) {
    style = "standard"
  } else if (props.index == 0 || props.index % 2 == 0) {
    style = "light"
  } else {
    style = "dark"
  }
  
  return (
    <div class={`
      rounded-full
      ${style == "standard"
        ? "bg-gradient-to-r from-indigo-400 to-indigo-800 opacity-90 px-4 py-1 text-lg text-white font-medium shadow"
        : style == "dark"
          ? "bg-indigo-700 text-white px-2 text-sm"
          : "bg-indigo-200 text-indigo-900 font-semibold px-2 text-sm"}
    `}>
      <p>{props.tag}</p>
    </div>
  )
}
