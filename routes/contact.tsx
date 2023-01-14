import BaseLayout from "../components/Base/BaseLayout.tsx"
import ContactForm from "../islands/ContactForm.tsx";

export default function Services() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      <ContactForm />
    </BaseLayout>
  );
}
