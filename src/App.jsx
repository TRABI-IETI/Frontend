import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
// import './style/app.css'
import { Flex, Heading, Card, Box, Image, Text } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from './pages/Home';
import Paquetes from './pages/Paquetes';

function App() {
  
  
  return (
    <Box bg='linear-gradient(to bottom, #20cbc7, #86ce80)'>
      <Paquetes/>
    </Box>

  );
}

export default App
