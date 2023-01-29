import type { StackProps } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface StyledStackProps {
  children: ReactNode;
}

export const StyledStack: FC<StyledStackProps & StackProps> = ({
  children,
  ...rest
}) => {
  return (
    <Stack
      className="border border-slate-50/[0.06] shadow-lg lg:border-b"
      spacing="8"
      py={6}
      bg="background-secondary"
      borderRadius="0.75rem"
      {...rest}
    >
      {children}
    </Stack>
  );
};
