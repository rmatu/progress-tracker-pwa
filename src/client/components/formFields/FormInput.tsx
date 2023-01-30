import type { InputProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import { useController } from "react-hook-form";

const FormInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
}: UseControllerProps<T> & InputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
    formState: { isSubmitting },
  } = useController({
    control,
    name,
  });

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{name}</FormLabel>
      <Input
        disabled={isSubmitting}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        value={value}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export { FormInput };
