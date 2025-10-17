import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface UsersPageProps {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const { sortOrder } = await searchParams;

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        Create New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
