import '../App.css';
import NavBar from '../components/NavBar';
import CardItem from '../components/CardItem';
import CardItem1 from '../components/CardItem1';
import CardItem2 from '../components/CardItem2';
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
                gap={'50px'}
                mt={'55px'}
            >
                <CardItem/>
               
                <CardItem1/>
                <CardItem2/>

                
            </Flex>

            
           
        </Flex>

    )
}
export default ShopPage;