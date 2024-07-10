import { defineStyleConfig } from "@chakra-ui/react";

export const Link = defineStyleConfig({
  baseStyle: {
    _hover: { textDecoration: "none" },
  },
  variants: {
    navLink: {
      _hover: { color: "primary.400" },
      _activeLink: { color: "primary.500" },
      p: "2",
    },
    homeLink: {
      p: "12px",
      borderRadius: "100%",
      border: "2px solid",
      borderColor: "primary.400",
      color: "primary.400",
      _hover: {
        textDecoration: "none",
        bg: "primary.400",
        color: "#fff",
      },
      _activeLink: { bg: "primary.500", color: "#fff" },
    },
  },
});
