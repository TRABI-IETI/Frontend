import { Flex, SimpleGrid, Button, Text, Box, Card, Heading, Image, IconButton} from "@chakra-ui/react"
import { LugarCard } from '../components/LugarCard';
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useParams } from 'react-router';
import { memoryHook } from "../hooks/memoryHook";
import { deletePlaceToPackage, getPackage, updatePackage } from '../services/packagesServices';
import { getPlace } from "../services/placesServices";
import { BotonScrollTop } from "../components/BotonScrollTop";

const items = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 1', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        title: 'Card 2', 
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
        title: 'Card 4', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 5', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  function PaqueteDetailPage(){
    const {paqueteId} = useParams();
    const [paquete, setPaquete] = useState({});
    const [lugares, setLugares] = useState([]);
    const [memoPackages, addPackages, removePackage] = memoryHook();
    const totalPrice = lugares.reduce((acc, item) => acc + parseInt(item.price), 0);
  
    function mapToPlace(places){
      const altPromise = places.map((data)=>getPlace(data).then(value=>value))
      return altPromise;
    }
  
    async function getLugares(places){
      const promises = mapToPlace(places);
      const data = await Promise.all(promises);
      setLugares(data)
      
    }
  
    function fetchPaquete() {
      window.scrollTo(0, 0);
      getPackage(paqueteId).then(data=>{
        setPaquete(data);
        getLugares(data.places)
      });
    }
  
    useEffect(() => {
      window.scrollTo(0, 0);
      fetchPaquete()
    }, []);
  
    const handleBack=()=>{
      window.history.back()
    }

    function handleAdd(){
      addPackages(paquete)
    }

    function handleDeletePlace(place, placePrice){
      var lugaresProv = (paquete.places)
      lugaresProv = lugaresProv.filter(item => item !== place)
      paquete.places = lugaresProv
      paquete.price = parseFloat(paquete.price) - parseFloat(placePrice)
      updatePackage(paqueteId, paquete).then(data=>{
        location.reload()
      });
    }

    return(
        <Flex flexDirection={{ base: 'column', md: 'column' }}>
                {/* <Text fontSize="30" fontWeight="bold"  justifySelf="center">{paquete.name}</Text> */}
                <Usuario/>
                <Heading textAlign={"center"}>{paquete.name}</Heading>
            <div style={{ display: 'flex', width: '100%', marginTop: "2em" }}>
                <div style={{ flex: '0 0 65%', marginRight: '1em', marginLeft: '2em'  }}>
                {lugares.map((item) => (
                   <LugarCard lugar={item} idUser={paquete.idUsuario} onDeletePlace={handleDeletePlace} />
                ))}
                </div>

                <div style={{ flex: '0 0 30%', maxWidth:'25vw', flexDirection: 'column', alignlugar: 'center'}}>            
                    <Card mt="3">
                        <Text ml={2}>
                            Descripción: {paquete.description}
                            <br/>
                            Duración apróximada: {paquete.duration}
                            <br/>
                            Precio: {totalPrice}
                        </Text>
                    </Card>
                    <Button bg="#f5d494" mt={4} onClick={handleAdd}>Comprar Paquete</Button>
                </div>
            </div>
            <BotonScrollTop/>
        </Flex>
    );
};

export default PaqueteDetailPage