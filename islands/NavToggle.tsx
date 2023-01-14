import { useState } from "preact/hooks";
import { NavSection } from "../components/Base/NavSection.tsx";

export default function NavToggle() {
  const [navExpanded, toggleNav] = useState(false);

  return (
    <div class="flex flex-col items-end gap-4 self-start">
      <button class="h-8 flex items-center md:hidden" onClick={() => toggleNav(!navExpanded)}>
        Nav
      </button>
      {navExpanded && <NavSection display="mobile" />}
      <NavSection display="desktop" />
    </div>
  );
}
