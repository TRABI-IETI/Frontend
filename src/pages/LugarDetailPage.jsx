import React from 'react';
import { Flex, SimpleGrid, Button, Text, Box, Card, Heading, Image, IconButton, Stack, Menu, MenuList, MenuButton, MenuItem} from "@chakra-ui/react"
import { LugarCard } from '../components/LugarCard';
import { useEffect } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useParams } from 'react-router';

const items = 
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 1', 
        price: '1000', 
        address: '1000',
        schedule: '1000',
        phone:'144141',
        restrictions:'restrictions',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }


const packages = [
    {
        image:
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        id: 1,
        title: 'Paquete 1',
        price: '1000',  
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }, 
    {
        image:
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        id: 2,
        title: 'Paquete 2',
        price: '1000',  
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
]

export default function LugarDetailPage(){

    const {lugarId} = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack=()=>{
    window.history.back()
  }
    return(
        <Flex flexDirection={{ base: 'column', md: 'column' }}>
            <SimpleGrid columns={[1,2,3]} spacing={{ base: '1em', md: '2em', lg: '3em' }} width="100%">
            <IconButton justifySelf={"start"} icon={<ArrowBackIcon/>} variant={"ghost"} onClick={handleBack}/>
                <Text fontSize="30" fontWeight="bold"  justifySelf="center">{lugarId}</Text>
                <Usuario/>
            </SimpleGrid>

            <div style={{ display: 'flex', width: '100%', marginTop: "2em" }}>
                <div style={{ flex: '0 0 65%', marginRight: '1em', marginLeft: '2em'  }}>
                   <LugarCard lugar={items}/>
                </div>

                <Box style={{ flex: '0 0 30%', maxWidth:'25vw', flexDirection: 'column', alignItems: 'center'}}>            
                    <Card mt="3">
                        <Text ml={2}>
                            Horario: {items.schedule}
                            <br/>
                            Direccion: {items.address}
                            <br/>
                            Precio: {items.price}
                            <br/>
                            Telefono: {items.phone}
                            <br/>
                            Restricciones: {items.restrictions}
                        </Text>
                    </Card>
                    <Stack spacing={4} direction='row' align='center' mt={4}>
                    <Button bg="#f5d494" >Comprar</Button>
                    {packages.length ? (
                    <Menu>
                        <MenuButton bg="#f5d494" as={Button} rightIcon={<ChevronDownIcon />}>
                        Agregar a paquete
                        </MenuButton>
                        <MenuList>
                        {packages.map((packageS) => (
                            <MenuItem>{packageS.title}</MenuItem>
                        ))}
                        </MenuList>
                    </Menu>
                    ) : (
                    <Button bg="#f5d494">
                        Crear paquete
                    </Button>
                    )}
                    </Stack>
                </Box>
            </div>
        </Flex>
    );
};