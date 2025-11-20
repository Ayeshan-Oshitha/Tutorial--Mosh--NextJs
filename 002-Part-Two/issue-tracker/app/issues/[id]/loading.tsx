import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Box, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = () => {
  return (
    <>
      <Box className="max-w-xl">
        <Skeleton />
        <Flex gap="4" mt="2" mb="4">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </Flex>
        <Card className="prose">
          <Skeleton count={3} />
        </Card>
      </Box>
    </>
  );
};

export default LoadingIssueDetailsPage;
