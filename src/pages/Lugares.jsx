import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button} from "@chakra-ui/react";
import { LugarCard } from "../components/LugarCard";
import { PaqueteCard } from "../components/BuyCard";
import { useEffect } from "react";

const items = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 1,
      title: 'Card 3',
      price: '1000', 
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      id: 2,
      title: 'Card 3',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      id: 3,
      title: 'Card 3',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      id: 4,
      title: 'Card 3',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      id: 5,
      title: 'Card 3',
      price: '1000',  
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

function Lugares() {

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

  return (
    <Flex justifyContent= "center" alignItems= "center" flexDirection="column">
        <Flex justifyContent="center" alignItems="center" mb={4} flexDirection="row" mt="4">
            <Heading>LUGARES</Heading>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Stack spacing={3}>
            {items.map((item) => (
              <PaqueteCard paquete={item}/>
            ))}
          </Stack>
        </Flex>
      </Flex>
  );
}

export default Lugares