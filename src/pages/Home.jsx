import { Carousel } from 'react-responsive-carousel';
import { Flex, Heading, Card, Box, Image, Text , WrapItem, Avatar, Divider, SimpleGrid, Link } from '@chakra-ui/react'
// import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const items = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  const items2 = [
    {
      title: "PAQUETES",
      description: "Description for card 1.",
      image: "https://via.placeholder.com/150",
      url: "/Paquetes",
    },
    {
      title: "LUGARES",
      description: "Description for card 2.",
      image: "https://via.placeholder.com/150",
      url: "/Lugares",
    },
    {
      title: "MIS TRABI",
      description: "Description for card 3.",
      image: "https://via.placeholder.com/150",
      url: "/Mistrabi",
    },
  ];

function Home() {
  
  
    return (
      <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
        <Flex justifyContent="center" alignItems="center" mb={4} flexDirection="row" >
            <Heading>TRABI</Heading>
        {/* </Flex> */}
        {/* <Flex justifyContent={"flex-end"} flexDirection="row"> */}
            {/* <WrapItem>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </WrapItem> */}
        </Flex>
        <Box height={"30em"} width={"30em"} mx="auto" >
          <Carousel showThumbs={false} showArrows={true} infiniteLoop autoPlay interval={3000} >
            {items.map((item) => (
              <Box key={item.title} p={4}>
                <Card boxShadow="base">
                  <Image src={item.image} alt={item.title} />
                  <Box p={4}>
                    <Heading size="md">{item.title}</Heading>
                    <Text mt={4}>{item.description}</Text>
                  </Box>
                </Card>
              </Box>
            ))}
          </Carousel>
        </Box>
        <Divider/>
        <Flex mt={"7"}>
            <SimpleGrid columns={[1, 2, 3]} spacing="15em">
                {items2.map((item) => (
                    <Box key={item.title}>
                    <Link to={item.url} style={"text-decoration: none"}>
                        <Card boxShadow="base" cursor="pointer">
                        <Image src={item.image} alt={item.title} />
                        <Box p={4}>
                            <Heading size="md">{item.title}</Heading>
                            <Text mt={4}>{item.description}</Text>
                        </Box>
                        </Card>
                    </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
        <Divider/>

      </Flex>
    );
  }

  export default Home
