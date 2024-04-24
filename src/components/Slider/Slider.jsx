import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const Slider = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="relative"
      w="full"
    >
      <Box
        display="flex"
        position="relative"
        w="100%"
        h="600px"
        bgImage={`url('./Group.jpg')`}
        bgSize="cover"
        bgPosition="center"
        justifyContent="center"
        alignItems="center"
        gap={3}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "blackAlpha.800",
          opacity: 0.5,
        }}
      >
        <Flex
          justifyContent={"center"}
          zIndex={1}
          color="white"
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize={48} width={"66%"} textAlign={"center"}>
            Your Shortcut to{" "}
            <Text as={"span"}  textShadow="1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF" color={"#1B5D4F"} fontWeight={"bold"}>
              Skilled Professionals
            </Text>{" "}
            Empowering Your{" "}
            <Text as={"span"} color={"#1B5D4F"} textShadow="1px 1px 0 #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF" fontWeight={"bold"}>
              Growth Effortlessly!
            </Text>
          </Text>
          <Button as={RouterLink} to="/about"
            m={5}
            bg={"#1B5D4F"}
            color="white"
            fontSize={24}
            borderRadius={25}
            p={7}
            textAlign={"center"}
            margin={"auto"}
            _hover={{
              bg: "#1B5D4F"
            }}
            sx={{
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)' },
                '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(255, 255, 255, 0)' },
                '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' },
              },
              animation: 'pulse 2s infinite ease-in-out'
            }}
          >
            Learn More
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Slider;
