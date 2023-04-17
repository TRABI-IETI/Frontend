import { useEffect, useState } from "react";
import { ModalFooter , Button, Heading, ModalContent, ModalOverlay, useDisclosure, ModalCloseButton, Stack, FormControl, FormLabel, Input    } from "@chakra-ui/react";
import { Modal } from "@chakra-ui/react";
import { ModalBody, ModalHeader } from "reactstrap";
import { createTrabi } from "../services/packagesServices";

export function CrearTrabi(props){

    const [formulario, setFormulario] = useState({
        name: "",
        description: ""
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
        formulario.idUsuario = JSON.parse(localStorage.getItem("usuarioCookie")).id
        createTrabi(formulario.name, formulario);
    };


    const {isOpen, onClose} = props
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Crear Trabi</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired ml={4}>
                        <FormLabel mt={4}>Nombre</FormLabel>
                        <Input name="name" type="text" value={formulario.name} onChange={handleChange} variant='filled'  placeholder='Nombre Completo' width="92%"/>
                    </FormControl> 
                    <FormControl isRequired ml={4}>
                        <FormLabel mt={4}>Descripción</FormLabel>
                        <Input name="description" as="textarea" value={formulario.description} onChange={handleChange} variant='filled' placeholder='Descripción del lugar' width="92%"/>
                    </FormControl>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={handleSubmit}>Crear</Button>
                    <Button ml={4} onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}