import type { GetServerSideProps, NextPage } from "next";
import { StyledStack } from "../client/components/common";
import { Page } from "../client/layout/page";
import { getServerAuthSession } from "../server/auth";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      props: {
        session,
      },
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

const AddResolution: NextPage = () => {
  return (
    <Page>
      <StyledStack mt={6}>hehe</StyledStack>
    </Page>
  );
};

export default AddResolution;
