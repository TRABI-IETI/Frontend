import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button, IconButton } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";


export function PaqueteCard(props){
    const {paquete, onBuy, onCart, onRemove} = props;

    function handlebuy (){
      onBuy(paquete);
    }
    const location = useLocation();

    return(
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={paquete.imagen} alt={paquete.name}/>
                <Stack>
                <CardBody>
                  <Heading size='md'>{paquete.name}</Heading>
                  <Text py='2'>{paquete.description}</Text>
                </CardBody>
                <CardFooter>
                {location.pathname === '/shoppingCart' ? null : (
                  <Button variant='solid' colorScheme='blue' onClick={handlebuy}>
                    Buy for ${paquete.price}
                  </Button>
                  )}
                  {}
                  <IconButton display={onCart ? "block" : "none"} ml={3} bg="#ff2b00" variant={"outline"} icon={<DeleteIcon/>} onClick={onRemove}>Eliminar</IconButton>
                </CardFooter>
              </Stack>
            </Card>
    )
}