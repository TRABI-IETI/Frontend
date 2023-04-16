import { useMediaQuery, Flex, Heading, Card, Image, Text, Stack, CardBody, CardFooter, Button, Box  } from '@chakra-ui/react'

const items = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "200"
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "300"
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "400"
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        title: 'Card 3', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: "400"
    }
  ];

  const totalPrice = items.reduce((acc, item) => acc + parseInt(item.price), 0);

  

function ShoppingCart(){

    const [isLargerThanMd] = useMediaQuery("(min-width: 1640px)");

    return(
        <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
            <Flex  textAlign="center">
                <Heading>Carro de compras</Heading>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" flexDirection={isLargerThanMd ? "row" : "column"} mt={10}>
                <Box marginLeft={{ base: "0", md: "-10%" }}>
                    <Stack spacing={4}>
                        {items.map((item, index) => (
                            <Card key={index} overflow="hidden" variant="outline" style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                                <Flex>
                                    <Box>
                                        <Image
                                            objectFit="cover"
                                            maxW={{ base: "100%", sm: "25em" }}
                                            src={item.image}
                                            alt="card image"
                                        />
                                    </Box>
                                    <Box>
                                        <Stack>
                                        <CardBody>
                                            <Heading size="sm" maxW={{ base: "100%", sm: "25em" }}>{item.title}</Heading>
                                            <Text py="2">{item.description}</Text>
                                        </CardBody>
                                        <CardFooter>
                                            <Button variant="solid" color="black" background="#f5d494">
                                                Buy for ${item.price}
                                            </Button>
                                        </CardFooter>
                                        </Stack>
                                    </Box>
                                </Flex>
                            </Card>
                        ))}
                    </Stack>
                </Box>
                <Box marginBottom={"40%"}>
                    <Card textAlign={"center"} style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                        <Heading mb={10} mt={10} mr={10} ml={10}>Total a pagar:</Heading>
                        <p mr={10} ml={10}>Total: ${totalPrice}</p>
                        <Button mb={10} mt={10} mr={10} ml={10} color="black" background="#f5d494">Pagar</Button>
                    </Card>
                </Box>
            </Flex>
        </Flex>
        
    )
}

export default ShoppingCart;