import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button, Box } from "@chakra-ui/react";

export function LugarCard(props){
    const {lugar} = props;

    return(
        <Card key={lugar.name} overflow="hidden" variant="outline" mt="3">
            <Box style={{ display: 'flex', flexDirection: 'row' }} key={lugar.name} p={4}>
                    <Image src={lugar.imagen} alt={lugar.name}  width="50%" height="50%"/>
                    <Box p={4}>
                        <Heading size="md">{lugar.name}</Heading>
                        <Text mt={4}>{lugar.description}</Text>
                    </Box>
            </Box>
        </Card>
    )
}