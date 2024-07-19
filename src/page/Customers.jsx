import "./Customers.css";
import { personsImage } from "../utils/image";
import { iconsImgs } from "../utils/icon";
import CustomerCard from "../component/CustomerCard";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

function Customers() {
  return (
    <>
      <Flex direction={"row"}>
        {/* Customer list area */}
        <Box>
          {/* List header */}
          <Flex gap={8}>
            <IconButton
              colorScheme="primary"
              aria-label="Add new customer"
              icon={<AddIcon />}
            />
            <Select
              placeholder="Filter with..."
              borderColor="red"
              variant="fill"
            >
              <option value="option1">Female</option>
              <option value="option2">Male</option>
            </Select>
          </Flex>

          <Wrap direction={"column"} spacing={2} p={5} bg="pink" align="center">
            <WrapItem>
              <Card w={350}>
                <CardHeader>
                  <Flex spacing="8" justify={"center"} align={"center"}>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />

                      <Box>
                        <Heading size="sm">Segun Adebayo</Heading>
                        <Text>Creator, Chakra UI</Text>
                      </Box>
                    </Flex>
                    <IconButton
                      variant="ghost"
                      colorScheme="gray"
                      aria-label="edit"
                      icon={<ViewIcon />}
                    />
                  </Flex>
                </CardHeader>
              </Card>
            </WrapItem>
          </Wrap>
        </Box>

        <Spacer />

        {/* Customer detailed data area */}
        <Box>add</Box>
      </Flex>
    </>
  );
}

export default Customers;
