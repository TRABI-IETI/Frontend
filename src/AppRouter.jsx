import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'
import Paquetes from './pages/Paquetes';
import PaqueteDetailPage from './pages/PaqueteDetailPage';
import LugarDetailPage from './pages/LugarDetailPage';
import Lugares from './pages/Lugares';
import NewLugar from './pages/NewLugar';

export function AppRouter(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/paquetes" element={<Paquetes />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/descripcionPaquete/:paqueteId" element={<PaqueteDetailPage />} />
            <Route path="/descripcionLugar/:lugarId" element={<LugarDetailPage />} />
          </Routes>
          <Routes>
            <Route path="/newLugar" element={<NewLugar />} />
          </Routes>
        </BrowserRouter>
      );
}