import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const MyButton = () => {
  return (
    <Flex
      fontWeight="400"
      fontFamily={"Fredoka ,sans-serif"}
      align="center"
      justify="center"
      bg="crimson"
      color="#fff"
    >
      <Button
        color="#fff"
        bg="crimson"
        textTransform="capitalize"
        borderRadius="none"
        p="2"
        transition="all .1s ease-in-out"
        _hover={{ bg: "none" }}
        _active={{ bg: "aqua" }}
        gap="5px"
      >
        Choose your meal plan
        <FaArrowAltCircleRight color="white" />
      </Button>
      {/* <Button bg="white" borderRadius="none">
        <FaArrowAltCircleRight color="crimson" />
      </Button> */}
    </Flex>
  );
};

export default MyButton;
