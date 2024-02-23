import {ShopRoute, HomeRoute} from './utils/consts' //добавляем пути??
import ShopPage from './pages/ShopPage' //добавляем страницу
import HomePage from './pages/HomePage'
export const publicRoutes = [
    {
        path:ShopRoute,
        Element:ShopPage
    },
    {
        path:HomeRoute,
        Element:HomePage
    }

];

