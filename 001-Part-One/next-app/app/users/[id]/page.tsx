import React from "react";

interface UserDetailPageProps {
  params: {
    id: number;
  };
}

const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const { id } = await params;
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
