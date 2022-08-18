import { Box, Flex, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
export const Navbar = () => {
    return <>
        <Flex ml="15%" mr="15%" mt="1%" minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='lg'>Link Shortener</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    </>
}