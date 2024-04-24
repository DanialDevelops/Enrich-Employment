import { Flex, VStack, Text, Image, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex flexDirection={{base: 'column', md:"row"}}>
      <Flex
        h="800px"
        w={{ base: "100%", md: "50%" }}
        bg="#1B5D4F"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex>
          <VStack>
          <Text fontSize={{ base: 42, md: 55 }} w={"50%"} color={"white"}>About Us</Text>
          <Divider w={"50%"}/>
          <Text w={"50%"} color={"white"}>
            Client satisfaction is our top priority at Enrich Employment, We
            stroke to adhere to one thing at enrush Employment, providing
            enhanded emplotment solutions for you. Around the clock (24/7)
            customer service available along with shuttle service, we ensure an
            effective and reliable HR solution.
          </Text>
          </VStack>
        </Flex>
      </Flex>

      <Image 
      display={{ base: "none", md: "block" }}
      objectFit='cover'
    src='./WorkSpace.jpg'
    alt='Dan Abramov' w={{ base: "100%", md: "50%" }} h={"800px"}/>
    
    </Flex>
  );
};

export default About;
