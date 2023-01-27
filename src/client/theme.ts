import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

export const colors = {
  nav: "#202123",
  "background-main": "#10172a",
  primary: "#FD9935",
};

const Input = defineStyleConfig({
  variants: {
    outline: {
      field: {
        borderColor: "rgb(248 250 252 / 0.6)",
      },
    },
  },

  defaultProps: {
    variant: "outline",
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base",
  },

  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },

  variants: {
    outline: {
      _hover: {
        background: "rgba(144, 205, 244, 0.12)",
      },
      borderColor: "rgb(248 250 252 / 0.6)",
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

export const theme = extendTheme({
  colors,
  components: {
    Button,
    Input,
  },
});
