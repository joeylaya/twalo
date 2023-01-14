import BaseLayout from "../components/Base/BaseLayout.tsx";
import { ApproachSection } from "../components/Home/ApproachSection.tsx";
import { HeroSection } from "../components/Home/HeroSection.tsx";
import { ResourcesSection } from "../components/Home/ResourcesSection.tsx";
import { ServicesSection } from "../components/Home/ServicesSection.tsx";

import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { hygraph } from "../hygraph.ts";
import { GET_RECENT_POST_PREVIEW } from "../graphql/getRecentPostPreview.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const data = await hygraph.request(GET_RECENT_POST_PREVIEW)
    const resp = await ctx.render(data)
    return resp
  }
}

export default function Home(props: PageProps) {
  const postPreview = props.data.posts[0]
  const seo = {
    title: "Twalo: Educational Consulting for Youth Liberation",
    description: "",
    keywords: [],
  };

  return (
    <BaseLayout seo={seo}>
      <HeroSection />
      <ResourcesSection {...postPreview} />
      <ServicesSection />
      <ApproachSection />
    </BaseLayout>
  );
}
