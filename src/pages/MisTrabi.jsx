import { Flex, Stack, Heading, SimpleGrid, Box, IconButton, Image, CardBody, Text, CardFooter, Button} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { PaqueteCard } from "../components/PaqueteCard";
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import getPackages from "../services/packagesServices";
import { memoryHook } from "../hooks/memoryHook";
import { BotonScrollTop } from "../components/BotonScrollTop";
import { CrearTrabi } from "../components/CrearTrabi";


function MisTrabi() {
  const idUsuario = JSON.parse(localStorage.getItem("usuarioCookie")).id
  const [memoPackages, addPackages, removePackage] = memoryHook();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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
            <Usuario/>
            <Heading textAlign={"center"}>MIS TRABI</Heading>
        <Flex justifyContent="space-between" alignItems="center" mt={7}>
          <Stack spacing={3}>
            {packages.map((item) => (
              <Link to={`/descripcionPaquete/${item.id}`} style={{textDecoration: 'none'}}>
                <PaqueteCard paquete={item} onBuy={onBuy}/>
              </Link>
            ))}
          </Stack>
        </Flex>
        <Box position="fixed" bottom={4} right={4}>
          <IconButton icon={<AddIcon/>} onClick={handleOpen} />
        </Box>
        <CrearTrabi isOpen={isOpen} onClose={handleClose}></CrearTrabi>
        <BotonScrollTop/>
      </Flex>
      
  );
}

export default MisTrabi
