import ShoppingCart from "../pages/ShoppingCart"
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart  } from 'react-icons/fa';
import { Box, Button, WrapItem, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'


export function Usuario(){
    const navigate = useNavigate()
    const handleShoppingCart = ()=>{
        navigate("/shoppingCart")
    }
    const handleHome = ()=>{
        navigate("/")
    }
    return(
        <Box>
            <IconButton variant="ghost" icon={<FaHome />} mr={2} onClick={handleHome}></IconButton>
            <IconButton icon={<FaShoppingCart />} variant={"ghost"} mr={2} onClick={handleShoppingCart}/>        
            <Menu>
                <MenuButton as={Avatar} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size="md" />
                <MenuList>
                    <MenuItem>Perfil</MenuItem>
                    <MenuItem>Cerrar sesión</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}