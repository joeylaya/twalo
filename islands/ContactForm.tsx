import { useEffect, useState } from "preact/hooks"
import { BaseButton } from "../components/Base/BaseButton.tsx"
import { BaseSelector } from "../components/Base/BaseSelector.tsx"
import { convertToSentenceCase } from "../utils/sentenceCase.ts"

type Service = "training" | "advising" | "mediation" | "curation" 

interface FormData {
  services: Service[]
  message: string
  contact: {
    email: string
    name: string
  }
}

const initialFormData: FormData = {
  services: [],
  message: "",
  contact: {
    email: "",
    name: ""
  }
}

const services = ["training", "advising", "mediation", "curation"] as Service[]
const progressDotPostitions = ["", "left-1/2 right-1/2 transform -translate-x-1/2", "right-0"]
const headers = ["What type of service(s) are you interested in?", "Is there anything else you’d like us to know?", "How should we get in touch?"]

export default function ContactForm() {
  const [formData, updateFormData] = useState(initialFormData)
  const [page, changePage] = useState(1)

  const ProgressBar = () => {
    return (
      <div class="relative w-64 h-4 bg-gray-300 rounded-2xl">
        {progressDotPostitions.map((dot, index) => (
          <div class={`
            absolute -top-2 w-8 h-8 rounded-full flex justify-center items-center
            ${dot}
            ${page == index + 1 ? "bg-indigo-400" : "bg-gray-400"}`}>
            <p class="text-white font-bold">{index + 1}</p>
          </div>
        ))}
      </div>
    )
  }

  const Header = () => {
    return (
      <div>
        <h2 class="font-bold text-xl md:text-3xl">{headers[page - 1]}</h2>
      </div>
    )
  }

  const ServiceSelector = (props: {service: Service}) => {
    let selected = formData.services.includes(props.service)
    
    const handleSelect = () => {
      const update = formData
      const index = update.services.findIndex((e) => e == props.service)
      if (index >= 0) {
        const start = update.services.slice(0, index)
        const end = update.services.slice(index + 1)
        update.services = start
        update.services.push(...end)
      } else {
        update.services.push(props.service)
      }
      updateFormData(update)
      selected = formData.services.includes(props.service)
    }

    return (
      <div onClick={() => handleSelect()}>
        {selected && 
          <BaseSelector
            state="selected"
            text={convertToSentenceCase(props.service)}
            icon={props.service} />}
        {!selected &&
        <BaseSelector
          state="standard"
          text={convertToSentenceCase(props.service)}
          icon={props.service} />}
      </div>
    )
  }

  const ServicesSelection = () => {
    return (
      <div class="flex gap-4">
        {services.map((service) => (
          <ServiceSelector key={service} service={service} />
        ))}
      </div>
    )
  }

  const NavButtons = () => {
    const handleBack = () => {
      changePage(page - 1)
    }
    const handleNext = () => {
      changePage(page + 1)
    }
    const handleSubmit = () => {
      console.log("submit")
    }
    return (
      <div class="flex justify-center gap-8">
        {page != 1 && <div onClick={() => handleBack()}>
          <BaseButton style="secondary" text="Back" />
        </div>}
        {page != 3 && <div onClick={() => handleNext()}>
          <BaseButton style="primary" text="Next" />
        </div>}
        {page == 3 && <div onClick={() => handleSubmit()}>
          <BaseButton style="primary" text="Submit" type="submit" />
        </div>}
      </div>
    )
  }

  return (
    <form action="" class="flex flex-col gap-8 items-center">
      <ProgressBar />
      <Header />
      <ServicesSelection />
      <NavButtons />
    </form>
  )
}
