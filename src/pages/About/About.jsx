import { Flex, VStack, Text, Image, Divider } from "@chakra-ui/react";
import WorkSpace from "../../assets/WorkSpace.jpg";

const About = () => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}>
      <Flex
        h="800px"
        w={{ base: "100%", md: "50%" }}
        bg="#1B5D4F"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex>
          <VStack>
            <Text fontSize={{ base: 42, md: 55 }} w={"50%"} color={"white"}>
              About Us
            </Text>
            <Divider w={"50%"} />
            <Text w={"50%"} color={"white"}>
              At Enrich Employment, client satisfaction is our top priority. We
              are dedicated to providing enhanced employment solutions tailored
              to your needs. Our commitment extends to ensuring quality and
              reliability in all our services, including our round-the-clock
              (24/7) customer support and convenient shuttle services. With
              Enrich Employment, you receive effective, reliable HR solutions
              that are available whenever you need them, designed to streamline
              your operations and enhance your workforce management.
            </Text>
          </VStack>
        </Flex>
      </Flex>

      <Image
        display={{ base: "none", md: "block" }}
        objectFit="cover"
        src={WorkSpace}
        alt="Dan Abramov"
        w={{ base: "100%", md: "50%" }}
        h={"800px"}
      />
    </Flex>
  );
};

export default About;
