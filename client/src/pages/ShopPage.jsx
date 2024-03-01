import '../App.css';
import NavBar from '../components/NavBar';
import CardItem from '../components/CardItem';
import CardItem1 from '../components/CardItem1';
import CardItem2 from '../components/CardItem2';
import CardItem3 from '../components/CardItem3';
import CardItem4 from '../components/CardItem4';
import { Flex } from '@chakra-ui/react';
const ShopPage = () =>{
    return (
        <Flex
            // overflow ={'visible'}
            // flexwrap={'wrap'}
            // gap ={'35%'}
            // mt ={'50px'}
            justify={'center'}
            width={'100%'}
            flexWrap={'wrap'}
        >
            <NavBar/>
            <Flex
                flexWrap={'wrap'}
                width={'90%'}
                gap={'80px'}
                mt={'55px'}
            >
                <CardItem/>
               
                <CardItem1/>
                <CardItem2/>
                <CardItem3/>
                <CardItem4/>


                
            </Flex>

            
           
        </Flex>

    )
}
export default ShopPage;