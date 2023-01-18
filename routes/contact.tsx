import BaseLayout from "../components/Base/BaseLayout.tsx";

export default function Services() {
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      <div>
        Please send us an email at create@vivipary.org. We look forward to connecting soon!
      </div>
    </BaseLayout>
  );
}
