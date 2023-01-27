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
import type { NextPage } from "next";
import { signIn } from "next-auth/react";

import { OAuthButtonGroup } from "../client/components/o-auth-providers";

import { Page } from "../client/layout/page";

const LoginPage: NextPage = () => {
  const handleSignIn = () => void signIn();

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
              <Button variant="outline">Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Page>
  );
};

export default LoginPage;
