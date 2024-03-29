import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,Img, color, backgrond, Image , Card} from '@chakra-ui/react';



const ContactsPage = () => {
    return(
        <Box margin ='0' >
            <NavBarMin />

            <div dispaly ='flex' flex-direction ='column' width ='100%' justify-content = 'center' margin-top ='100px'  >
                <Text>Телефоны:</Text>
                <Text>+375 29 333 33 33 A1</Text>
                <Text>+375 29 999 99 99 MTC</Text>
                <Text>+375 555 55 55 Life</Text>
                <Text>E-mail:bookworm@bookworm.by</Text>
                <Text>Skype:BookWorm.by</Text>
                <Text>Адрес: ул. Советская 54, г. Брест</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                
            </div>


            </Box>
     


    )

}

export default ContactsPage;