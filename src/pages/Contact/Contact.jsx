import {
  Flex,
  Button,
  VStack,
  Box,
  Text,
  Container,
  FormControl,
  Input,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlineUpload } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";


const Contact = () => {
  const themeGreen = "#1B5D4F";
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const fileInputRef = useRef(null);

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const formData = new FormData();
    formData.append('firstName', firstName); // Assuming you have state hooks for these
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('resume', fileInputRef.current.files[0]); // Make sure 'resume' matches the backend
  
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        body: formData, // formData will be sent as 'multipart/form-data'
      });
  
      const result = await response.json(); // Assuming the server sends back JSON
      if (response.ok) {
        console.log('Success:', result);
        alert('Form submitted successfully');
        // You may want to reset the form or handle the success scenario
      } else {
        // Handle non-200 responses
        throw new Error(result.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form');
      // You may want to display this error message on the page
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };


  return (
    <Flex h={"120vh"} bg={"white"}>
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="full"
        h="350px"
        zIndex="1"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('./Book.jpg')"
          backgroundSize="cover"
          backgroundPosition="center center"
          opacity={0.8}
          zIndex="-1"
        />

        <Text
          fontSize={{ base: "14px", md: "55px" }}
          color="white"
          zIndex="docked"
        >
          Contact Us
        </Text>
      </Box>
      <Flex
        position="absolute"
        top="450px"
        w="full"
        justifyContent={"center"}
        zIndex="2"
      >
        <Container
          maxW="container.lg"
          m={5}
          p={5}
          bg={"white"}
          boxShadow={"xl"}
        >
          <VStack w={"full"}>
            <Text color={themeGreen} fontSize={48}>
              Leave Us A Message
            </Text>
            <Flex gap={4} w={"full"}>
              <FormControl isRequired>
                <FormLabel color={themeGreen}>First name</FormLabel>
                <Input border={"1px solid gray"} placeholder="First name" onChange={handleFirstNameChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel color={themeGreen}>Last name</FormLabel>
                <Input border={"1px solid gray"} placeholder="Last name" onChange={handleLastNameChange} />
              </FormControl>
            </Flex>
            <FormControl isRequired>
              <FormLabel color={themeGreen}>Email</FormLabel>
              <Input border={"1px solid gray"} placeholder="Email" onChange={handleEmailChange} />
            </FormControl>
            <FormControl>
              <FormLabel color={themeGreen} htmlFor="file-upload">
                Resume
              </FormLabel>
              <Input
                id="file-upload"
                type="file"
                p={1}
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                ref={fileInputRef}
                hidden // Hide the default HTML input
              />
              <Button
                leftIcon={<AiOutlineUpload />}
                onClick={() => fileInputRef.current.click()}
                colorScheme="teal"
              >
                {selectedFile || "Upload Resume"}
              </Button>
              {selectedFile && (
                <Box>
                  <Text fontSize="sm" color="gray.500">
                    {selectedFile}
                  </Text>
                </Box>
              )}
            </FormControl>
          </VStack>
          <Button mt={4} bg={"#11374E"} type="submit" w={"full"} onClick={handleSubmit}>
            Submit
          </Button>
          <Flex align="stretch">
            <VStack pt={10} spacing={4} align="stretch" justifyContent={"space-around"}>
              <Flex align="center">
                <Box mr={5}>
                  <FaPhoneAlt size={50} color={themeGreen} />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text color={themeGreen} fontSize="20px" fontWeight="bold">
                    Phone
                  </Text>
                  <Text color="black" fontSize="12px" fontWeight={"medium"}>
                  (905) 965-0448
                  </Text>
                </VStack>
              </Flex>

              <Flex align="center">
                <Box mr={5}>
                  <FaMapMarkerAlt size={50} color={themeGreen} />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text color={themeGreen} fontSize="20px" fontWeight="bold">
                    Address
                  </Text>
                  <Text color="black" fontSize="12px" fontWeight={"medium"}>
                  5800 Ambler Dr #210, Mississauga, ON L4W 4J4
                  </Text>
                </VStack>
              </Flex>
              <Flex align="center">
                <Box mr={5}>
                  <AiOutlineMail size={50} color={themeGreen} />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text color={themeGreen} fontSize="20px" fontWeight="bold">
                    Email
                  </Text>
                  <Text color="black" fontSize="12px" fontWeight={"medium"}>
                    example@email.com
                  </Text>
                </VStack>
              </Flex>
            </VStack>
            <Image
            display={{ base: "none", md: "block" }}
              src="./EnrichMap.png"
              alt="Contact"
              objectFit="cover" 
              height="100%"
              m={5}
              w={{md: "50%", lg: "full"}}
              boxShadow={"xl"}
              border={"1px solid gray"}
            />
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
};

export default Contact;
