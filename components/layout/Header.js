import { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Text,
    Image,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/core";
import Button from '@material-ui/core/Button';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Box
            as="header"
            h="6rem"
            position="fixed"
            top="0"
            zIndex="2"
            p="1rem 0"
            mb="1rem"
            bg="white"
            w="100%"
            maxW="76rem"
        >
            <Flex w="100%" flexDirection="row" display={["none", "none", "none", "flex"]}>
                <Image src="/images/logo.jpeg" w="48px" h="48px"/>
                <Text color="orange.100" fontWeight="bold" fontSize="24px" margin="auto 1rem">canton2go</Text>
                <Text color="orange.100" fontSize="16px" margin="auto 1rem auto auto" cursor="pointer">Menu</Text>
                <Text color="orange.100" fontSize="16px" margin="auto 1rem" cursor="pointer">Store Information</Text>
                <Flex flexDirection="row" cursor="pointer">
                    <Text color="orange.100" fontSize="16px" margin="auto 0 auto 1rem">English</Text>
                    <ChevronDownIcon color="orange.100" m="auto 0.2rem"/>
                </Flex>
                <Flex bg="orange.100" color="white" m="0 1rem" borderRadius="5px" cursor="pointer">
                    <Button style={{color: "white", fontWeight: "bold"}}>Log In / Sign Up</Button>
                </Flex>
                <Box cursor="pointer" m="auto 2rem auto 0">
                    <Image src="/images/cart.png"/>
                </Box>
            </Flex>
            <Flex w="100%" flexDirection="row" display={["flex", "flex", "flex", "none"]} justifyContent="space-between">
                <Box cursor="pointer" m="auto 0" onClick={() => setIsOpen(true)}>
                    <Image src="/images/menu.png"/>
                </Box>
                <Image src="/images/logo.jpeg" w="48px" h="48px"/>
                <Box cursor="pointer" m="auto 2rem auto 0">
                    <Image src="/images/cart.png"/>
                </Box>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={() => setIsOpen(false)}
            >
                <DrawerOverlay>
                <DrawerContent bg="white">
                    <DrawerCloseButton size="lg" color="orange.100"/>
                    <Box p="2rem">
                        <Image src="/images/logo.jpeg" w="60px" h="60px"/>
                        <Text color="orange.100" fontWeight="bold" fontSize="24px" margin="0.5rem 0">canton2go</Text>
                        <Text color="orange.100" fontSize="18px" margin="1rem 0" cursor="pointer">Menu</Text>
                        <Text color="orange.100" fontSize="18px" margin="1rem 0" cursor="pointer">Store Information</Text>
                        <Flex flexDirection="row" cursor="pointer" justifyContent="space-between">
                            <Text color="orange.100" fontSize="18px">Select Language</Text>
                            <ChevronDownIcon color="orange.100" m="auto 0" fontSize="28px"/>
                        </Flex>
                        <Box w="100%" h="2px" bg="orange.100" m="2rem 0"></Box>
                        <Text color="orange.100" fontSize="18px" cursor="pointer">Log In / Sign Up</Text>
                    </Box>
                    
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    )
}

export default Header;