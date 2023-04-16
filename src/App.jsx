import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
// import './style/app.css'
import { Flex, Heading, Card, Box, Image, Text } from '@chakra-ui/react'
import { AppRouter } from './AppRouter';
import Home from './pages/Home';
function App() {
  
  
  return (
    <Box bg='linear-gradient(to bottom, #20cbc7, #86ce80)' minHeight="100vh">
        <AppRouter></AppRouter>
    </Box>
  );
}

export default App
