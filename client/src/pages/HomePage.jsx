import '../App.css';
import NavBar from '../components/NavBar';
import {Flex,Heading,Button,Link, Image, Box, Text} from '@chakra-ui/react';
import Footer from  '../components/Footer';
import colors from '../utils/colors';
import ToTopButton from '../components/ToTopButton';
import osnova from '../pages/osnova.jpg';
import books from '../pages/books.jpg';
import books2 from '../pages/books2.jpg'
import books3 from '../pages/books3.jpg'


const HomePage =()=>{
    
    const {coffe,darkCoffe,brightBalck, mintWhite} = colors();
    return(
        <Box height={'100vh' } >
            <>
                <NavBar />
                {/* СДЕЛАТЬ ПЕРЕМЕННЫЕ С КАРТИНКАМИ КАК В CARDINEM */}
                {/* <Image> src= {osnova}</Image>
                <Image> src= {books}</Image> */}
               
                <Image
                    mt ={'15vh'}
                   
                    src ={osnova}
                    width ={'50%'}
                    height={'50%'}
                ></Image>
                <Flex justify ={'center'} align = {'center'} width = {'270px'} height = {'230px'} position = {'absolute'} mt ={'-330px'} ml ={'1400px'} boxShadow={'12px 10px 15px -2px  rgb(225, 185, 133) '}><Text  fontSize ='25px' as ='b'>Более 2000 книг на любой вкус и цвет 📚<br/> <br/>Выгодные акции еженедельно 💯 </Text></Flex>
               

                <Image
                     position = {'absolute'}
                     right ={'0'}
                    mt ={'13vh'}
                    src ={books}
                    width ={'75%'}
                    height={'60%'}
                ></Image>

                <Box width = {'300px'}  position = {'absolute'} ml={'90px'} mt = {'300px'} boxShadow={'-12px 10px 15px -2px  rgb(225, 185, 133) '} ><Text fontSize ='25px' as ='b'>Книги любых жанров. Учебные пособия для всех возрастов. Редкие экземпляры. Найдите то, что нужно вам!  </Text></Box>
                 <Image
                   
                    mt ={'86vh'}
                    src ={books2}
                    width ={'55%'}
                    height={'50%'}
                ></Image>
                <Box width = {'310px'} boxShadow={'12px 10px 15px -2px  rgb(225, 185, 133) '} position = {'absolute'}   mt ={'-300px'} ml ={'1400px'}><Text  fontSize ='25px' as ='b'>Наш адрес:<br/> ул. Советская 54, г. Брест </Text></Box>
                 <Image
                    position = {'absolute'}
                    right ={'0'}
                    mt = {'130px'}
                    src ={books3}
                    width ={'75%'}
                    height={'60%'}
                ></Image>
                <Box width = {'350px'}  boxShadow={'-12px 10px 15px -2px  rgb(225, 185, 133) '} position = {'absolute'} ml={'100px'} mt = {'340px'} ><Text fontSize ='24px' as ='b'>Заглядывай в "Книжного Червя" почаще и проводи время с пользой ! 😉 </Text></Box>
                
                
                <ToTopButton/>
            
                <Footer />
            </>
   



        </Box>
         )
}
export default HomePage;