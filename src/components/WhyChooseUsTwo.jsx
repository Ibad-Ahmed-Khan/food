import { Flex, Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { FaBus } from "react-icons/fa";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const WhyChooseUsTwo = () => {
  return (
    <Flex flexDirection="column" align="center" justify="center">
      <Text fontSize="4xl" textAlign="center" fontFamily={"Protest Riot"}>
        Why Choose Us
      </Text>
      <SimpleGrid columns={{ base: "1", md: "2", lg: "4" }} gap="2rem" p="14">
        <Flex
          p="4"
          gap="1rem"
          data-aos="fade-left"
          data-aos-duration="1500"
          border={{ base: "2px solid crimson", md: "none", lg: "none" }}
          textAlign="center"
          flexDirection="column"
          align="center"
          justify="center"
          lineHeight="2rem"
          fontFamily={"Fredoka ,sans-serif"}
          fontWeight="300"
          cursor="pointer"
          pos="relative"
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
              w: "50%",
              opacity: "0.6",
            },
          }}
        >
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
            as="span"
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
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            modi.
          </Text>

          <IoEllipsisVerticalSharp size="1.6rem" color="crimson" />
          <FaBus size="3rem" color="crimson" />
        </Flex>
        <Flex
          p="4"
          gap="1rem"
          data-aos="fade-right"
          data-aos-duration="1500"
          border={{ base: "2px solid aqua", md: "none", lg: "none" }}
          textAlign="center"
          flexDirection="column-reverse"
          align="center"
          justify="center"
          lineHeight="2rem"
          fontFamily={"Fredoka ,sans-serif"}
          fontWeight="300"
          pos="relative"
          cursor="pointer"
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
              w: "50%",
              opacity: "0.6",
            },
          }}
        >
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
            as="span"
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
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            modi.
          </Text>

          <IoEllipsisVerticalSharp size="1.6rem" color="aqua" />
          <FaBus size="3rem" color="aqua" />
        </Flex>
        <Flex
          p="4"
          gap="1rem"
          data-aos="fade-left"
          data-aos-duration="1500"
          border={{ base: "2px solid crimson", md: "none", lg: "none" }}
          textAlign="center"
          flexDirection="column"
          align="center"
          justify="center"
          lineHeight="2rem"
          fontFamily={"Fredoka ,sans-serif"}
          fontWeight="300"
          pos="relative"
          cursor="pointer"
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
              w: "50%",
              opacity: "0.6",
            },
          }}
        >
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
            as="span"
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
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            modi.
          </Text>

          <IoEllipsisVerticalSharp size="1.6rem" color="crimson" />
          <FaBus size="3rem" color="crimson" />
        </Flex>
        <Flex
          p="4"
          gap="1rem"
          data-aos="fade-right"
          data-aos-duration="1500"
          border={{ base: "2px solid aqua", md: "none", lg: "none" }}
          textAlign="center"
          flexDirection="column-reverse"
          align="center"
          justify="center"
          lineHeight="2rem"
          fontFamily={"Fredoka ,sans-serif"}
          fontWeight="300"
          pos="relative"
          cursor="pointer"
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
              w: "50%",
              opacity: "0.6",
            },
          }}
        >
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
            as="span"
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
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            modi.
          </Text>

          <IoEllipsisVerticalSharp size="1.6rem" color="aqua" />
          <FaBus size="3rem" color="aqua" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default WhyChooseUsTwo;
