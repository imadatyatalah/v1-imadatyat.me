"use client";

import { CloseIcon, MenuIcon } from "@/icons/MenuIcons";
import { useState } from "react";
import NavLink from "./NavLink";
import cn from "classnames";

const LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Guides", href: "/guides" },
  { title: "Projects", href: "/projects" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClassName = cn(
    isOpen
      ? "absolute h-screen z-10 top-[70px] left-0 w-full bg-[#090117] md:ml-0 md:static md:h-auto md:w-auto md:bg-transparent md:z-0"
      : "hidden md:block",
  );

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className={navClassName}>
        <ul className="flex flex-col md:flex-row">
          {LINKS.map(({ title, href }) => (
            <li
              className="mx-8 mt-6 border-b border-gray-700 md:mt-0 md:mr-0 md:border-none"
              onClick={closeMenu}
              key={title}
            >
              <NavLink href={href} text={title} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          type="button"
          className="flex items-center justify-center transition-all rounded-lg w-9 h-9 bg-gray-600 hover:ring-2 ring-gray-300"
          onClick={toggleMenu}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </>
  );
};

export default NavBar;
