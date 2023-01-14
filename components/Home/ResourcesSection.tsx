import { BaseButton } from "../Base/BaseButton.tsx"
import { PostPreview } from "../Blog/PostPreview.tsx"

export function ResourcesSection(props: PostPreview) {
  return (
    <section class="py-8 w-full items-center flex flex-col gap-8 md:(flex-row gap-16 justify-between items-end)">
      <img class="order-last md:(w-1/2 order-first)" src="/illustrations/raising-hand.svg" alt="" />
      <div class="flex flex-col gap-4 items-end">
        <a href={`blog/${props.slug}`}>
          <PostPreview {...props} truncated={true} new={true} />
        </a>
        <BaseButton style="primary" text="View all posts" href={`blog`} />     
      </div>
    </section>
  )
}
