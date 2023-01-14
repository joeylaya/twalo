const navButtons = [
  {
    slug: "",
    name: "Home"
  },
  {
    slug: "services",
    name: "Services",
  },
  {
    slug: "about",
    name: "About",
  },
  {
    slug: "blog",
    name: "Blog",
  },
  {
    slug: "contact",
    name: "Contact",
  },
];

interface NavSectionProps {
  display: "mobile" | "desktop";
}

export function NavSection(props: NavSectionProps) {
  return (
    <nav
      class={props.display == "desktop"
        ? "hidden md:(flex flex-row gap-16)"
        : "flex flex-col items-end md:(hidden)"}
    >
      {navButtons.map((navButton) => (
        <a href={"http://localhost:8000/" + navButton.slug}>
          <button class="bg-white rounded-full my-2 py-2 px-6 shadow md:(bg-transparent shadow-none) hover:text-indigo-500 transform transition-colors ease-in-out duration-300">
            <p class="font-bold text-xl">{navButton.name}</p>
          </button>
        </a>
      ))}
    </nav>
  );
}
