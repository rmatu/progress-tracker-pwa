import { Box, Center, Heading, useBreakpointValue } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { GetServerSideProps, NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StyledStack } from "../client/components/common";
import { FormInput } from "../client/components/formFields";
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

const test = z.object({ login: z.string(), b: z.string() });
export type Test = z.infer<typeof test>;

const AddResolution: NextPage = () => {
  const { control, handleSubmit: reactHookFormHandleSubmit } = useForm<Test>({
    resolver: zodResolver(test),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return (
    <Page>
      <Center>
        <StyledStack mt={6} width={400}>
          <Box as="form" px={8}>
            <Heading
              textAlign="center"
              size={useBreakpointValue({ base: "xs", md: "sm" })}
            >
              Crate new Resolution
            </Heading>
            <FormInput control={control} name="login" />
            <FormInput control={control} name="b" />
          </Box>
        </StyledStack>
      </Center>
    </Page>
  );
};

export default AddResolution;
