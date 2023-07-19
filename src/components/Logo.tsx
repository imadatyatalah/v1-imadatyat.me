import Link from "next/link";

const Logo = () => (
  <div className="select-none">
    <Link
      className="text-2xl font-semibold hover:underline"
      aria-label="Imad Atyat-Allah's logo"
      href="/"
    >
      imadatyat.me
    </Link>
  </div>
);

export default Logo;
