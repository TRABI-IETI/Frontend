import { Flex, Stack, Heading, Card, Image, CardBody, Text, CardFooter, Button, Box } from "@chakra-ui/react";

export function LugarCard(props){
    const {lugar} = props;


    return(
        <Card key={lugar.title} overflow="hidden" variant="outline" mt="3">
            <Box style={{ display: 'flex', flexDirection: 'row' }} key={lugar.title} p={4}>
                    <Image src={lugar.image} alt={lugar.title}  width="50%" height="50%"/>
                    <Box p={4}>
                        <Heading size="md">{lugar.title}</Heading>
                        <Text mt={4}>{lugar.description}</Text>
                    </Box>
            </Box>
        </Card>
    )
}