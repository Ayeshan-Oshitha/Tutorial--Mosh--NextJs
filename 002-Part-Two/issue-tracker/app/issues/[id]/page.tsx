import { prisma } from "@/prisma/client";
import { Grid, Box, Flex } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import delay from "delay";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const session = await getServerSession(authOptions);

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
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Box className="md:col-span-4">
          <IssueDetails issue={issue} />
        </Box>
        {session && (
          <Box>
            <Flex direction="column" gap="3">
              <AssigneeSelect />
              <EditIssueButton issueId={issue.id} />
              <DeleteIssueButton issueId={issue.id} />
            </Flex>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default DetailPage;
