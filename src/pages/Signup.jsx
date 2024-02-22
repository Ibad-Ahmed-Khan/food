import React, { useState } from "react";
import {
  Button,
  Flex,
  FormData,
  Text,
  Input,
  VStack,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGoogle,
  FaTimes,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Signup = ({ toggleModel }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Flex
      zIndex="2000"
      opacity="1"
      align="center"
      justify="center"
      color="white"
      w="100vw"
      h="100vh"
      data-aos="flip-up"
      data-aos-duration="600"
      fontFamily="Fredoka ,sans-serif"
      pos="absolute"
      top="0"
      left="0"
    >
      <VStack bg="#fff" p="10" borderRadius="md" w="800">
        <Flex w="full" align="center" justify="space-between">
          <Text fontWeight="400" color="#000">
            Login
          </Text>
          <FaTimes
            fontWeight="400"
            onClick={toggleModel}
            cursor="pointer"
            color="#000"
          />
        </Flex>
        <Input color="#000" placeholder="Email" type="email" />
        <InputGroup>
          <Input
            color="#000"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement>
            <Button
              variant="ghost"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
              size="2.5rem"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          w="full"
          color="#fff"
          bg="crimson"
          _hover={{ bg: "aqua" }}
          _active={{ bg: "crimson" }}
          transition="all .25s ease-in-out"
        >
          Login Now
        </Button>
        <VStack>
          <Text fontWeight="400" color="#000">
            or login with
          </Text>
          <Flex align="center" justify="center" gap=".7rem">
            <Box
              as={FaFacebook}
              cursor="pointer"
              color="gray"
              transform="scale(1)"
              transition="transform 0.2s ease"
              _hover={{
                color: "#1877F2",
                transform: "scale(1.2) rotate(5deg)",
              }}
            />
            <Box
              as={FaGoogle}
              cursor="pointer"
              color="gray"
              transform="scale(1)"
              transition="transform 0.2s ease"
              _hover={{
                color: "#DB4437",
                transform: "scale(1.2) rotate(5deg)",
              }}
            />
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Signup;
