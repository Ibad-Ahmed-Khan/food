import {
  Flex,
  Text,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // Initialize AOS when the component mounts
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <VStack
      spacing="20"
      id="Contact"
      direction="column"
      align="center"
      justify="center"
      bg="crimson"
      color="#fff"
      paddingInline="2rem" // Adjusted property name
      minH="100vh"
      pt="130"
      pb="50"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Text
        data-aos="fade-top"
        data-aos-duration="1500"
        fontSize="4xl"
        color="#fff"
        textAlign="center"
        fontFamily={"Protest Riot"}
      >
        Contact Us
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3, xl: 3 }}
        gap="2rem"
        justifyContent="space-between"
        w="full"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Flex
          flexDirection="column"
          gap="1rem"
          p="10"
          align="center"
          justifyContent="center"
        >
          <Box as="div" data-aos="zoom-in" data-aos-duration="1500">
            {" "}
            {/* Adjusted Box wrapper */}
            <FaMapMarkerAlt size="2.3rem" style={{ marginRight: "0.5rem" }} />
          </Box>
          <Text
            data-aos="fade-right"
            data-aos-duration="1500"
            textAlign="center"
          >
            123 Main St, New York City, USA
          </Text>
          <Text
            data-aos="fade-right"
            data-aos-duration="1500"
            textAlign="center"
          >
            456 Elm St, Los Angeles, USA
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          gap="1rem"
          p="10"
          align="center"
          justifyContent="center"
        >
          <Box as="div" data-aos="zoom-in" data-aos-duration="1500">
            {" "}
            {/* Adjusted Box wrapper */}
            <FaEnvelope size="2.3rem" style={{ marginRight: "0.5rem" }} />
          </Box>
          <Text
            data-aos="fade-right"
            data-aos-duration="1500"
            textAlign="center"
          >
            Email: <Link href="mailto:info@example.com">info@example.com</Link>
          </Text>
          <Text
            data-aos="fade-right"
            data-aos-duration="1500"
            textAlign="center"
          >
            Email:{" "}
            <Link href="mailto:contact@example.com">contact@example.com</Link>
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          gap="1rem"
          p="10"
          align="center"
          justifyContent="center"
        >
          <Box as="div" data-aos="zoom-in" data-aos-duration="1500">
            {" "}
            <FaPhone size="2.3rem" style={{ marginRight: "0.5rem" }} />
          </Box>
          <Text
            data-aos="fade-left"
            data-aos-duration="1500"
            textAlign="center"
          >
            Phone: +1234567890
          </Text>
          <Text
            data-aos="fade-left"
            data-aos-duration="1500"
            textAlign="center"
          >
            Phone: +9876543210
          </Text>
        </Flex>
      </SimpleGrid>
    </VStack>
  );
};

export default Contact;
