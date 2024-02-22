import { Flex, Text, VStack } from "@chakra-ui/react";
import Polygon from "../assets/polygon.png";
import MyAccount from "../components/MyAccount";

const About = () => {
  return (
    <Flex
      flexDirection="column"
      id="About"
      align="center"
      justify="center"
      minH="100vh"
      p={{ base: "10", md: "2rem", lg: "4rem", xl: "8rem" }}
      gap="2rem"
      bgImage={Polygon}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Text
        fontSize="4xl"
        color="#fff"
        textAlign="center"
        fontFamily={"Protest Riot"}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        About Us
      </Text>
      <VStack bg="#fff" p="4" data-aos="fade-up" data-aos-duration="1500">
        <Text
          lineHeight="2rem"
          fontFamily={"Fredoka ,sans-serif"}
          fontWeight="300"
          opacity="0.9"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellendus aliquam voluptatum ducimus earum excepturi veritatis
          saepe. Repellendus nihil quisquam, eum dolorum eligendi exercitationem
          placeat? Unde, ipsa? Molestias quas autem ex quidem adipisci deserunt
          quos laborum libero praesentium vero, cum temporibus quisquam dicta ab
          quis officiis illum. Laboriosam voluptates et laudantium numquam
          asperiores in tenetur libero nisi, cupiditate consectetur labore
          aliquam aliquid ducimus distinctio at dolorum, nobis similique quam
          illum.
        </Text>
        <MyAccount
          bgColor="crimson"
          hoverColor="aqua"
          activeColor="crimson"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </VStack>
    </Flex>
  );
};

export default About;
