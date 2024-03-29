import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,Img, color, backgrond, Image , Card} from '@chakra-ui/react';
const Loader = ()=>{
    return (
        <Flex  h = {'100vh'} w ={'100%' } justify = {'center'} align = {'center'} bg = {'rgb(225, 185, 133)'}>
            
            <div font-size ='50px'>Loading...</div>
        </Flex>
            
    )
}
export default Loader