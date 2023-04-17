import { Flex, Stack, Heading, SimpleGrid, Box, IconButton, Image, CardBody, Text, CardFooter, Button} from "@chakra-ui/react";
import { PaqueteCard } from "../components/PaqueteCard";
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import getPackages from "../services/packagesServices";
import { memoryHook } from "../hooks/memoryHook";

const items = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 1,
      title: 'Paquete 1',
      price: '1000', 
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      id: 2,
      title: 'Paquete 2',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      id: 3,
      title: 'Paquete 3',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      id: 4,
      title: 'Paquete 4',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      id: 5,
      title: 'Paquete 5',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

function Paquetes() {
  const [memoPackages, addPackages, removePackage] = memoryHook();

  const [packages, setPackages] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    getPackages({"idUsuario": null}).then((paquetes) => setPackages(paquetes));
  }, []);

  const handleBack=()=>{
    window.history.back()
  }

  function onBuy(item){
    addPackages(item)
  }

  

  return (
    <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
        <SimpleGrid column={3} alignItems={"center"} width={"100%"} >
        <IconButton justifySelf={"start"} icon={<ArrowBackIcon/>} variant={"ghost"} onClick={handleBack}/>
            <Heading gridColumn={"2"} textAlign={"center"}>PAQUETES</Heading>
        <Box gridColumn={"3"} justifySelf={"end"} mr={10}>
            <Usuario/>
        </Box>
        </SimpleGrid>
        <Flex justifyContent="space-between" alignItems="center">
          <Stack spacing={3}>
            {packages.map((item) => (
              <Link to={`/descripcionPaquete/${item.id}`} style={{textDecoration: 'none'}}>
                <PaqueteCard paquete={item} onBuy={onBuy}/>
              </Link>
            ))}
          </Stack>
        </Flex>
      </Flex>
  );
}

export default Paquetes
