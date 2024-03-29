import '../App.css';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import {ShopRoute, HomeRoute,RegisterRoute,AuthRoute, NewsRoute, ContactsRoute} from '../utils/consts';
import {Link} from 'react-router-dom';

const Footer = ()=> {
    return (
        <Flex 
            mt={'90vh'}
            ml={'33.3%'}
            width = {'30%'}
            height = {'70px'}
            justify ={'space-around'}
            align ={'center'}
        >
          <Link ><Text><b>BookWorm 2024</b></Text></Link>
         
          <Link to ={NewsRoute}><Text><b>Новости</b></Text></Link>
          <Link to ={ContactsRoute}><Text><b>Контакты</b></Text></Link>
        </Flex>





    )
}
















export default Footer;