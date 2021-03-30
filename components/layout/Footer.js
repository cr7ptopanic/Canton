import {
    Flex,
    Text,
} from "@chakra-ui/core";

const Footer = () => {
    return (
        <Flex flexDirection={["column", "column", "column", "row"]} p="2rem 0" justifyContent="space-between">
            <Flex flexDirection="row" justifyContent="center">
                <Text color="orange.100" mr="1rem" cursor="pointer" userSelect="none">Temrs & Conditions</Text>
                <Text color="orange.100" mr="1rem" cursor="pointer" userSelect="none">Privacy Policy</Text>
            </Flex>
            <Flex flexDirection="row" justifyContent="center" mt={["1rem", "1rem", "1rem", 0]}>
                <Text color="orange.100">Powed by</Text>
                <Text color="orange.100" ml="0.5rem" fontWeight="bold">Oddle me</Text>
            </Flex>
        </Flex>
    )
}

export default Footer;