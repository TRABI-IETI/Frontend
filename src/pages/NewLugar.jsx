import { Flex, Stack, Heading, SimpleGrid, Box, IconButton, Image, CardBody, Text, CardFooter, Button, Input} from "@chakra-ui/react";
import { PaqueteCard } from "../components/BuyCard";
import { useEffect, useState } from "react";
import { Usuario } from '../components/usuario';
import { ArrowBackIcon } from "@chakra-ui/icons";
import {FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'

function NewLugar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack=()=>{
    window.history.back()
  }

  const [formulario, setFormulario] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    horario: "",
    precio: "",
    restriccion: "",
    descripcion: "",
    urlImage: ""
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
    alert(`Nombre: ${formulario.nombre} Direccion: ${formulario.direccion} Telefono: ${formulario.telefono} Horario: ${formulario.horario} Precio: ${formulario.precio} Restriccion: ${formulario.restriccion} Descripcion: ${formulario.descripcion} Image: ${formulario.urlImage}`);
  };

  const handleClearFiels = () => {
    setFormulario({
        nombre: "",
        direccion: "",
        telefono: "",
        horario: "",
        precio: "",
        restriccion: "",
        descripcion: "",
        urlImage: ""
    })
  }

  const [formValidation, setFormValidation] = useState('')

  return (
    <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
        <SimpleGrid column={3} alignItems={"center"} width={"100%"} >
        <IconButton justifySelf={"start"} icon={<ArrowBackIcon/>} variant={"ghost"} onClick={handleBack}/>
            <Heading gridColumn={"2"} textAlign={"center"}>Nuevo Lugar</Heading>
        <Box gridColumn={"3"} justifySelf={"end"} mr={10}>
            <Usuario/>
        </Box>
        </SimpleGrid>
        <Flex justifyContent="space-between" alignItems="center">
        </Flex>
        <Box>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input name="nombre" type="text" value={formulario.nombre} onChange={handleChange} htmlSize={40} width='auto' variant='filled' placeholder='Nombre Completo'/>
                </FormControl> 
                <FormControl isRequired>
                    <FormLabel>Dirección</FormLabel>
                    <Input name="direccion" type="text" value={formulario.direccion} onChange={handleChange} variant='filled' placeholder='Dirección Lugar'/>
                </FormControl> 
                <FormControl isRequired>
                    <FormLabel>Telefono</FormLabel>
                    <Input name="telefono" type="tel" value={formulario.telefono} onChange={handleChange} variant='filled' placeholder='Teléfono de Contacto' pattern="[0-9]+" minLength={8} maxLength={10} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Horario</FormLabel>
                    <Input name="horario" type="text" value={formulario.horario} onChange={handleChange} variant='filled' placeholder='Horario'/>
                </FormControl> 
                <FormControl isRequired>
                    <FormLabel>Precio</FormLabel>
                    <Input name="precio" type="number" value={formulario.precio} onChange={handleChange} variant='filled' placeholder='Precio de entrada' min={0}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Restricción</FormLabel>
                    <Input name="restriccion" type="text" value={formulario.restriccion} onChange={handleChange} variant='filled' placeholder='Restricciones Existentes'/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Descripción</FormLabel>
                    <Input name="descripcion" as="textarea" value={formulario.descripcion} onChange={handleChange} variant='filled' placeholder='Descripción del lugar'/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Imagen</FormLabel>
                    <Input name="urlImage" type="text" value={formulario.urlImage} onChange={handleChange} variant='filled' placeholder='Url de la Imagen'/>
                </FormControl>
                <Button colorScheme="blue" type="submit">
                    Enviar
                </Button>
                <Button colorScheme="blue" type="delete" onClick={handleClearFiels}>
                    Borrar
                </Button>
                </Stack>
            </form>
        </Box>
    </Flex>
  );
}

export default NewLugar
