import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { hygraph } from "../hygraph.ts";
import { GET_POST_PREVIEWS } from "../graphql/getPostPreviews.ts";
import { PostPreview } from "../components/Blog/PostPreview.tsx";
import BaseLayout from "../components/Base/BaseLayout.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const data = await hygraph.request(GET_POST_PREVIEWS)
    const resp = await ctx.render(data)
    return resp
  }
}

export default function Blog(props: PageProps) {
  const postPreviews = props.data.posts
  const seo = {
    title: "Twalo Blog",
    description: "",
    keywords: [],
    image: {
      id: "",
      url: "logo.svg",
      altText: "Twalo Logo"
    }
  }

  return (
    <BaseLayout seo={seo}>
      <div class="flex flex-wrap justify-center items-start gap-12">
        {postPreviews.map((postPreview: PostPreview, index: number) => (
          <a href={"/blog/"+postPreview.slug}>
            <PostPreview {...postPreview} new={index == 0 ? true : false} />
          </a>
        ))}
      </div>
    </BaseLayout>
  )
}
