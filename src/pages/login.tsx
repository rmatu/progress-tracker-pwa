import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import { signIn } from "next-auth/react";
import { useContext } from "react";

import { OAuthButtonGroup } from "../client/components/o-auth-providers";
import { AppContext } from "../client/context/AppContext";

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

const LoginPage: NextPage = () => {
  const { setIsLoading } = useContext(AppContext);

  // https://github.com/react-hook-form/react-hook-form/discussions/8622?sort=old#discussioncomment-3950935
  const handleSignIn = () => {
    setIsLoading(true);
    void signIn("discord");
  };

  return (
    <Page center>
      <Stack
        className="border border-slate-50/[0.06] shadow-lg lg:border-b"
        spacing="8"
        py={6}
        sx={{
          backgroundColor: "rgb(30 41 59/var(--tw-bg-opacity))",
          borderRadius: "0.75rem",
        }}
      >
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don&apos;t have an account?</Text>
              <Button variant="link" color="primary">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          mt={0}
          pb={{ base: "0", sm: "5" }}
          px={{ base: "4", sm: "10" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="email" type="password" />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" color="primary" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="outline" onClick={handleSignIn}>
                Sign in
              </Button>
              <HStack opacity="0.5">
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup setIsPageLoadingOnRedirect={setIsLoading} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Page>
  );
};

export default LoginPage;
