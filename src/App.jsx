import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
// import './style/app.css'
import { Flex, Heading, Card, Box, Image, Text } from '@chakra-ui/react'
import Home from './pages/Home';

function App() {
  
  
  return (
    <Box bg="#8ebf55" minHeight="100vh">
    <Home/>
    </Box>
  );
}

export default App
