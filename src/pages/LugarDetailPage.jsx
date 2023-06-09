import React from 'react';
import { Flex, SimpleGrid, Button, Text, Box, Card, Heading, Image, IconButton, Stack, Menu, MenuList, MenuButton, MenuItem} from "@chakra-ui/react"
import { LugarCard } from '../components/LugarCard';
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useParams } from 'react-router';
import { getPlace } from '../services/placesServices';
import getPackages, { addPlaceToPackage, updatePackage } from '../services/packagesServices';
import { BotonScrollTop } from '../components/BotonScrollTop';
import { useNavigate } from "react-router-dom";


export default function LugarDetailPage(){
    const idUsuario = JSON.parse(localStorage.getItem("usuarioCookie")).id
    const {lugarId} = useParams();
    const [lugar, setLugar] = useState({});
    const [packages, setPackages] = useState([]);
    const navigate = useNavigate();
 
    useEffect(() => {
        window.scrollTo(0, 0);
        getPlace(lugarId).then((lugar) => setLugar(lugar));
        getPackages({"idUsuario": idUsuario}).then((paquete) => setPackages(paquete));
      }, [])

  const handleBack=()=>{
    window.history.back()
  }

  const handleAddToPackage=(packagId)=>{
    packages.map((package2) => {
        if(package2.id === packagId){
            package2.price = parseFloat(package2.price) + parseFloat(lugar.price)
            package2.places = [...package2.places, lugarId]
            updatePackage(packagId, package2)
        }
    })
  }

  const handleCrearPaquete=() => {
    navigate("/misTrabi");
  }

    return(
        <Flex flexDirection={{ base: 'column', md: 'column' }}>
                {/* <Text fontSize="30" fontWeight="bold"  justifySelf="center">{lugarId}</Text> */}
                <Usuario/>
                <Heading textAlign={"center"}>{lugarId}</Heading>

            <div style={{ display: 'flex', width: '100%', marginTop: "2em" }}>
                <div style={{ flex: '0 0 65%', marginRight: '1em', marginLeft: '2em'  }}>
                   <LugarCard lugar={lugar}/>
                </div>

                <Box style={{ flex: '0 0 30%', maxWidth:'25vw', flexDirection: 'column', alignlugar: 'center'}}>            
                    <Card mt="3">
                        <Text ml={2}>
                            Horario: {lugar.schedule}
                            <br/>
                            Direccion: {lugar.address}
                            <br/>
                            Precio: {lugar.price}
                            <br/>
                            Telefono: {lugar.phone}
                            <br/>
                            Restricciones: {lugar.restrictions}
                        </Text>
                    </Card>
                    <Stack spacing={4} direction='row' align='center' mt={4}>
                    {/* <Button bg="#f5d494" >Comprar</Button> */}
                    {packages.length ? (
                    <Menu>
                        <MenuButton bg="#f5d494" as={Button} rightIcon={<ChevronDownIcon />}>
                        Agregar a paquete
                        </MenuButton>
                        <MenuList>
                        {packages.map((packageS) => (
                            <MenuItem onClick={() => handleAddToPackage(packageS.id)}>{packageS.name}</MenuItem>
                        ))}
                        </MenuList>
                    </Menu>
                    ) : (
                    <Button bg="#f5d494" onClick={handleCrearPaquete}>
                        Crear paquete
                    </Button>
                    )}
                    </Stack>
                </Box>
            </div>
            <BotonScrollTop/>
        </Flex>
    );
};