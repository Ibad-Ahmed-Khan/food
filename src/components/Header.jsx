import {
  Flex,
  SimpleGrid,
  Text,
  useDisclosure,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import MyAccount from "./MyAccount";
import Categories from "../pages/Categories";

const Header = () => {
  return (
    <SimpleGrid
      alignItems="center"
      justifyContent="center"
      color="#000"
      bg="#fff"
      pos="fixed"
      letterSpacing="1px"
      fontWeight="bold"
      w="full"
      p="4"
      columns="2"
      zIndex="111"
      // _hover={{
      //   textDecoration: "none",
      //   "& > span": {
      //     opacity: 1,
      //     h: "100%",
      //     w: "24%",
      //     opacity: "0.2",
      //   },
      //   "& > spanTwo": {
      //     opacity: 1,
      //     h: "100%",
      //     w: "76%",
      //     opacity: "0.2",
      //   },
      // }}
    >
      <Box
        as="spanTwo"
        position="absolute"
        top="50%"
        right="0%"
        transform="translate(0%,-50%)"
        width="2px"
        h="100%"
        backgroundColor="aqua"
        opacity="0.1"
        transition=".3s ease-in-out"
      ></Box>
      <Box
        as="span"
        position="absolute"
        left="0%"
        top="50%"
        transform="translate(0%,-50%)"
        width="2px"
        h="100%"
        backgroundColor="crimson"
        opacity="0.1"
        transition=".3s ease-in-out"
      ></Box>
      <Text fontSize="lg">
        <Logo />
      </Text>
      <Flex align="center" justify="center" gap="2rem">
        <ChakraLink
          fontWeight="500"
          fontFamily={"Fredoka ,sans-serif"}
          as={ScrollLink}
          to="Home"
          smooth={true}
          duration={500}
          position="relative"
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "crimson",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "crimson",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}

          // Apply hover style
        >
          Home
        </ChakraLink>
        <ChakraLink
          fontWeight="500"
          fontFamily={"Fredoka ,sans-serif"}
          as={ScrollLink}
          to="About"
          smooth={true}
          duration={500}
          position="relative"
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "crimson",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "crimson",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}

          // Apply hover style
        >
          About
        </ChakraLink>
        <ChakraLink
          fontWeight="500"
          fontFamily={"Fredoka ,sans-serif"}
          as={ScrollLink}
          to="Contact"
          smooth={true}
          duration={500}
          position="relative"
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "crimson",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "crimson",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}

          // Apply hover style
        >
          Contact
        </ChakraLink>
        <ChakraLink
          fontWeight="500"
          fontFamily={"Fredoka ,sans-serif"}
          as={ScrollLink}
          to="Categories"
          smooth={true}
          duration={500}
          position="relative"
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          _hover={{
            textDecoration: "none", // Remove default underline
            _after: {
              width: "100%",
            },
            color: "crimson",
          }}
          _after={{
            content: "''",
            width: "0",
            height: "1.3px",
            transition: "width .25s ease-in-out",
            backgroundColor: "crimson",
            position: "absolute",
            top: "-10%",
            left: "-50%",
            transform: " translate(50%,50%) ",
          }}

          // Apply hover style
        >
          <Categories />
        </ChakraLink>
        <MyAccount hoverColor="crimson" />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
