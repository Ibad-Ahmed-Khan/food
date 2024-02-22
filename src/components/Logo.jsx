import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Logo = () => {
  return (
    <ChakraLink
      fontWeight="500"
      fontFamily={"Fredoka ,sans-serif"}
      as={ScrollLink}
      zIndex="111"
      to="Home"
      smooth={true}
      duration={500}
      position="relative"
      fontSize="xl"
      _hover={{
        textDecoration: "none",
        color: "crimson",
        _after: {
          width: "100%",
          opacity: "0.8",
        },
        _before: {
          width: "100%",
          opacity: "0.8",
        },
        "& > span": {
          opacity: 1, // Ensure span is visible on hover
          h: "100%",
          w: "24%",
          opacity: "0.6",
        },
        "& > spanTwo": {
          opacity: 1, // Ensure span is visible on hover
          h: "100%",
          w: "76%",
          opacity: "0.6",
        },
      }}
      _after={{
        content: "''",
        width: "0",
        height: "2px",
        backgroundColor: "aqua",
        position: "absolute",
        top: "-30%",
        left: "-50%",
        transform: "translate(50%,50%)",
        opacity: "0.1",
        transition: ".3s ease-in-out",
      }}
      _before={{
        content: "''",
        width: "0",
        height: "2px",
        backgroundColor: "crimson",
        position: "absolute",
        top: "130%",
        right: "-50%",
        transform: "translate(-50%,-50%)",
        opacity: "0.1",
        transition: ".3s ease-in-out",
      }}
    >
      Ibad Ahmed
      <Box
        as="span"
        position="absolute"
        top="50%"
        right="0%"
        transform="translate(0%,-50%)"
        width="2px"
        h="0%"
        backgroundColor="aqua"
        opacity="0.1"
        transition=".3s ease-in-out"
      ></Box>
      <Box
        as="spanTwo"
        position="absolute"
        left="0%"
        top="50%"
        transform="translate(0%,-50%)"
        width="2px"
        h="0%"
        backgroundColor="crimson"
        opacity="0.1"
        transition=".3s ease-in-out"
      ></Box>
    </ChakraLink>
  );
};

export default Logo;
