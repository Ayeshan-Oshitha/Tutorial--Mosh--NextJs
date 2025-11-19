import Link from "next/link";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];

  return (
    <>
      <nav className="flex space-x-6 border-b border-gray-400 mb-5 px-5 h-14 items-center">
        <Link href="/">
          <FaBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
