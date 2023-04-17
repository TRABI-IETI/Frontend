import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { getUser } from "../services/loginServices"
import { useNavigate } from "react-router";

const Login=()=>{
    const {toggleColorMode} = useColorMode()
    const formBackgroud = useColorModeValue("gray.100","gray.700")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

  const handleVerifyLogin = () => {
    getUser(email,password).then((usuario) => {
        if(usuario !== null){
            localStorage.setItem("usuarioCookie", JSON.stringify(usuario)) 
            navigate("/home")
        }
    });
    setEmail("")
    setPassword("")
  };

//   useEffect(() => {
//     getUser(email,password).then((usuario) => console.log(usuario));
//   }, [])

    return(
        <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
            <Flex direction={"column"} background={formBackgroud} p={12} rounded={6}>
                <Heading alignSelf={"center"} mb={6}>Log In</Heading>
                <Input placeholder="email" variant={"filled"} mb={3} type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <Input placeholder="password" variant={"filled"} mb={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Button colorScheme="teal" onClick={handleVerifyLogin}>Log In</Button>
                <Button onClick={toggleColorMode}>Dark Mode</Button>
            </Flex>

        </Flex>
    )
}
export default Login