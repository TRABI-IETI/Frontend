import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button, Box, IconButton } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export function LugarCard(props){
    const {lugar,idUser,onDeletePlace} = props;
    const location = useLocation();

    const handleDeletePlace = () => {
        onDeletePlace(lugar.name, lugar.price);
    }

    console.log(location)

    return(
        <Card key={lugar.name} overflow="hidden" variant="outline" mt="3">
            
            <Box style={{ display: 'flex', flexDirection: 'row' }} key={lugar.name} p={4}>
                <Image src={lugar.imagen} alt={lugar.name} width="50%" height="50%" />
                <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>
                    <Heading size="md">{lugar.name}</Heading>
                    <Text mt={4}>{lugar.description}</Text>
                    {!(location.pathname).includes("/descripcionPaquete") ? "" : (
                    <Box>
                    <Text mt={4}>{lugar.address}</Text>
                    <Text mt={4}>{lugar.phone}</Text>
                    <Text mt={4}>{lugar.schedule}</Text>
                    <Text mt={4}>{lugar.price}</Text>
                    </Box>
                )}
                </Box>
                {idUser !== JSON.parse(localStorage.getItem("usuarioCookie")).id ? null : (
                    <IconButton icon={<DeleteIcon />} variant={'outline'} colorScheme="#ff2b00" marginLeft="auto" onClick={() => handleDeletePlace()}/>
                )}

                
            </Box>
        </Card>
    )
}