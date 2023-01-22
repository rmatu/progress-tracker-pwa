import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { Page } from "../client/layout/page";

const LoginPage: NextPage = () => {
  const handleSignIn = () => void signIn();

  return (
    <Page>
      <Button
        onClick={handleSignIn}
        colorScheme="blue"
        variant="outline"
        _hover={{ background: "rgba(144, 205, 244, 0.12);" }}
      >
        Login
      </Button>
    </Page>
  );
};

export default LoginPage;
