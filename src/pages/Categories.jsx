import React from "react";
import { Flex, Text, Box, ListItem, SimpleGrid } from "@chakra-ui/react";
import { FaCaretUp } from "react-icons/fa";

const Categories = () => {
  const Data = [
    { id: 1, name: "vegetables", link: "Barwi" },
    { id: 2, name: "fruits", link: "chodwi" },
    { id: 3, name: "grains", link: "Solvi" },
  ];

  return (
    <Box>
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        gap="3px"
        _hover={{
          ".icon": {
            transform: "rotate(180deg)",
          },
          ".data": {
            transform: " scale(1,1) ",
            mt: "1px",
          },
        }}
      >
        <Flex align="center" justify="center">
          <Text>Categories</Text>
          <Box className="icon" transition="transform 0.25s ease-in-out">
            <FaCaretUp />
          </Box>
        </Flex>
        <Box
          className="data"
          transition="all 0.25s ease-in-out"
          bg="#fff"
          border="1px solid crimson"
          borderTop="none"
          transform=" scale(1,0) "
          transformOrigin="top"
          position="absolute"
          top="100%"
          left="0"
          w="105%"
        >
          {Data.map((item, id) => {
            return (
              <Box w="full" key={id}>
                <Text
                  color="#000"
                  p="2"
                  _hover={{
                    bg: "rgba(220, 20, 60, 0.3)", // Crimson color with 0.3 opacity
                  }}
                  zIndex="999"
                  textTransform="capitalize"
                >
                  {item.name}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Categories;
