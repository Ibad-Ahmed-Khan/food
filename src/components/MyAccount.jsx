import { Flex, Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Signup from "../pages/Signup";

const MyAccount = ({ bgColor, hoverColor, activeColor }) => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };

  useEffect(() => {
    if (model) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [model]);

  return (
    <>
      <ChakraLink
        onClick={toggleModel}
        fontWeight="500"
        fontFamily={"Fredoka ,sans-serif"}
        color="white"
        bg={bgColor || "#00FFFF"}
        p="2"
        paddingInline="4"
        position="relative"
        _hover={{
          textDecoration: "none",
          bg: hoverColor || "#00FFFF",
        }}
        _active={{
          bg: activeColor || "aqua",
        }}
        transition="all .25s ease-in-out"
      >
        <Flex align="center" justify="center" gap=".5rem">
          <FaUser />
          <Flex align="center" justify="center" gap="2px">
            <Text>My</Text>
            <Text>Account</Text>
          </Flex>
        </Flex>
      </ChakraLink>
      {model && (
        <>
          <Box
            position="fixed"
            top="-50%"
            left="-50%"
            transform="translate(50%,50%)"
            w="100%"
            h="100%"
            zIndex="999999"
            bg="rgba(0, 0, 0, 0.4)"
          >
            <Signup toggleModel={toggleModel} />
          </Box>
        </>
      )}
    </>
  );
};

export default MyAccount;
