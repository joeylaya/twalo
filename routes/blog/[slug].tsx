import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { hygraph } from "../../hygraph.ts";
import { GET_POST } from "../../graphql/getPost.ts";
import BaseLayout from "../../components/Base/BaseLayout.tsx";
import { convertDate } from "../../utils/date.ts";
import { Tag } from "../../components/Base/BaseTag.tsx";
import { BaseButton } from "../../components/Base/BaseButton.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const slug = ctx.params.slug
    const data = await hygraph.request(GET_POST, {slug: slug})
    const resp = await ctx.render(data)
    return resp
  }
}

export default function Post(props: PageProps) {
  const post = props.data.post

  return (
    <BaseLayout seo={post.seo}>
      <div class="flex flex-col gap-8">
        <div class="-mt-8 -mx-4 md:-mx-16 h-48 md:h-64">
          <img
            class="w-full md:h-[24rem] md:object-none"
            src={post.coverImage.url}
            alt={post.coverImage.altText} />           
        </div>
        <div class="md:(mx-[20%]) flex flex-col gap-8 bg-white p-8 rounded-2xl">
          <header class="flex flex-col gap-6">
          <span class="bg-gradient-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">
            <h1 class="font-bold text-3xl md:text-5xl">{post.title}</h1></span>
            {post.tags && <div class="flex flex-wrap gap-2 order-first">
              {post.tags.map((tag: string, index: number) => (
                <Tag tag={tag} index={index} />
              ))}
            </div>}
            <div class="flex gap-4 items-center">
              <img
                class="w-8"
                src={post.author.picture.url}
                alt={post.author.picture.altText} />
              <div>
                <p class="font-bold">{post.author.name}</p>
                <p class="text-sm -mt-1">{convertDate(post.date)}</p>
              </div>
            </div>
          </header>
          <div class="flex flex-col gap-4" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
        </div>
        <div class="flex justify-center">
            <BaseButton style="primary" text="Back to all posts" href="../blog" />
          </div>
      </div>  
    </BaseLayout>
  )
}
