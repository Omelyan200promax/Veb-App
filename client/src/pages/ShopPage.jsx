import '../App.css';
import NavBar from '../components/NavBar';
import {useRef,useEffect, useState} from 'react';
import Loader from '../components/Loader'
import CardItem from '../components/CardItem';
import CardItem1 from '../components/CardItem1';
import CardItem2 from '../components/CardItem2';
import CardItem3 from '../components/CardItem3';
import CardItem4 from '../components/CardItem4';
import CardItem5 from '../components/CardItem5';
import CardItem6 from '../components/CardItem6';
import CardItem7 from '../components/CardItem7';
import CardItem8 from '../components/CardItem8';
import CardItem9 from '../components/CardItem9';

import { Flex } from '@chakra-ui/react';
const ShopPage = () =>{

    // const [isLoading, setIsLoading] = useState(true);
    // useEffect (()=> {
    //     const fetchData = async () =>{
    //         await new Promise(resolve => setTimeout (resolve, 800));
    //         setIsLoading(false)


    //     }
    //     fetchData();
    // }, [])
    
    return (
        // <>
        //    {isLoading ? (
        //         <Loader />
        //     ) : (
        <Flex 
            // overflow ={'visible'}
            // flexwrap={'wrap'}
            // gap ={'35%'}
            // mt ={'50px'}
            justify={'center'}
            width={'100%'}
            flexWrap={'wrap'}
            id = "shop"
            
        >
        
        
   
            <NavBar/>
            
            <Flex
                
                flexWrap={'wrap'}
                width={'90%'}
                gap={'80px'}
                mt={'130px'}
            >
                <CardItem/>
               
                <CardItem1/>
                <CardItem2/>
                <CardItem3/>
                <CardItem4/>
                <CardItem5/>
                <CardItem6/>
                <CardItem7/>
                <CardItem8/>
                <CardItem9/>



                
            </Flex>

            
           
        </Flex>
    //     )}
    // </>

    )
}
export default ShopPage;