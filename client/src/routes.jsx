import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute} from './utils/consts'; //добавляем пути??
import ShopPage from './pages/ShopPage'; //добавляем страницу
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';

export const publicRoutes = [
    {
        path:ShopRoute,
        Element:ShopPage
    },
    {
        path:HomeRoute,
        Element:HomePage
    },
    {
        path:RegisterRoute,
        Element:RegisterPage

    },
    {
        path:AuthRoute,
        Element:AuthPage
    }

];

