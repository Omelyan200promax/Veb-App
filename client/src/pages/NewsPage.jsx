import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,Img, color, backgrond, Image , Card} from '@chakra-ui/react';
import MnogoKnig  from '../pages/AboutPageImg/mnogoknig.jpg';
import skidka from '../pages/ImgNewsPage/skidka.jpg'
import grafik from '../pages/ImgNewsPage/grafik.jpg'
import dodo from '../pages/ImgNewsPage/dodo.jpg'


const NewsPage =()=>{
    return(
        <Box  margin ='0' >
        <NavBarMin />
        <Flex justify ="center"   flexWrap={'wrap'}
             width={'100%'}
             gap={'80px'}
             mt={'260px'}  >

            <Card> <Flex width = '400px' height ='280px' boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} align={'center'}  >
                <div dispaly ='flex'  flex-direction = 'column ' justify-content ='center' align = 'center' width  = '90%' height = '90%' margin-top='20px' >
                    <Img src = {skidka} width = '250px' height = '120px' ></Img>
                    <Text fontSize ='21px'>Cкидка 20% на все издания для школы до конца марта !</Text>
                </div>
                </Flex></Card>


                <Card> <Flex width = '400px' height ='280px' boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'}   justify ={'center'} >
               
                    <Img src = {grafik} width = '390px' height = '240px' mt={'5px'}></Img>
                    
                
                </Flex></Card>


                <Card> <Flex width = '400px' height ='280px' boxShadow={'-1px 2px 14px -3px  black'} borderRadius ={'8px'} align={'center'}  >
                <div dispaly ='flex'  flex-direction = 'column ' justify-content ='center' align = 'center' width  = '90%' height = '90%' margin-top='20px' >
                    <Img src = {dodo} width = '300px' height = '160px' ></Img>
                    <Text>По 17 апреля при заказе пиццы в «Додо Пицца»  получайте купон на скидку 15% на разовую покупку в BookWorm</Text>
                </div>
                </Flex></Card>

            

            



        </Flex>
        
     </Box>
     


    )

}

    export default NewsPage;