import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button, IconButton } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePlace } from "../services/placesServices";


export function PaqueteCard(props){
    const {paquete, onBuy, onCart, onRemove} = props;
    const navigate = useNavigate()

    function handlebuy (){
      onBuy(paquete);
    }
    const location = useLocation();

    function checkUser() {
      const user = JSON.parse(localStorage.getItem('usuarioCookie'));
      return user.role === 'A';
    }

    const handleDeletePlace= ()=>{
      deletePlace(paquete.name).then()
      window.location="/lugares"
    }

    return(
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={paquete.imagen} alt={paquete.name}/>
                <Stack>
                <CardBody>
                  <Heading size='md'>{paquete.name}</Heading>
                  <Text py='2'>{paquete.description}</Text>
                </CardBody>
                <CardFooter>
                {/* {location.pathname === '/shoppingCart' ? null : (
                  <Button variant='solid' colorScheme='blue' onClick={handlebuy}>
                    Buy for ${paquete.price}
                  </Button>
                  )} */}
                  {!checkUser() || location.pathname === '/shoppingCart' ? null : (
                    <IconButton icon={<DeleteIcon />} variant={'outline'} colorScheme="#ff2b00" ml={3} onClick={handleDeletePlace}/>

                  )}
                  <IconButton display={onCart ? "block" : "none"} ml={3} bg="#ff2b00" variant={"outline"} icon={<DeleteIcon/>} onClick={onRemove}>Eliminar</IconButton>
                </CardFooter>
              </Stack>
            </Card>
    )
}