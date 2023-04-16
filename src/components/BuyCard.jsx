import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import { memoryHook } from "../hooks/memoryHook";

export function PaqueteCard(props){
    const {paquete} = props;

    const [packages, addPackages] = memoryHook();

    function handleBuy(){
      addPackages(paquete);
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
                  <Button variant='solid' colorScheme='blue' onClick={handleBuy}>
                    Buy for ${paquete.price}
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
    )
}