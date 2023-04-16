import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";


export function PaqueteCard(props){
    const {paquete, onBuy, onCart, onRemove} = props;

    function handlebuy (){
      onBuy(paquete);
    }

    function handleRemove(){
      onRemove(paquete)
    }

    return(
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={paquete.image} alt={paquete.title}/>
                <Stack>
                <CardBody>
                  <Heading size='md'>{paquete.title}</Heading>
                  <Text py='2'>{paquete.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button variant='solid' colorScheme='blue' onClick={handlebuy}>
                    Buy for ${paquete.price}
                  </Button>
                  {}
                  <Button display={onCart ? "block" : "none"} onClick={handleRemove}>Eliminar</Button>
                </CardFooter>
              </Stack>
            </Card>
    )
}