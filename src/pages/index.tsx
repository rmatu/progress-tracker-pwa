import type { GetServerSideProps } from "next";
import { type NextPage } from "next";

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

const Home: NextPage<{ access_token: string }> = () => {
  return <Page>main Page</Page>;
};

export default Home;
