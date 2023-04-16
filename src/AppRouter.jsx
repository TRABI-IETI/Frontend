import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'
import Paquetes from './pages/Paquetes';
import PaqueteDetailPage from './pages/PaqueteDetailPage';
import Lugares from './pages/Lugares';

export function AppRouter(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
          <Routes>
            <Route path="/paquetes" element={<Paquetes />} />
          </Routes>
          <Routes>
            <Route path="/lugares" element={<Lugares />} />
          </Routes>
          <Routes>
            <Route path="/descripcionLugar" element={<PaqueteDetailPage />} />
          </Routes>
        </BrowserRouter>
      );
}