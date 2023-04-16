import React from 'react';
import { Flex, SimpleGrid, Button, Text, Box, Card, Heading, Image} from "@chakra-ui/react"

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

function LugarDetailPage(){
    return(
        <Flex flexDirection={{ base: 'column', md: 'column' }}>
            <SimpleGrid columns={[1,2,3]} spacing={{ base: '1em', md: '2em', lg: '3em' }} width="100%">
                <Button bg="#f5d494" size="sm" width="30%"  justifySelf="start">Regresar</Button>
                <Text fontSize="30" fontWeight="bold"  justifySelf="center">NOMBRE PAQUETE</Text>
                <Button bg="#f5d494" size="sm" width="30%"  justifySelf="end">Perfil</Button>
            </SimpleGrid>

            <div style={{ display: 'flex', width: '100%', marginTop: "2em" }}>
                <div style={{ flex: '0 0 65%', marginRight: '1em', marginLeft: '2em'  }}>
                {items.map((item) => (
                    <Card key={item.title} overflow="hidden" variant="outline" mt="3">
                        <Box style={{ display: 'flex', flexDirection: 'row' }} key={item.title} p={4}>
                                <Image src={item.image} alt={item.title}  width="50%" height="50%"/>
                                <Box p={4}>
                                    <Heading size="md">{item.title}</Heading>
                                    <Text mt={4}>{item.description}</Text>
                                </Box>
                        </Box>
                    </Card>
                ))}
                </div>

                <div style={{ flex: '0 0 30%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>            
                    <Card mt="3">
                        <Text ml={2}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Card>
                    <Button bg="#f5d494" mt={4}>Comprar Paquete</Button>
                </div>
            </div>
        </Flex>
    );
};

export default LugarDetailPage