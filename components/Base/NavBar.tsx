import NavToggle from "../../islands/NavToggle.tsx";

export function NavBar() {
  return (
    <div class="z-50 fixed w-full h-16 p-4 flex justify-between items-center md:(h-24) bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
      <a href="http://localhost:8000/">
        <img class="w-28 md:w-40" src="/logo.svg" alt="" />
      </a>
      <NavToggle />
    </div>
  );
}
