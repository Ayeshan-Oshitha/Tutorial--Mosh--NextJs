import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const issueId = parseInt(id);

  if (isNaN(issueId)) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });

  if (!issue) {
    notFound();
  }

  return (
    <>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </>
  );
};

export default DetailPage;
