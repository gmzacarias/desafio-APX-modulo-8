import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import css from "./navbar.css"


export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 769) {
            setIsOpen(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
     
    
    
    function handleToggleMenu() {
        setIsOpen(!isOpen)
    }

    function closeMenu() {
        setIsOpen(false);
      }

    return (
        <nav>
            <div className={css.navbarContainer} >
                
                <div className={css.navMenu} onClick={handleToggleMenu}>
                    {isOpen ? <FiX className={css.icons} /> : <FiMenu className={css.icons} />}
                </div>
                <ul className={`${css.navbarNav} ${isOpen ? css.show : ""}`}>
                    <li className={css.navItem}>
                        <Link to="/reportpet" className={css.navLink} onClick={closeMenu}>
                            Reportar mascota
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/myreports" className={css.navLink} onClick={closeMenu}>
                            Mis reportes
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/mydata" className={css.navLink} onClick={closeMenu}>
                            Mis datos
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                            Iniciar sesion
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

