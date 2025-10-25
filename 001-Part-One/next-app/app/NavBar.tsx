"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 mb-4 space-x-5">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && <div>{session.user?.name}</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
