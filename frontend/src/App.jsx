import { Routes , Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ProductsDetail from './pages/productsDetail';
import NavMenu from './modules/layaud';
import './App.css'

export default function App() {
  return (
    <div>
      <NavMenu />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/products/:id' element={<ProductsDetail />} />
      </Routes>
    </div>
  );
}
