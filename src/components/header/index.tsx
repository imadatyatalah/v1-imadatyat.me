import Logo from "@/components/Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between h-[70px] sticky top-0 right-0 left-0 z-50 sticky-nav shadow-2xl border-b border-gray-800"
      id="global-header"
    >
      <Logo />

      <NavBar />
    </header>
  );
};

export default Header;
