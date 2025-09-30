import { NavLink } from "react-router-dom";
import '../styles/navMenu.css';

export default function NavMenu() {
    return (
        <>
            <nav className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products/1">Product 1</NavLink>
            <NavLink to="/products/2">Product 2</NavLink>
            </nav>
        </>
        
    )
}