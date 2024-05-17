import {
  UnorderedList,
  Image,
  Container,
  Flex,
  Box,
  VStack,
  Divider,
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { AiFillHome, AiOutlineTeam, AiOutlineSetting } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import EnrichLogo from "../../assets/EnrichLogo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Flex w={"full"} bg={"white"}>
        <Container
          display={"flex"}
          gap={4}
          w={"full"}
          bg={"white"}
          maxW="container.xl"
          justifyContent={"space-around"}
        >
          <Image src={EnrichLogo} display={"inline"} />
          <Flex flexDirection={"column"} justifyContent={"center"}>
            <Box
              display={{ base: "flex", md: "none" }}
              alignItems={"flex-end"}
              justifyContent={"center"}
              p={5}
            >
              <Hamburger color="#1B5D4F" toggled={isOpen} toggle={setOpen} />
            </Box>
            <VStack
              display={{ base: "flex", md: "none" }}
              pos="absolute"
              top={150}
              right={0}
              shadow="md"
              bg="#1B5D4F"
              w="full"
              zIndex={2}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                visibility: isOpen ? "visible" : "hidden",
              }}
            >
              <LinkBox>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <LinkOverlay>
                    <Box
                      fontSize={25}
                      fontWeight={"medium"}
                      color={"white"}
                      _hover={{ fontSize: 32, fontWeight: "semibold" }}
                      transition="all 0.3s ease"
                      display={"flex"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <AiFillHome />
                      Home
                    </Box>
                  </LinkOverlay>
                </Link>
              </LinkBox>
              <Divider />
              <LinkBox>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <LinkOverlay>
                    <Box
                      fontSize={25}
                      fontWeight={"medium"}
                      color={"white"}
                      _hover={{ fontSize: 32, fontWeight: "semibold" }}
                      transition="all 0.3s ease"
                      display={"flex"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <AiOutlineTeam />
                      About us
                    </Box>
                  </LinkOverlay>
                </Link>
              </LinkBox>
              <Divider />
              <LinkBox>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <LinkOverlay>
                    <Box
                      fontSize={25}
                      fontWeight={"medium"}
                      color={"white"}
                      _hover={{ fontSize: 34, fontWeight: "semibold" }}
                      transition="all 0.3s ease"
                      display={"flex"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <AiOutlineSetting />
                      Services
                    </Box>
                  </LinkOverlay>
                </Link>
              </LinkBox>
              <Divider />
              <LinkBox>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <LinkOverlay>
                    <Box
                      fontSize={25}
                      fontWeight={"medium"}
                      color={"white"}
                      _hover={{ fontSize: 34, fontWeight: "semibold" }}
                      transition="all 0.3s ease"
                      display={"flex"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <GrContactInfo />
                      Contact
                    </Box>
                  </LinkOverlay>
                </Link>
              </LinkBox>
            </VStack>
          </Flex>

          <UnorderedList
            display={{ base: "none", md: "flex" }}
            p={5}
            w={"full"}
            justifyContent={"center"}
            gap={7}
            alignItems={"center"}
          >
            <LinkBox>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  fontSize={{ base: 20, lg: 32 }}
                  fontWeight={"medium"}
                  color={"#1B5D4F"}
                  _hover={{ fontSize: 34, fontWeight: "semibold" }}
                  transition="all 0.3s ease"
                  display={"flex"}
                  alignItems={"center"}
                  gap={3}
                >
                  <AiFillHome />
                  Home
                </Box>
              </Link>
            </LinkBox>

            <LinkBox>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Box
                  fontSize={{ base: 20, lg: 32 }}
                  fontWeight={"medium"}
                  color={"#1B5D4F"}
                  _hover={{ fontSize: 34, fontWeight: "semibold" }}
                  transition="all 0.3s ease"
                  display={"flex"}
                  alignItems={"center"}
                  gap={3}
                >
                  <AiOutlineTeam />
                  About us
                </Box>
              </Link>
            </LinkBox>

            <LinkBox>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <Box
                  fontSize={{ base: 20, lg: 32 }}
                  fontWeight={"medium"}
                  color={"#1B5D4F"}
                  transition="all 0.3s ease"
                  display={"flex"}
                  alignItems={"center"}
                  gap={3}
                  _hover={{
                    fontSize: "34px", // Chakra UI uses the CSS in JS approach, so we use "34px" instead of 34
                    fontWeight: "semibold",
                  }}
                >
                  <AiOutlineSetting />
                  Services
                </Box>
              </Link>
            </LinkBox>
          </UnorderedList>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            display={{ base: "none", md: "flex" }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                _hover={{ fontSize: 32 }}
                transition="all 0.3s ease"
                p={6}
                bg={"#11374E"}
                fontSize={24}
                color={"white"}
              >
                Contact Us
              </Button>
            </Link>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Navbar;
