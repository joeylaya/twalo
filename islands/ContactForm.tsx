import { useEffect, useState } from "preact/hooks"
import { BaseButton } from "../components/Base/BaseButton.tsx"
import { BaseSelector } from "../components/Base/BaseSelector.tsx"
import { env } from "../env.ts"
import { convertArrayToList } from "../utils/list.ts"
import { convertToSentenceCase } from "../utils/sentenceCase.ts"
import { sendinblue } from "../sendinblue.ts"
import { NewMessageEmailParams } from "../routes/api/newMessageEmail.ts"

type Service = "training" | "advising" | "mediation" | "curation" 

export interface ContactFormData {
  services: Service[]
  message: string
  contact: {
    email: string
    name: {
      first: string,
      last: string
    }
  }
}

const initialFormData: ContactFormData = {
  services: [],
  message: "",
  contact: {
    email: "",
    name: {
      first: "",
      last: ""
    }
  }
}

const services = ["training", "advising", "mediation", "curation"] as Service[]
const progressDotPostitions = ["", "left-1/2 right-1/2 transform -translate-x-1/2", "right-0"]
const headers = ["What type of service(s) are you interested in?", "Is there anything else you’d like us to know?", "How should we get in touch?"]

export default function ContactForm() {
  const [formData, updateFormData] = useState(initialFormData)
  const [page, changePage] = useState(1)
  const [submissionStatus, updateStatus] = useState("unsubmitted" as string | number)

  const ProgressBar = () => {
    return (
      <div class="pt-4 pb-8">
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
    const [selected, updateSelected] = useState(formData.services.includes(props.service))
    
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
      updateSelected(formData.services.includes(props.service))
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
      <div class="flex flex-wrap justify-center items-center gap-2 md:gap-4 md:flex-nowrap">
        {services.map((service) => (
          <ServiceSelector key={service} service={service} />
        ))}
      </div>
    )
  }

  const MessageBox = () => {
    const handleInput = (e) => {
      const update = formData
      update.message = e.target.value
      updateFormData(update)
    }

    return (
      <div class="w-full">
        <textarea class="bg-white rounded-2xl h-36 p-4 w-full" value={formData.message} onInput={handleInput} />
      </div>
    )
  }

  const ContactInfo = () => {
    const handleEmailInput = (e) => {
      const update = formData
      update.contact.email = e.target.value
      updateFormData(update)
    }
    const handleFirstNameInput = (e) => {
      const update = formData
      update.contact.name.first = e.target.value
      updateFormData(update)
    }
    const handleLastNameInput = (e) => {
      const update = formData
      update.contact.name.last = e.target.value
      updateFormData(update)
    }

    return (
      <div class="flex flex-col gap-2 md:gap-4">
        <div class="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input class="p-2 rounded" type="email" value={formData.contact.email} autoComplete="on" onInput={handleEmailInput} />          
        </div>
        <div class="flex flex-col md:flex-row gap-2">
          <div class="flex flex-col gap-1">
            <label htmlFor="name">First Name</label>
            <input class="p-2 rounded" type="text" value={formData.contact.name.first} autoComplete="on" onInput={handleFirstNameInput} />          
          </div>
          <div class="flex flex-col gap-1">
            <label htmlFor="name">Last Name</label>
            <input class="p-2 rounded" type="text" value={formData.contact.name.last} autoComplete="on" onInput={handleLastNameInput} />          
          </div>
        </div>
      </div>
    )
  }

  const sendNewMessageEmail = async (data: ContactFormData) => {
    console.log("sending")
    const params: NewMessageEmailParams = {
      services: convertArrayToList(data.services),
      message: data.message,
      email: data.contact.email,
      firstName: data.contact.name.first,
      lastName: data.contact.name.last
    }
    const res = await fetch( `/api/newMessageEmail`,
    {
      method: "POST",
      body: JSON.stringify(params)
    })
    return res
  }

  const NavButtons = () => {
    const handleBack = () => {
      changePage(page - 1)
    }
    const handleNext = () => {
      changePage(page + 1)
    }
    const handleSubmit = async () => {
      const res = await sendNewMessageEmail(formData)
      updateStatus(res.status)
      handleNext()
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
          <BaseButton style="primary" text="Submit" />
        </div>}
      </div>
    )
  }

  const ConfirmationPage = () => {
    return (
      <>
        {submissionStatus == 200 && <div>
          Thank you for your message! We look forward to connecting soon.
        </div>}
        {submissionStatus != 200 && <div>
          There was an error sending your message. We apologize for the inconvenience.
        </div>}
      </>
    )
  }

  return (
    <form action="" class="flex flex-col gap-4 md:gap-8 items-center h-96">
      {page != 4 && <ProgressBar />}
      <Header />
      {page == 1 && <ServicesSelection />}
      {page == 2 && <MessageBox />}
      {page == 3 && <ContactInfo />}
      {page == 4 && <ConfirmationPage />}
      {page != 4 && <NavButtons />}
    </form>
  )
}
