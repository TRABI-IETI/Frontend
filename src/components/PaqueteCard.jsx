import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getPlace } from '../services/placesServices';

export function PaqueteCard(props){
    const {paquete} = props;
    const [lugar, setLugar] = useState({});

    useEffect(() => {
      window.scrollTo(0, 0);
      const places = paquete.places;

      if(places.length === 0){
        const prov = {"imagen": "https://cdn.discordapp.com/attachments/1097284237528399962/1097319695763374130/Blank-Package-PNG-Image.png"}
        setLugar(prov);
      }else{
        const place = places[0]

        getPlace(place).then((lugar) => setLugar(lugar));
      }
    }, [])

    return(
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' style={{ boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.2)" }}>
                <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={lugar.imagen} alt={paquete.name}/>
                <Stack>
                <CardBody>
                  <Heading size='md'>{paquete.name}</Heading>
                  <Text py='2'>{paquete.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    ${paquete.price}
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
    )
}