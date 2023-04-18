import { Carousel } from 'react-responsive-carousel';
import { Flex, Heading, Card, Box, Image, Text , Divider, IconButton, SimpleGrid, HStack, Button, WrapItem, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebook, FaTwitter, FaWhatsapp, FaEllipsisV, FaShoppingCart  } from 'react-icons/fa';
import { Usuario } from '../components/usuario';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { BotonScrollTop } from '../components/BotonScrollTop';
import getPackages from '../services/packagesServices';
import { PaqueteCard } from '../components/PaqueteCard';
import { usePlaceHook } from '../hooks/usePlaceHook';

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
      description: "Revisa todos los paquetes que tenemos para ti, con los mejores precios y los mejores lugares.",
      image: "https://elviajerofeliz.com/wp-content/uploads/2022/09/Mejor-Sitio-Web-de-Paquetes-de-Viaje.jpg",
      url: "/paquetes",
    },
    {
      title: "LUGARES",
      description: "Cada lugar es unico y hay muchas posibilidades para diferentes gustos, revisa el que mas te guste y añadelo a tu trabi.",
      image: "https://static.wixstatic.com/media/b37859_ed70c3b57781436788724024d73a4102~mv2.jpg/v1/fill/w_640,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b37859_ed70c3b57781436788724024d73a4102~mv2.jpg",
      url: "/lugares",
    },
    {
      title: "MIS TRABI",
      description: "Tus trabis te esperan con muchas experiencias y aventuras. Mira lo que has comprado para que no se te escape nada.",
      image: "https://ecdn.teacherspayteachers.com/thumbitem/Mis-Viajes-My-Travels-Review-Quiz-3059608-1603366401/original-3059608-1.jpg",
      url: "/misTrabi",
    },
  ];

function Home() {
  const [currentImage, setCurrentImage] = useState(items[0].image);
  const handleImageChange = (newIndex) => {
    setCurrentImage(items[newIndex].image);
  };
  const [packages, setPackages] = useState([]);
  const [lugarImagen,setLugarImage] = useState([]);
  const {getImagePlace, lugares} = usePlaceHook()

  if(!localStorage.getItem("packages")){
    localStorage.setItem("packages", JSON.stringify([]));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getPackages({"idUsuario": null}).then((paquetes) => {
      setPackages(paquetes) 
      console.log(paquetes)
      paquetes.map((value =>getImagePlace(value)))
      
    });
    console.log(lugares)
  }, []);
  
    return (
      <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
            <Usuario/>
            <Heading textAlign={"center"}>TRABI</Heading>
        <Box
      position="relative"
      backgroundImage={`url(${currentImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      mt={7}
      mb={3}
    >
        <Box maxWidth={{base: "90%", md: "80%", lg: "60%"}} mx="auto" mb={7} overflow={"hidden"} zIndex={"1"}>
          <Carousel onChange={handleImageChange}
          showThumbs={false} showStatus={false} showArrows={false} infiniteLoop autoPlay interval={3000}>
            {packages.map((item) => (
              <Box key={item.name} p={4}>
                <Link to={`/descripcionPaquete/${item.id}`} style={{textDecoration: 'none'}}>
                <Card boxShadow="20px 20px 80px rgba(0, 0, 0, 0.2)"  borderRadius="md" p={7}>
                  <Image src={lugares[0].imagen} alt={item.name}/>
                  <Box p={4}>
                    <Heading size="md">{item.name}</Heading>
                    <Text mt={4}>{item.description}</Text>
                  </Box>
                </Card>
                {/* <PaqueteCard paquete={item}/> */}
                </Link>
              </Box>
            ))}
          </Carousel>
        </Box>
        </Box>
        <Divider/>
        <Flex mt={"7"} mb={7}>
            <SimpleGrid columns={[1, null, 3]} spacing="7em" mr={"10"} ml={"10"}>
                {items2.map((item) => (
                    <Box key={item.title} minWidth={{ base: '100%', md: '400px', lg: '200px' }}>
                    <Link to={item.url} style={{textDecoration: 'none'}}>
                        <Card style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }} cursor="pointer">
                        <Image src={item.image} alt={item.title} height="200px" objectFit="cover"/>
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
        <Flex mt={7} justifyContent= "center" alignItems= "center" flexDirection="column" mb={10}>
            <Card style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }} maxWidth="50em" mx="auto" textAlign="center">
                <Heading mb={3} mt={5}>SOBRE NOSOTROS</Heading>
                <Text mr={10} ml={10} textAlign={"justify"} mb={10}>Somos una empresa enfocada en que nuestros clientes conozcan los lugares mas significativos de colombia, empezando por parques, lugares historicos, museos y restaurantes.
                    Te ayudamos a organizar tu viaje, generandote un intinerario o dejandote en la libertad de decidir que te gusta y que quieres conocer. Con nosotros puedes ahorrarte filas y lo
                    mas importante, tu dinero.
                    <br/>
                    De igual modo estamos apoyando a las empresas pequeñas para que puedan publicar sus productos en nuestro feed. Queremos que pases las mejores experiencias en tus viajes y
                    que crezcamos juntos
                </Text>
            <HStack justifyContent="center" mb={7}>
                <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                    Facebook
                </Button>
                <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                    Twitter
                </Button>
                <Button colorScheme='whatsapp' leftIcon={<FaWhatsapp />}>
                    Whatsapp
                </Button>
            </HStack>
            </Card>
        </Flex>
        <BotonScrollTop/>
      </Flex>
    );
  }

  export default Home

