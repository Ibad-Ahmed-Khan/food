import { Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Lemon from "../assets/png/lemon.png";
import leaf from "../assets/png/leaf.png";
import kiwi from "../assets/png/kiwi.png";
import tomato from "../assets/png/tomato.png";
import apple from "../assets/png/apple.png";
import Logo from "./Logo";
import MyButton from "./MyButton";

const WhyChooseUs = () => {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="start"
      bg="white"
      textTransform="capitalize"
      pos="relative"
      p="10"
    >
      <Text
        zIndex="2"
        fontSize="4xl"
        textAlign="center"
        fontFamily={"Protest Riot"}
      >
        taste the healty difference
      </Text>
      <SimpleGrid gap="2rem" h="full" columns={{ base: "1", md: "2", lg: "2" }}>
        <Flex
          flexDirection="column"
          align="start"
          justify="space-between"
          h="full"
          w="full"
        >
          <Flex w="full">
            <Img
              data-aos="fade-right"
              data-aos-duration="1500"
              w="10rem"
              src={leaf}
            />
          </Flex>
          <Text
            lineHeight="2rem"
            fontFamily={"Fredoka ,sans-serif"}
            fontWeight="300"
            zIndex="2
            "
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <span
              style={{
                fontSize: "2rem",
                fontFamily: "Protest Riot",
                color: "crimson",
              }}
            >
              Welcome
            </span>{" "}
            to Delicious Bites, where every bite is an experience to savor.
            Indulge in our exquisite dishes crafted from the freshest
            ingredients. Explore our menu and tantalize your taste buds with our
            mouthwatering specialties. Whether you're craving savory classics or
            adventurous flavors, we have something for every palate. Join us for
            a culinary journey that promises to delight your senses and leave
            you craving for more.
          </Text>

          <Flex w="full" justify="end">
            <Img
              data-aos="fade-up-left"
              data-aos-duration="1500"
              pos={{ base: "absolute", lg: "static" }}
              right="40%"
              bottom="14%"
              transform=" translate(-50%,-50%) "
              w="10rem"
              src={kiwi}
            />
          </Flex>
          <Flex w="full">
            <Img
              data-aos="fade-right"
              data-aos-duration="1500"
              pos={{ base: "absolute", lg: "static" }}
              left="70%"
              top="26%"
              transform={{
                base: "translate(-50%,-50%)",
                lg: " translate(0%,0%)",
              }}
              w="14rem"
              src={tomato}
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          align="end"
          justify="space-between"
          h="full"
          w="full"
        >
          <Flex w="full" justify="end">
            <Img
              data-aos="fade-right"
              data-aos-duration="1500"
              pos={{ base: "absolute", lg: "static" }}
              left="50%"
              top="50%"
              transform=" translate(-50%,-50%) "
              w="14rem"
              src={Lemon}
            />
          </Flex>
          <Text
            lineHeight="2rem"
            fontFamily={"Fredoka ,sans-serif"}
            fontWeight="300"
            zIndex="2
            "
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <span
              style={{
                fontSize: "2rem",
                fontFamily: "Protest Riot",
                color: "crimson",
              }}
            >
              Welcome
            </span>{" "}
            to Delicious Bites, where every bite is an experience to savor.
            Indulge in our exquisite dishes crafted from the freshest
            ingredients. Explore our menu and tantalize your taste buds with our
            mouthwatering specialties. Whether you're craving savory classics or
            adventurous flavors, we have something for every palate. Join us for
            a culinary journey that promises to delight your senses and leave
            you craving for more.
          </Text>
          <Flex w="full" justify="end">
            <Img
              data-aos="fade-right"
              data-aos-duration="1500"
              w="14rem"
              src={apple}
            />
          </Flex>
        </Flex>
      </SimpleGrid>
      <MyButton />
    </Flex>
  );
};

export default WhyChooseUs;
