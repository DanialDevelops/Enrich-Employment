import { Flex, VStack, Text, Image, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex>
      <Flex
        h="800px"
        w="50%"
        bg="#1B5D4F"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex>
          <VStack>
          <Text fontSize={{ base: 24, md: 55 }} w={"50%"} color={"white"}>About Us</Text>
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
      objectFit='cover'
    src='./WorkSpace.jpg'
    alt='Dan Abramov' w={"50%"} h={"800px"}/>
    
    </Flex>
  );
};

export default About;
