import { Flex, Stack, Heading, SimpleGrid, Box, IconButton, Image, CardBody, Text, CardFooter, Button} from "@chakra-ui/react";
import { PaqueteCard } from "../components/PaqueteCard";
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import getPackages from "../services/packagesServices";
import { memoryHook } from "../hooks/memoryHook";

const idUsuario = "prueba"
function MisTrabi() {
  const [memoPackages, addPackages, removePackage] = memoryHook();

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPackages({"idUsuario": idUsuario}).then((paquetes) => setPackages(paquetes));
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

export default MisTrabi
