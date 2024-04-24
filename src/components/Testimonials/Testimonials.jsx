import { Flex, Container, Text, Avatar, VStack, Icon, Divider } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1,text: '"I love this place to the heart. Enrich Employment is a better place to look for when need a job. They help people to reach the goals in life. Thank you ❤️❤️❤️❤️❤️❤️"', name: 'Manzi ssembatya', stars: 5 },
    { id: 2, text: `"It's really a best employment agency I've been working here more than a year but there are no delays in payment I love to work with this agency"`, name: 'Nitant Gaikwad', stars: 5 },
    { id: 3, text: '"One of the best Agency in GTA for perfect job placement. Been working with them for 2 years no delays , always on time and humble."', name: 'Nijjer Pawan', stars: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Flex justify="center" align="center" bg="white" h={"600px"} bgImage={"./Brick.jpg"} flexDirection={"column"}>
      <VStack>
        <Text fontSize={48} color={"black"}>Our Clients</Text>
        <Text fontSize={48} color={"#1B5D4F"} fontWeight={"bold"}>Testimonials</Text> 
      </VStack>
      <Divider />
      <Container maxW="container.xxl" py="4">
        <Slider {...settings} >
          {testimonials.map(testimonial => (
            <Flex key={testimonial.id} boxShadow='dark-lg' zIndex={-1} h="300px" p="4" border="1px white solid" borderRadius="lg" flexDirection="column" alignItems="center" maxW="450px" bg={"#1B5D4F"}>
              <Flex>
                <Avatar size='md' name={testimonial.name} />
                <VStack align="flex-start" ml="3">
                  <Text fontSize="xl" color="white">{testimonial.name}</Text>
                  <Flex align="center">
                    {[...Array(testimonial.stars)].map((star, index) => (
                      <Icon key={index} as={FaStar} color="yellow.400" />
                    ))}
                  </Flex>
                </VStack>
              </Flex>
              <Text textAlign="start" fontSize="xl" color="white">{testimonial.text}</Text>
            </Flex>
          ))}
        </Slider>
      </Container>
    </Flex>
  );
};

export default Testimonials;
