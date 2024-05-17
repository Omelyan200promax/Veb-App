import '../App.css';
import NavBarMin from '../components/NavBarMin';
import {Text, Box, Flex,Grid, Input,Heading,Button,ButtonGroup,img, color, backgrond } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm';
import {Context} from '../index'
import {useContext} from 'react'

const AuthPage =()=>{
    const {store} = useContext(Context);
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const handleLogin = async (email,password)=>{
        try{
            await store.login(email,password);
            if(store.isAuth){
                alert('Вы залогинены')
            }else{
                store.setError ('Incorrect login or password. Try again!')
                alert ('Ошибка')
            }
        }
        catch(e){
            console.log('An error occured during login.')
        }
    }
    return(
        <Box height = {'100vh'}>
            <><NavBarMin /><AuthForm /></>
        </Box>
        


    )
}
export default AuthPage;