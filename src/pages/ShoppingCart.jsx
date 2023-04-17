import { useMediaQuery, Flex, Heading, Card, Image, Text, Stack, CardBody, CardFooter, Button, Box, SimpleGrid, IconButton  } from '@chakra-ui/react'
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { PaqueteCard } from '../components/BuyCard';
import { memoryHook } from '../hooks/memoryHook';

const items = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "200"
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "300"
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "400"
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "400"
    }
  ];

  

  

function ShoppingCart(){
    
    const [packages, addPackages, removePackage] = memoryHook();

    const [isLargerThanMd] = useMediaQuery("(min-width: 10vw)");

    function onRemove(index){
        removePackage(index)    
      }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleBack=()=>{
        window.history.back()
      }
    const totalPrice = packages.reduce((acc, item) => acc + parseInt(item.price), 0);
    return(
        <Flex flexDirection={{ base: 'column', md: 'column' }}>
            <SimpleGrid column={3} alignItems={"center"} width={"100%"} >
            <IconButton justifySelf={"start"} icon={<ArrowBackIcon/>} variant={"ghost"} onClick={handleBack}/>
                <Heading gridColumn={"2"} textAlign={"center"}>CARRITO DE COMPRAS</Heading>
            <Box gridColumn={"3"} justifySelf={"end"} mr={10}>
                <Usuario/>
            </Box>
            </SimpleGrid>
            <div style={{ display: 'flex', width: '100%', marginTop: "2em" }}>
                <Box style={{ flex: '0 0 65%', marginRight: '1em', marginLeft: '2em'  }}>
                    <Stack spacing={4}>
                        {packages.map((item, index) => (
                            <PaqueteCard key={index} paquete={item} onCart={true} onRemove={() => onRemove(index)}/>
                        ))}
                    </Stack>
                </Box>
                <Box style={{ flex: '0 0 25%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Card textAlign={"center"} style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                        <Heading mb={10} mt={10} mr={10} ml={10}>Total a pagar:</Heading>
                        <p mr={10} ml={10}>Total: ${totalPrice}</p>
                        <Button mb={10} mt={10} mr={10} ml={10} color="black" background="#f5d494">Pagar</Button>
                    </Card>
                </Box>
            </div>        
        </Flex>
        
    )
}

export default ShoppingCart;

/*

<Card key={index} overflow="hidden" variant="outline" style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                                <Flex>
                                    <Box>
                                        <Image
                                            objectFit="cover"
                                            maxW={{ base: "100%", sm: "250px" }}
                                            src={item.image}
                                            alt="card image"
                                        />
                                    </Box>
                                    <Box>
                                        <Stack>
                                        <CardBody>
                                            <Heading size="sm">{item.title}</Heading>
                                            <Text py="2">{item.description}</Text>
                                        </CardBody>
                                        <CardFooter>
                                            <Button variant="solid" color="black" background="#f5d494">
                                                Buy for ${item.price}
                                            </Button>
                                        </CardFooter>
                                        </Stack>
                                    </Box>
                                </Flex>
                            </Card>
*/