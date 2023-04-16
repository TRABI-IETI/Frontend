import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart'

export function AppRouter(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      );
}