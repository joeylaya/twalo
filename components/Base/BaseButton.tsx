
interface ButtonProps {
  style: "primary" | "secondary",
  text: string,
  type?: string,
  href?: string
}

export function BaseButton(props: ButtonProps) {
  const LinkButton = () => {
    return (
      <a href={props.href}>
        <button type={props.type ? props.type : "button"} class={`flex rounded-full flex-none whitespace-nowrap px-6 py-2 ${props.style == "primary" ? "bg-indigo-500 shadow hover:bg-indigo-700 transform transition-colors ease-in-out duration-300" : ""}`}>
          <p class={props.style == "primary" ? "text-white font-medium text-lg" : "text-indigo-500 font-semibold text-lg transform transition-colors ease-in-out duration-300 hover:text-indigo-700"}>{props.text}</p>
        </button>      
      </a>
    )
  }

  const ActionButton = () => {
    return (
      <button type={props.type ? props.type : "button"} class={`flex rounded-full flex-none whitespace-nowrap px-6 py-2 ${props.style == "primary" ? "bg-indigo-500 shadow hover:bg-indigo-700 transform transition-colors ease-in-out duration-300" : ""}`}>
        <p class={props.style == "primary" ? "text-white font-medium text-lg" : "text-indigo-500 font-semibold text-lg transform transition-colors ease-in-out duration-300 hover:text-indigo-700"}>{props.text}</p>
      </button>      
    )
  }

  return (
    <>
      {props.href && <LinkButton />}
      {!props.href && <ActionButton />}
    </>
  );
}
