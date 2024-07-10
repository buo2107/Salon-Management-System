import { NavLink as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Center,
  Wrap,
  WrapItem,
  Container,
  Avatar,
  Link as ChakraLink,
  Spacer,
  Image,
  Icon,
  background,
} from "@chakra-ui/react";
import { personsImage } from "../utils/image";
import { HomeIcon } from "@heroicons/react/24/solid";

function HeaderNav() {
  return (
    <Flex
      p={5}
      px={10}
      align={"center"}
      bg="rgba(255, 255, 255, 0.93)"
      boxShadow="0 1.2rem 3.2rem rgba(0, 0, 0, 0.07)"
    >
      <Box borderRadius="100%" border="1px solid" borderColor="primary.500">
        <Avatar name="峰" src={personsImage.user_img} />
      </Box>
      <Spacer />
      <Wrap
        direction="row-reverse"
        spacing="4"
        align="center"
        fontSize="xl"
        fontWeight="600"
        transition="all 0.3s"
      >
        <WrapItem>
          <ChakraLink variant="homeLink" as={ReactRouterLink} to="/home">
            <Center>
              <Icon as={HomeIcon} boxSize="32px" />
            </Center>
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink variant="navLink" as={ReactRouterLink} to="/customers">
            Customer
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink variant="navLink" as={ReactRouterLink} to="/product">
            Product
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink variant="navLink" as={ReactRouterLink} to="/sales">
            Sales
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink variant="navLink" as={ReactRouterLink} to="/calander">
            Calander
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink variant="navLink" as={ReactRouterLink} to="/financial">
            Financial
          </ChakraLink>
        </WrapItem>
      </Wrap>
    </Flex>
  );
}

export default HeaderNav;
