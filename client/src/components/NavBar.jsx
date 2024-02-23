import '../App.css';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img } from '@chakra-ui/react';

const NavBar= ()  =>{
    return (
        <Flex 
        align={'center'}
        width ={'100%'}
        justify ={'space-between'}
        >
            <Heading ml={'5px'}>Bookworm</Heading>
            <Flex width ={'30%'}
            justify={'space-between'}
            >
                <Button colorScheme='yellow'   >Магазин</Button>
                <Button colorScheme='yellow'>О нас</Button>
                <Button colorScheme='yellow'>Книги</Button>
            </Flex>
            <Flex width ={'15%'}   justify={'space-between'}>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/>
                </svg>
                <svg width="51" height="51" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M424.11 192H360L268.8 70.4a16 16 0 0 0-25.6 0L152 192H87.89a32.57 32.57 0 0 0-32.62 32.44a30.3 30.3 0 0 0 1.31 9l46.27 163.14a50.72 50.72 0 0 0 48.84 36.91h208.62a51.21 51.21 0 0 0 49-36.86l46.33-163.36a15.62 15.62 0 0 0 .46-2.36l.53-4.93a13.3 13.3 0 0 0 .09-1.55A32.57 32.57 0 0 0 424.11 192M256 106.67L320 192H192Zm0 245a37.7 37.7 0 1 1 37.88-37.7A37.87 37.87 0 0 1 256 351.63Z"/>
                </svg>
            </Flex>
           

        </Flex>
        
    );
} ;
export default NavBar; 