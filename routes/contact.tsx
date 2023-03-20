import BaseLayout from "../components/Base/BaseLayout.tsx";
import ContactForm from "../islands/ContactForm.tsx"

export default function Services() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
    image: {
      id: "",
      url: "logo.svg",
      altText: "Twalo Logo"
    }
  };

  const Fallback = () => {
    return (
      <div>
        Please send us an email at create@vivipary.org. We look forward to connecting soon!
      </div>
    )
  }

  return (
    <BaseLayout seo={seo}>
      <ContactForm />
    </BaseLayout>
  );
}
