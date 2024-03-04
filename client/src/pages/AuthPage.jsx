import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm';

const AuthPage =()=>{
    return(
        <Box height = {'100vh'}>
            <><NavBarMin /><AuthForm /></>
        </Box>
        


    )
}
export default AuthPage;