import { convertDate } from "../../utils/date.ts"
import { Tag } from "../Base/BaseTag.tsx"

export interface PostPreview {
  id: string,
  slug: string,
  date: string,
  title: string,
  excerpt: string,
  tags: string[],
  coverImage: {
    id: string,
    url: string,
    altText: string
  },
  author: {
    id: string,
    name: string,
    picture: {
      id: string,
      url: string,
      altText: string
    }
  },
  truncated?: boolean,
  new?: boolean
}

export function PostPreview(props: PostPreview) {
  return (
    <article class="w-80 flex flex-col justify-between">
      <div class="w-80 h-40 relative z-10">
        <img
          class={`rounded-2xl shadow ${props.truncated ? '-ml-32 mt-8' : '-ml-8'}`}
          src={props.coverImage.url}
          alt={props.coverImage.altText} />
        {props.new && <div class={`absolute z-30 ${props.truncated ? 'top-4 right-28' : '-top-4 right-4'}`}>
          <Tag tag="New Post!" />
        </div>}
      </div>  
      <div class="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow relative z-20">
        {props.tags && <div class="flex flex-wrap gap-2">
          {props.tags.map((tag, index) => (
            <Tag tag={tag} index={index} />
          ))}
        </div>}
        <header>
          <h2 class="text-2xl font-bold text-indigo-600">{props.title}</h2>
        </header>
        <div class="flex flex-col gap-4">
          <p class="text-sm">{props.excerpt}</p>
          <div class="flex justify-between items-center text-sm">
            <div class="flex gap-2 items-center">
              <img
                class="w-6"
                src={props.author.picture.url}
                alt={props.author.picture.altText} />
              <p class="font-bold">{props.author.name}</p>
            </div>
            <p>{convertDate(props.date)}</p>
          </div>
        </div>       
      </div>
    </article>
  )
}
