import { NavLink } from "react-router-dom";
import './navMenu.css';
import { Button } from "../aodesu/button";
import { useThemeContext } from "../aodesu/te";

export default function NavMenu() {
    const { theme, setTheme } = useThemeContext();
    return (
        <>  
            <div className="nav-container">
                <nav className="nav-menu">
                    <div className="linkspace">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/products/1">Product 1</NavLink>
                        <NavLink to="/products/2">Product 2</NavLink>
                    </div>
                    <div>
                        <Button onClick={() => {
                            let newTheme;

                            if (theme === "dark") {
                                newTheme = "light"
                            } else {
                                newTheme = "dark";
                            }

                            setTheme(newTheme);
                        }}>CAMBIAR TEMA DE MIERDA</Button>
                        <Button asChild>
                            <NavLink to="/singup">Singup</NavLink>
                        </Button>
                    </div>
                </nav>
            </div>
            
        </>
        
    )
}