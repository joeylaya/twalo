import { useState } from "preact/hooks";
import { NewMessageEmailParams } from "../routes/api/newMessageEmail.ts";
import { iconPaths } from "../utils/icons.ts";
import { convertArrayToList } from "../utils/list.ts";
type Service = "training" | "mediation" | "advising" | "curation";

export default function ContactForm() {
  interface ServiceOption {
    id: Service;
    label: string;
  }

  const servicesOptions: ServiceOption[] = [
    {
      id: "training",
      label: "Training",
    },
    {
      id: "advising",
      label: "Advising",
    },
    {
      id: "mediation",
      label: "Mediation",
    },
    {
      id: "curation",
      label: "Curation",
    },
  ];

  const initialServices: Record<Service, boolean> = {
    training: false,
    advising: false,
    mediation: false,
    curation: false,
  };

  type ContactInfo = "email" | "firstName" | "lastName";

  const initialContact: Record<ContactInfo, string> = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const initialValidations: Record<ContactInfo, boolean> = {
    email: false,
    firstName: false,
    lastName: false,
  };

  const [services] = useState(initialServices);
  const [message, setMessage] = useState("");
  const [contact] = useState(initialContact);
  const [validations] = useState(initialValidations);
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState(
    "unsent" as "unsent" | "success" | "error",
  );

  const handleCheckbox = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value as Service;
    const checked = target.checked;
    services[value] = checked;
    console.log(services);
  };

  const handleValidate = (target: HTMLInputElement) => {
    const name = target.name as ContactInfo;
    const value = target.value;
    validations[name] = value.length > 0 ? true : false;
    console.log(validations);
    let valid = true;
    for (const info in validations) {
      if (!validations[info as ContactInfo]) valid = false;
    };
    if (valid) setValidated(true);
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const params: NewMessageEmailParams = {
      services: "",
      message: message,
      email: contact.email,
      firstName: contact.firstName,
      lastName: contact.lastName,
    };
    const servicesList = [];
    for (const service in services) {
      if (services[service as Service]) servicesList.push(service);
    };
    params.services = convertArrayToList(servicesList);

    const res = await fetch(`/api/newMessageEmail`, {
      method: "POST",
      body: JSON.stringify(params),
    });

    if (res.ok) {
      setStatus("success")
    } else {
      setStatus("error")
    }
  };

  const FormPage = () => {
    return (
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
        <fieldset class="flex flex-wrap justify-center items-center gap-2 md:gap-4 md:flex-nowrap">
          <legend>What services are you interested in?</legend>
          {servicesOptions.map((service) => (
            <label
              for={service.id}
              class="cursor-pointer bg-white py-2 px-4 md:p-6 rounded-2xl flex md:flex-col gap-4 items-center shadow transform transition-colors ease-in-out duration-300"
            >
              <input
                type="checkbox"
                id={service.id}
                name="services"
                value={service.id}
                checked={services[service.id]}
                onChange={(e) => handleCheckbox(e)}
                class="hidden"
              />
              <svg
                class="h-8 w-8 md:(h-12 w-12)"
                viewBox="0 0 100 100"
                dangerouslySetInnerHTML={{ __html: iconPaths[service.id] }}
              >
              </svg>
              <p>{service.label}</p>
            </label>
          ))}
        </fieldset>
        <div class="w-full flex flex-col gap-1">
          <label htmlFor="{message}">
            Is there anything else you’d like us to know?
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e: Event) => {
              const target = e.target as HTMLInputElement;
              setMessage(target.value);
            }}
            class="bg-white rounded-2xl h-36 p-4 w-full"
          />
        </div>
        <div class="w-full flex flex-col gap-2 md:gap-4">
          <div class="w-full flex flex-col gap-1">
            <label htmlFor="{email}">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={(e: Event) => {
                const target = e.target as HTMLInputElement;
                contact.email = target.value;
                handleValidate(target);
              }}
              autoComplete="on"
              class="p-2 rounded"
            />
          </div>
          <div class="w-full flex flex-col md:flex-row gap-2">
            <div class="w-full flex flex-col gap-1">
              <label htmlFor="{firstName}">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={contact.firstName}
                onChange={(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  contact.firstName = target.value;
                  handleValidate(target);
                }}
                autoComplete="on"
                class="p-2 rounded"
              />
            </div>
            <div class="w-full flex flex-col gap-1">
              <label htmlFor="{lastName}">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={contact.lastName}
                onChange={(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  contact.lastName = target.value;
                  handleValidate(target);
                }}
                autoComplete="on"
                class="p-2 rounded"
              />
            </div>
          </div>
        </div>
        <div class="w-full flex">
          <button
            type="submit"
            disabled={!validated}
            class="flex disabled:(bg-gray-500 cursor-not-allowed) rounded-full flex-none whitespace-nowrap px-6 py-2 bg-indigo-500 shadow hover:bg-indigo-700 transform transition-colors ease-in-out duration-300"
          >
            <p class="text-white font-medium text-lg">
              Submit
            </p>
          </button>
        </div>
      </form>
    );
  };

  const SuccessPage = () => {
    return (
      <div>
        Thank you for your message! We look forward to connecting soon.
      </div>
    );
  };

  const ErrorPage = () => {
    return (
      <div>
        There was an error sending your message. We apologize for the
        inconvenience.
      </div>
    );
  };

  return (
    <div>
      {status == "unsent" && <FormPage />}
      {status == "success" && <SuccessPage />}
      {status == "error" && <ErrorPage />}
    </div>
  );
}
