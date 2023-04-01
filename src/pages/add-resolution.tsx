import type { SystemStyleObject } from "@chakra-ui/react";
import {
  Box,
  Button,
  Center,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { GetServerSideProps, NextPage } from "next";
import type {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StyledStack } from "../client/components/common";
import { FormInput } from "../client/components/formFields";
import { Page } from "../client/layout/page";
import {
  CreateResolutionInput,
  createResolutionSchema,
} from "../server/api/schema/resolution.schema";
import { getServerAuthSession } from "../server/auth";
import { api } from "../utils/api";

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

function SubmitButtons2({
  sx,
  onCancel,
}: {
  sx?: SystemStyleObject;
  onCancel: () => void;
}) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", mt: 6, ...sx }}
    >
      <Button variant="unstyled" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit">Submit</Button>
    </Box>
  );
}

const AddResolution: NextPage = () => {
  const { control, handleSubmit: reactHookFormHandleSubmit } =
    useForm<CreateResolutionInput>({
      resolver: zodResolver(createResolutionSchema),
      mode: "onTouched",
      reValidateMode: "onChange",
    });

  const { mutate } = api.resolutions.createResolution.useMutation();

  const onSubmitHandler: SubmitHandler<CreateResolutionInput> = (data) => {
    mutate(data);
  };
  const onCancel = () => console.log("xd");

  return (
    <Page>
      <Center h="80%">
        <StyledStack mt={6} width={400}>
          <Box
            as="form"
            px={8}
            onSubmit={reactHookFormHandleSubmit(onSubmitHandler)}
          >
            <Heading
              textAlign="center"
              size={useBreakpointValue({ base: "xs", md: "sm" })}
            >
              Crate new Resolution
            </Heading>
            <FormInput control={control} name="name" label="Name" />
            <SubmitButtons2 onCancel={onCancel} />
          </Box>
        </StyledStack>
      </Center>
    </Page>
  );
};

export default AddResolution;
