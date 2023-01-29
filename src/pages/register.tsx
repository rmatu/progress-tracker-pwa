import type { GetServerSideProps, NextPage } from "next";
import { Page } from "../client/layout/page";
import { getServerAuthSession } from "../server/auth";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      props: {
        session,
      },
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

const RegisterPage: NextPage = () => {
  return <Page>RegisterPage</Page>;
};

export default RegisterPage;
