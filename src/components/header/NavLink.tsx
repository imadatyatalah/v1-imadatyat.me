import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: Props) => {
  const pathname = usePathname();

  const isCurrentRoute = pathname === href;

  const linkClassName = twMerge(
    "font-semibold pb-6 flex md:font-medium md:p-1 md:transition-all md:rounded-lg md:inline-block md:px-3 md:py-2 md:hover:bg-gray-800",
    isCurrentRoute
      ? "md:text-gray-200 md:bg-gray-800"
      : "md:text-gray-400 md:hover:text-[#dedede]",
  );

  return (
    <Link className={linkClassName} href={href}>
      {text}
    </Link>
  );
};

export default NavLink;
