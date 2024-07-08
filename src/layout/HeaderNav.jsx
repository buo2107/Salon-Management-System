import { Link as ReactRouterLink } from "react-router-dom";
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
      <Avatar name="user" bg={"blue"} src={personsImage.user_img} />
      <Spacer />
      <Wrap direction="row-reverse" spacing="32px">
        <WrapItem>
          <ChakraLink
            _hover={{ textDecoration: "none" }}
            as={ReactRouterLink}
            to="/home"
          >
            <Center>
              <Icon as={HomeIcon} boxSize="32px" />
            </Center>
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink
            _hover={{ textDecoration: "none" }}
            as={ReactRouterLink}
            to="/customers"
          >
            <Center bg="red.200">
              <Text fontSize="2xl">Customer</Text>
            </Center>
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <Center bg="green.200">
            <Text fontSize="2xl">Customer</Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center bg="tomato">
            <Text fontSize="2xl">Customer</Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center bg="blue.200">
            <Text fontSize="2xl">Customer</Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center bg="blue.200">
            <Text fontSize="2xl">Customer</Text>
          </Center>
        </WrapItem>
      </Wrap>
    </Flex>
  );
}

export default HeaderNav;
