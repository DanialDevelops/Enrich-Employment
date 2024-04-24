import { Box, Container, Stack, Text, IconButton, useColorModeValue, Link } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Box bg={"#1B5D4F"} color={textColor} borderTopWidth={1} borderStyle={'solid'} borderColor={'white'}>
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Text color={"white"}>© {new Date().getFullYear()} Enrich Employment. All rights reserved.</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'https://www.facebook.com'} isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook fontSize="20px" />}
              isRound={true}
              size={'lg'}
              variant="ghost"
              color={"white"}
            />
          </Link>
          <Link href={'https://www.twitter.com'} isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
              isRound={true}
              size={'lg'}
              variant="ghost"
              color={"white"}
            />
          </Link>
          <Link href={'https://www.instagram.com'} isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram fontSize="20px" />}
              isRound={true}
              size={'lg'}
              variant="ghost"
              color={"white"}
            />
          </Link>
          <Link href={'https://www.linkedin.com'} isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
              isRound={true}
              size={'lg'}
              variant="ghost"
              color={"white"}
            />
          </Link>
        </Stack>
      </Container>
      <Container color={"white"} as={Text} maxW={'6xl'} py={2} fontSize={'sm'} textAlign={'center'}>
        Designed with love by the Enrich Employment Web Team.
      </Container>
    </Box>
  );
};

export default Footer;
