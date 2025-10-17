import React from "react";
import UserTable from "./UserTable";

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
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
