import { Routes , Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import ProductsDetail from './pages/products/productsDetail.jsx';
import NavMenu from './components/layaut/layaut';
import Singup from './pages/singUp/singup.jsx';
import './App.css';
import './themes/aodesu.css'

export default function App() {
  return (
    <div>
      <NavMenu />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/products/:id' element={<ProductsDetail />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
    </div>
  );
}
