import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
// import './style/app.css'
import { Flex, Heading, Card, Box, Image, Text } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from './pages/Home';
import LugarDetailPage from './pages/LugarDetailPage';

function App() {
  
  
  return (
    <Box bg="#86ce80">
      <LugarDetailPage/>
    </Box>

  );
}

export default App
