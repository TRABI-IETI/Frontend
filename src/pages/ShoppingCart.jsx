import { useMediaQuery, Flex, Heading, Card, Image, Text, Stack, CardBody, CardFooter, Button, Box, SimpleGrid, IconButton, useStatStyles  } from '@chakra-ui/react'
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { PaqueteCard } from '../components/LugarBuyCard';
import { memoryHook } from '../hooks/memoryHook';
import { BotonScrollTop } from '../components/BotonScrollTop';
import { updateUser } from '../services/loginServices';

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

    const [packages, addPackages, removePackage, clearData] = memoryHook();

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

    function handleBuy(){
      let cookieInfo = JSON.parse(localStorage.getItem("usuarioCookie"))
      const pakcsInMemo = packages.map(pack => pack.id)
      cookieInfo.packages = [...cookieInfo.packages ,...pakcsInMemo];
      updateUser(cookieInfo.id, cookieInfo)
      localStorage.setItem("usuarioCookie", JSON.stringify(cookieInfo))
      localStorage.setItem("packages", JSON.stringify([]))
      clearData()
    }

    const totalPrice = packages.reduce((acc, item) => acc + parseInt(item.price), 0);
    return(
        <Flex flexDirection={{ base: 'column', md: 'column' }}>
                <Usuario/>
                <Heading textAlign={"center"}>CARRITO DE COMPRAS</Heading>

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
                        <Button mb={10} mt={10} mr={10} ml={10} color="black" background="#f5d494" onClick={handleBuy}>Pagar</Button>
                    </Card>
                </Box>
            </div> 
            <BotonScrollTop/>       
        </Flex>
        
    )
}

export default ShoppingCart;