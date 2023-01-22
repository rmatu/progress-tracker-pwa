import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { Page } from "../client/layout/page";

const LoginPage: NextPage = () => {
  const handleSignIn = () => void signIn();

  return (
    <Page>
      <button onClick={handleSignIn}>Sign in</button>
    </Page>
  );
};

export default LoginPage;
