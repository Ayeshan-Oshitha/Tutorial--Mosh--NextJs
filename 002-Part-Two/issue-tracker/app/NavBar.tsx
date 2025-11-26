"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Skeleton,
  Text,
} from "@radix-ui/themes";

const NavBar = () => {
  return (
    <>
      <nav className="border-b border-gray-400 mb-5 px-5 py-3">
        <Container>
          <Flex justify="between">
            <Flex align="center" gap="3">
              <Link href="/">
                <FaBug />
              </Link>
              <NavLinks />
            </Flex>
            <AuthStatus />
          </Flex>
        </Container>
      </nav>
    </>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return <Skeleton width="2rem" height="2rem" className="rounded-full" />;
  }

  if (status === "unauthenticated") {
    return (
      <Link href="/api/auth/signin" className="nav-link">
        Login
      </Link>
    );
  }

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session?.user!.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text>{session?.user?.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

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
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classNames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
