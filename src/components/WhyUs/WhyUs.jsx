import { Flex, Text, Box, Container, Divider } from "@chakra-ui/react";
import { AiFillClockCircle, AiFillCar, AiOutlineDollar } from "react-icons/ai";

const WhyUs = () => {
  return (
    <Flex w="full" minH="600px" bg="#61d1b9" flexDirection="column" align="center" py={10}>
      <Box w="full" display="flex" justifyContent="center" alignItems="center">
        <Text fontSize={["36px", "48px"]} color="#1B5D4F" my={5}>
          Why Choose Us?
        </Text>
      </Box>
      <Container maxW="container.xl" display="flex" justifyContent="space-around" flexWrap="wrap" px={[4, null, 0]}>
        <Flex
          flexDirection="column"
          boxShadow="xl"
          alignItems="center"
          justifyContent="center"
          gap={4}
          h="300px"
          w={{ base: "90%", sm: "45%", lg: "30%" }}
          bg="#1B5D4F"
          p={5}
          borderRadius="lg"
          m={2}
          transition="transform 0.3s ease, background-color 0.3s ease"
          _hover={{ bg: "#1A4731", transform: "scale(1.05)", boxShadow: "2xl" }}
        >
          <AiFillClockCircle size={60} color="#F0EAD6" />
          <Text fontWeight="bold" color="#F0EAD6" fontSize="24px" textAlign="center" mt={4}>
            Availability
          </Text>
          <Divider borderColor="#F0EAD6" />
          <Text color="#F0EAD6" textAlign="center" mt={4} fontSize="16px">
            Available 24 hours a day/365 days a year, there for you when it really matters
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          boxShadow="xl"
          alignItems="center"
          justifyContent="center"
          gap={4}
          h="300px"
          w={{ base: "90%", sm: "45%", lg: "30%" }}
          bg="#1B5D4F"
          p={5}
          borderRadius="lg"
          m={2}
          transition="transform 0.3s ease, background-color 0.3s ease"
          _hover={{ bg: "#1A4731", transform: "scale(1.05)", boxShadow: "2xl" }}
        >
          <AiFillCar size={60} color="#F0EAD6" />
          <Text fontWeight="bold" color="#F0EAD6" fontSize="24px" textAlign="center" mt={4}>
            Transportation
          </Text>
          <Divider borderColor="#F0EAD6" />
          <Text color="#F0EAD6" textAlign="center" mt={4} fontSize="16px">
            We provide transportation for workers to and from the job site
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          boxShadow="xl"
          alignItems="center"
          justifyContent="center"
          gap={4}
          h="300px"
          w={{ base: "90%", sm: "45%", lg: "30%" }}
          bg="#1B5D4F"
          p={5}
          borderRadius="lg"
          m={2}
          transition="transform 0.3s ease, background-color 0.3s ease"
          _hover={{ bg: "#1A4731", transform: "scale(1.05)", boxShadow: "2xl" }}
        >
          <AiOutlineDollar size={60} color="#F0EAD6" />
          <Text fontWeight="bold" color="#F0EAD6" fontSize="24px" textAlign="center" mt={4}>
            Pay
          </Text>
          <Divider borderColor="#F0EAD6" />
          <Text color="#F0EAD6" textAlign="center" mt={4} fontSize="16px">
            We cover government liabilities (Vacation, WSIB, CPP, etc.)
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};

export default WhyUs;
