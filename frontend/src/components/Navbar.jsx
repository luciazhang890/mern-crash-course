import { Button,Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
//import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Box } from '@chakra-ui/react';


const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Box w="100%" textAlign="center" mt={{ base: 4, sm: 6 }}>
                    <Text
                        fontSize={{base: "22", sm: "28" }}
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        textAlign={"center"}
                        bgGradient={"linear(to-r, cyan.500, blue.500)"}
                        bgClip={"text"}
                    >
                        <Link to={"/"}>Product Store</Link>
                    </Text>
                </Box>

                <HStack spacing={2} alignItems={"center"}>
                    
                    <Button as={Link} to="/create">
                        <PlusSquareIcon fontSize={20}/>
                    </Button>
                    

                    <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
  )
}

export default Navbar