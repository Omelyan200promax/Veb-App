import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond, Image } from '@chakra-ui/react';
import MnogoKnig  from '../pages/AboutPageImg/mnogoknig.jpg';


const BooksPage = () =>{
    return (
        
        <Box  margin ='0'>
           <NavBarMin />
           <Flex justify ="center"   flexWrap={'wrap'}
                width={'100%'}
                gap={'80px'}
                mt={'80px'}  >
                    

               
           </Flex>
           
        </Box>
        

    )
}
export default BooksPage;