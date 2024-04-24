import { Box, Heading, Text, List, ListItem, ListIcon, Container, VStack, Flex } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';  // This assumes react-icons is installed

const Service = () => {
  const themeGreen = "#1B5D4F"; // Define the color for easy reference

  return (
    <Flex bg={""}>
    <Container maxW="container.xl" py={12}>
      <VStack spacing={5} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center" mb={4} color={themeGreen}>
            Enrich Employment Services
          </Heading>
          <Text fontSize="lg" textAlign="justify">
            At Enrich Employment, we recognize that the backbone of any successful business is its workforce. We tackle the everyday hurdles that companies encounter, from scaling up for new initiatives to addressing unplanned staff shortages. Our bespoke services are crafted to seamlessly integrate with any operational needs, minimizing overheads while maximizing efficiency.
          </Text>
        </Box>
        
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" color={themeGreen}>Our Offerings</Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={themeGreen} />
              Flexible Staffing Solutions: Deploy skilled and dependable workers swiftly to hit urgent deadlines or cover workforce fluctuations without permanent overhead implications.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={themeGreen} />
              Eval-to-Hire: Mitigate recruitment risks by evaluating our temporary staff on-site before making a long-term commitment.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={themeGreen} />
              Direct Hire Services: Let us streamline your hiring process by sourcing, vetting, and delivering candidates who fit your precise requirements.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={themeGreen} />
              Leadership Acquisition: Enhance your executive team with our executive search services, targeting and securing industry-leading talent.
            </ListItem>
          </List>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" color={themeGreen}>Benefits of Our Specialized Services:</Heading>
          <List spacing={3} mt={4}>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Cut staffing overheads</ListItem>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Flexibly adjust to workload changes</ListItem>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Efficiently manage staff absences</ListItem>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Lower staff turnover rates</ListItem>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Prevent costly hiring errors</ListItem>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Bridge the skills divide</ListItem>
            <ListItem><ListIcon as={MdCheckCircle} color={themeGreen} />Optimize your talent acquisition strategy</ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
    </Flex>
  );
};

export default Service;
