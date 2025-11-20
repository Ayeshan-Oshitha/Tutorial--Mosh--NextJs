import { prisma } from "@/prisma/client";
import { Grid, Box } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import delay from "delay";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

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
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issueId={issue.id} />
        </Box>
      </Grid>
    </>
  );
};

export default DetailPage;
