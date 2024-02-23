import "../App.css";
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';
import {Card,CardHeading,CardBody,CardFooter} from '@chakra-ui/react';
import DostoevskiBook from '../components/3540.jpg';
import MasterAndMargarita from '../components/MaM.jpg'

const CardItem1 =() =>{
    return(
        <Card width ={'280px'} height={'300px'} boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} >
            
            <Flex justify={'center'} align={'center'} width ={'100%'} height ={'190px'}><Image
                src ={MasterAndMargarita}
                width ={'50%'}
                height={'90%'}
            ></Image></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}><b>Мастер и Маргарита</b></p></Flex>
            <Flex width={'100%'} he justify={'center'} align={'center'} ><p text-align={'center'}>М. А. Булгаков </p></Flex>

            <Flex width ={'100%'} justify={'space-around'} align={'center'}>
               
                <Flex width ={'50%'} >Цена: 20 руб.</Flex>
                <Button width ={'30%'} colorScheme='yellow' >Заказать</Button>
            </Flex>

        </Card>
    )
}







export default CardItem1; 