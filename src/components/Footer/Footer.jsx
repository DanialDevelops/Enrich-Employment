import { Box, Container, Text, Image, Flex } from '@chakra-ui/react';
import EnrichLogo from "../../assets/EnrichLogo.jpeg";

const Footer = () => {

  return (
    <Box bg={"white"} color={"#1B5D4F"} borderTopWidth={1} borderStyle={'solid'} borderColor={'white'}>
      <Container maxW={'6xl'} py={4} justify={'center'} align={'center'}>
        <Flex justify="space-between" align="center">
          <Text color={"#1B5D4F"} fontWeight={'bold'}>© {new Date().getFullYear()} Enrich Employment. All rights reserved.</Text>
          <Image src={EnrichLogo} display={"inline"} />
          <Text color={"#1B5D4F"} fontWeight={'bold'} fontSize={'sm'} textAlign={'center'}>
            Designed with love by the Enrich Employment Web Team.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
