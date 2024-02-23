
import './App.css';

import NavBar from './components/NavBar';
import CardItem from './components/CardItem';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    //  <><><NavBar /><CardItem /></><ShopPage /></>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
