import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button, Box, IconButton } from "@chakra-ui/react";

export function LugarCard(props){
    const {lugar,idUser,onDeletePlace} = props;

    const handleDeletePlace = () => {
        onDeletePlace(lugar.name, lugar.price);
    }

    return(
        <Card key={lugar.name} overflow="hidden" variant="outline" mt="3">
            
            <Box style={{ display: 'flex', flexDirection: 'row' }} key={lugar.name} p={4}>
                <Image src={lugar.imagen} alt={lugar.name} width="50%" height="50%" />
                <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>
                    <Heading size="md">{lugar.name}</Heading>
                    <Text mt={4}>{lugar.description}</Text>
                </Box>
                {idUser !== JSON.parse(localStorage.getItem("usuarioCookie")).id ? null : (
                    <IconButton icon={<DeleteIcon />} variant={'outline'} colorScheme="#ff2b00" marginLeft="auto"onClick={() => handleDeletePlace()}/>
                )}
            </Box>
        </Card>
    )
}