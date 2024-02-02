import Logo from "@/components/Logo";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <header
      className="sticky-nav sticky left-0 right-0 top-0 z-50 flex h-[70px] items-center justify-between border-b border-gray-800 shadow-2xl"
      id="global-header"
    >
      <Logo />

      <NavBar />
    </header>
  );
};

export default Header;
