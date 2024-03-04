import '../App.css';
import NavBar from '../components/NavBar';
import {Flex,Heading,Button,Link, Image, Box} from '@chakra-ui/react';
import Footer from  '../components/Footer';
import colors from '../utils/colors';
import ToTopButton from '../components/ToTopButton';

const HomePage =()=>{
    
    const {coffe,darkCoffe,brightBalck, mintWhite} = colors();
    return(
        <Box height={'100vh'} >
            <>
                <NavBar />
                {/* СДЕЛАТЬ ПЕРЕМЕННЫЕ С КАРТИНКАМИ КАК В CARDINEM */}
                <img src = 'osnova.jpg' alt = 'книги'></img>
                <img src = 'books.jpg' alt = 'книги'></img>
                <ToTopButton/>
            
                <Footer />
            </>
   



        </Box>
         )
}
export default HomePage;