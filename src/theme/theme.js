import { extendTheme } from "@chakra-ui/react";
import { Link } from "./link";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#ffecdd",
      100: "#facfb5",
      200: "#f3b48a",
      300: "#ee9c5e",
      400: "#e88731",
      500: "#ce6117",
      600: "#a14110",
      700: "#74270a",
      800: "#471102",
      900: "#1d0000",
    },
  },
  styles: {
    global: {
      body: {
        color: "gray.600",
      },
      a: {
        textDecoration: "none",
      },
    },
  },
  components: {
    Link,
  },
});
