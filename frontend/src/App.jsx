import { Routes , Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './App.css'

export default function App() {
  return (
    <div>
      {/* Menú de navegación */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
          
        <p>hola</p>
      <hr />

      {/* Aquí definimos las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}
