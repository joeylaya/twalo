import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { hygraph } from "../../hygraph.ts";
import { GET_RECENT_POST_LINKS } from "../../graphql/getRecentPostLinks.ts";

const siteMap = [
  {
    header: {
      slug: "services",
      name: "Services"
    },
    list: [
      {
        slug: "services/training",
        name: "Training"
      },
      {
        slug: "services#advising",
        name: "Advising"
      },
      {
        slug: "services#mediation",
        name: "Mediation"
      },
      {
        slug: "services#curation",
        name: "Curation"
      },
    ]
  },
  {
    header: {
      slug: "about",
      name: "About"
    },
    list: [
      {
        slug: "about#our-approach",
        name: "Our Approach"
      },
      {
        slug: "about#past-clients",
        name: "Past Clients"
      },
      {
        slug: "about#facilitator",
        name: "Facilitator"
      }
    ]
  }
]

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const data = await hygraph.request(GET_RECENT_POST_LINKS)
    console.log(data)
    // const postList = data.posts.map((post: {slug: string, title: string}) => ({
    //   "slug": post.slug,
    //   "name": post.title
    // }))
    // siteMap.push(
    //   {
    //     "header": {
    //       "slug": "blog",
    //       "name": "Blog"
    //     },
    //     "list": postList
    //   }
    // )
    // console.log(siteMap)
    const resp = await ctx.render()
    return resp
  }
}

export function Footer() {

  return (
    <div class="bg-gray-200 h-60 mt-8 p-8 flex flex-col justify-between z-40">
      <div class="flex justify-between">
        <div class="w-32 md:w-48 flex flex-col gap-4">
          <a href="/">
            <img src="/logo.svg" alt="" />
          </a>
          <p class="font-semibold">Educational Consulting for Youth Liberation</p>
        </div>
        <div class="flex gap-16">
          {siteMap.map((group) => (
            <div class="flex flex-col gap-4">
              <a href={`/${group.header.slug}`}>
                <p class="font-semibold text-sm">{group.header.name}</p>
              </a>
              <div class="flex flex-col gap-1">
                {group.list.map((link) => (
                  <a href={`/${link.slug}`}>
                    <p class="text-sm">{link.name}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="flex justify-between">
          <p class="text-sm">Copyright 2023 Twalo LLC. All rights reserved.</p>
          <div class="flex gap-8 items-center">
            <div class="flex gap-2 items-center">
              <p class="text-sm font-semibold">Designed & Built by</p>
              <img class="h-6" src="/vivipary.png" alt="" />
            </div>
            <div class="flex gap-2 items-center">
              <p class="text-sm font-semibold">Illustrations by</p>
              <img class="h-5" src="/storyset.png" alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}
