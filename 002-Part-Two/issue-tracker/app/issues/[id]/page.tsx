import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text, Grid, Box, Button } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkDown from "react-markdown";
import delay from "delay";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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

  await delay(3000); // Simulate network delay for demonstration purposes

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });

  if (!issue) {
    notFound();
  }

  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Box>
          <Heading>{issue.title}</Heading>
          <Flex gap="4" mt="2" mb="4">
            <IssueStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose">
            <ReactMarkDown>{issue.description}</ReactMarkDown>
          </Card>
        </Box>
        <Box>
          <Button>
            {" "}
            <Pencil2Icon />{" "}
            <Link href={`/issues/${issue.id}/edit`}> Edit issue </Link>
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default DetailPage;
