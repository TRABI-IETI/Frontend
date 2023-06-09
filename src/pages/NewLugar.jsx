import { Flex, Stack, Heading, SimpleGrid, Box, IconButton, Image, CardBody, Text, CardFooter, Button, Input} from "@chakra-ui/react";
import { PaqueteCard } from "../components/LugarBuyCard";
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import {FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import { createPlace } from "../services/placesServices";
import { useNavigate } from "react-router-dom";

function NewLugar() {

  const navigate = useNavigate() 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack=()=>{
    window.history.back()
  }

  const [formulario, setFormulario] = useState({
    name: "",
    price: "",
    address: "",
    phone: "",
    schedule: "",
    restrictions: "",
    description: "",
    imagen: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPlace(formulario);
    navigate("/lugares")
    
    //alert(`Nombre: ${formulario.nombre} Direccion: ${formulario.direccion} Telefono: ${formulario.telefono} Horario: ${formulario.horario} Precio: ${formulario.precio} Restriccion: ${formulario.restriccion} Descripcion: ${formulario.descripcion} Image: ${formulario.urlImage}`);
  };

  const handleClearFiels = () => {
    setFormulario({
        name: "",
        price: "",
        address: "",
        phone: "",
        schedule: "",
        restrictions: "",
        description: "",
        imagen: ""
    })
  }

  const [formValidation, setFormValidation] = useState('')

  const handleCancel=()=>{
    navigate("/lugares")
  }

  return (
    <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
            <Usuario/>
            <Heading textAlign={"center"}>NUEVO LUGAR</Heading>
        <Flex justifyContent="space-between" alignItems="center">
        </Flex>
        <Box mt={7}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input name="name" type="text" value={formulario.name} onChange={handleChange} htmlSize={40} width='auto' variant='filled' placeholder='Nombre Completo'/>
                </FormControl> 
                <FormControl isRequired>
                    <FormLabel>Precio</FormLabel>
                    <Input name="price" type="number" value={formulario.price} onChange={handleChange} variant='filled' placeholder='Precio de entrada' min={0}/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Dirección</FormLabel>
                    <Input name="address" type="text" value={formulario.address} onChange={handleChange} variant='filled' placeholder='Dirección Lugar'/>
                </FormControl> 
                <FormControl isRequired>
                    <FormLabel>Telefono</FormLabel>
                    <Input name="phone" type="tel" value={formulario.phone} onChange={handleChange} variant='filled' placeholder='Teléfono de Contacto' pattern="[0-9]+" minLength={8} maxLength={10} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Horario</FormLabel>
                    <Input name="schedule" type="text" value={formulario.schedule} onChange={handleChange} variant='filled' placeholder='Horario'/>
                </FormControl> 
                <FormControl>
                    <FormLabel>Restricción</FormLabel>
                    <Input name="restrictions" type="text" value={formulario.restrictions} onChange={handleChange} variant='filled' placeholder='Restricciones Existentes'/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Descripción</FormLabel>
                    <Input name="description" as="textarea" value={formulario.descripcion} onChange={handleChange} variant='filled' placeholder='Descripción del lugar'/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Imagen</FormLabel>
                    <Input name="imagen" type="text" value={formulario.urlImage} onChange={handleChange} variant='filled' placeholder='Url de la Imagen'/>
                </FormControl>
                <Stack spacing={4} direction='row' align='center'>
                <Button colorScheme="blue" type="submit">
                    Enviar
                </Button>
                <Button colorScheme="blue" type="delete" onClick={handleClearFiels}>
                    Limpiar
                </Button>
                <Button colorScheme="blue" type="delete" onClick={handleCancel}>
                    Cancelar
                </Button>
                </Stack>
                </Stack>
            </form>
        </Box>
    </Flex>
  );
}

export default NewLugar
