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

export function Footer() {

  return (
    <div class="bg-gray-200 gap-8 md:(h-60 justify-between) mt-8 p-8 flex flex-col items-center z-40">
      <div class="flex flex-col items-center gap-8 md:(flex-row w-full justify-between)">
        <div class="md:(w-48 flex-col items-start) flex gap-4 items-center">
          <a href="/">
            <img class="w-8" src="/icon.svg" alt="" />
          </a>
          <p class="text-sm md:(text-base) font-semibold">Education Consulting for Youth Liberation</p>
        </div>
        <div class="flex gap-4 md:gap-16">
          {siteMap.map((group) => (
            <div class="flex flex-col items-center md:(items-start) gap-4">
              <a href={`/${group.header.slug}`}>
                <p class="font-semibold text-sm">{group.header.name}</p>
              </a>
              <div class="flex flex-col items-center md:(items-start) gap-1">
                {group.list.map((link) => (
                  <a href={`/${link.slug}`}>
                    <p class="text-sm">{link.name}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div class="flex flex-col gap-4">
            <a href={`/blog`}>
              <p class="font-semibold text-sm">Blog</p>
            </a>
            <a href={`/contact`}>
              <p class="font-semibold text-sm">Contact</p>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-4 md:(flex-row w-full justify-between)">
          <p class="text-sm order-last md:order-first">Copyright 2023 Twalo LLC. All rights reserved.</p>
          <div class="flex flex-col gap-2 md:(flex-row gap-8) items-center">
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
