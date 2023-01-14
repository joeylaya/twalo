import { BaseCard } from "../Base/BaseCard.tsx"

const spaces = [
  {
    "name": "Schools & Universities",
    "description": "for faculty/staff and district administrators who wish to learn more about the challenges facing LGBTQ+ youth and how to create a safer and more supportive school environment",
    "icon": "schools"
  },
  {
    "name": "Mental Health Professionals & Counselors",
    "description": "shares new research and recommendations for best practices for mental health professionals",
    "icon": "counseling"
  },
  {
    "name": "GSAs & Resource Centers",
    "description": "workshops for student clubs and resource centers for retreats, mission development, membership recruitment, retention, leadership development, and organizing",
    "icon": "centers"
  },
]

export function SpacesSection() {
  return (
    <section class="relative w-full py-8 items-center flex flex-col gap-8 md:(flex-row gap-16)">
      <span id="spaces" class="absolute -top-24"></span>
      <div class="flex flex-col md:(flex-row items-start) gap-6">
        {spaces.map((space) => (
          <BaseCard style="light" width="w-auto md:w-1/3" title={space.name} text={space.description} icon={space.icon} />
        ))}
      </div>
    </section>
  )
}
