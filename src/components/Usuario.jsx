import ShoppingCart from "../pages/ShoppingCart"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart, FaCircle , FaSuitcase } from 'react-icons/fa';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, WrapItem, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from "react";


export function Usuario(){
    const navigate = useNavigate()

    const handleShoppingCart = ()=>{
        navigate("/shoppingCart")
    }
    const handleHome = ()=>{
        navigate("/home")
    }

    const handleLogout = ()=>{
        navigate("/")
        localStorage.clear()
    }

    const handleBack=()=>{
        window.history.back()
    }

    const handleMisTrabi = ()=>{
        navigate("/misTrabi")
    }

    const location = useLocation();

    function checkPackages() {
        const packages = JSON.parse(localStorage.getItem('packages'));
        return packages.length > 0;
      }

    return(
            <SimpleGrid column={2} alignItems={"center"} width={"100%"} background={"#189795"} mb={3}>
            <Box gridColumn={"1"} justifySelf={"start"}>
                {location.pathname === '/home' ? null : (
                    <IconButton ml={2} icon={<ArrowBackIcon/>} variant={"ghost"} onClick={handleBack} />
                )}
            </Box>
            <Box gridColumn={"2"} justifySelf={"end"}>
                <IconButton variant="ghost" icon={<FaHome />} mr={2} onClick={handleHome}></IconButton>
                <IconButton icon={<FaSuitcase   />} variant={"ghost"} mr={2} onClick={handleMisTrabi}/> 
                <IconButton icon={<FaShoppingCart />} variant={"ghost"} mr={2} onClick={handleShoppingCart} position="relative" _after={
                checkPackages() && {
                content: "''",
                bg: "red.500",
                borderRadius: "full",
                width: "1rem",
                height: "1rem",
                position: "absolute",
                top: "0rem",
                right: "-0.15rem",
                } }/>    
                <Menu>
                    <MenuButton as={Avatar} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size="md" />
                    <MenuList>
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem onClick={handleLogout} >Cerrar sesión</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            </SimpleGrid>  
    )
}