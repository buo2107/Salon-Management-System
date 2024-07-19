import { NavLink as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Center,
  Wrap,
  WrapItem,
  Avatar,
  Link as ChakraLink,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { personsImage } from "../utils/image";
import { HomeIcon } from "@heroicons/react/24/solid";

function UserInfo() {
  return (
    <Box borderRadius="100%" border="1px solid" borderColor="primary.500">
      <Avatar name="峰" src={personsImage.user_img} />
    </Box>
  );
}

function NavigationBar() {
  const navList = ["customers", "product", "sales", "calander", "financial"];
  return (
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

      {navList.map((item) => (
        <WrapItem key={item}>
          <ChakraLink variant="navLink" as={ReactRouterLink} to={`/${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </ChakraLink>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function HeaderNav() {
  return (
    <Flex
      p={3}
      px={10}
      align={"center"}
      bg="rgba(255, 255, 255, 0.93)"
      boxShadow="0 1.2rem 3.2rem rgba(0, 0, 0, 0.07)"
    >
      <UserInfo />

      <Spacer />

      <NavigationBar />
    </Flex>
  );
}

export default HeaderNav;
