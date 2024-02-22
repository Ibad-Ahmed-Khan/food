import { Flex, Img, Text, VStack } from "@chakra-ui/react";
import HomeBg from "../assets/hero.png";
import HomeBg2 from "../assets/heroBg.png";
import MyButton from "../components/MyButton";

const Home = () => {
  return (
    <Flex
      flexDirection={{
        base: "column-reverse",
        md: "column-reverse",
        lg: "row",
        xl: "row",
      }}
      id="Home"
      align="center"
      justify="center"
      w="full"
      h={{
        base: "",
        md: "",
        lg: "100vh",
        xl: "100vh",
      }}
      bgImage={HomeBg2}
      bgPos="center"
      bgSize="cover"
      p="10"
    >
      <VStack align="start" spacing="4" w="full" textTransform="capitalize">
        <Text data-aos="fade-up" fontSize="4xl" fontFamily={"Protest Riot"}>
          fresh & healthy meal plan{" "}
          <span
            style={{
              fontSize: "4rem",
              fontFamily: "Dancing Script, cursive",
              color: "aqua",
            }}
          >
            delivery
          </span>{" "}
          in Miami
        </Text>

        <Text
          data-aos="fade-left"
          data-aos-delay="200"
          fontSize="sm"
          fontWeight="400"
          fontFamily={"Fredoka ,sans-serif"}
        >
          delicious meals delivered to your door from $132.95 per week
        </Text>
        <MyButton data-aos="fade-up" data-aos-delay="300" />
      </VStack>
      <Img
        data-aos="zoom-in"
        src={HomeBg}
        bgSize="cover"
        alt="Background"
        h="100%"
        pt="3rem"
      />
    </Flex>
  );
};

export default Home;
