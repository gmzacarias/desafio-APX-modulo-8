import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import css from "./navbar.css"


export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <nav>
            <div className={css.navbarContainer}>
                
                <div className={css.navMenu} onClick={handleToggleMenu}>
                    {isOpen ? <FiX className={css.icons} /> : <FiMenu className={css.icons} />}
                </div>
                <ul className={`${css.navbarNav} ${isOpen ? css.show : ""}`}>
                    <li className={css.navItem}>
                        <Link to="/reportpet" className={css.navLink}>
                            Reportar mascota
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/myreports" className={css.navLink}>
                            Mis reportes
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/mydata" className={css.navLink}>
                            Mis datos
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/auth" className={css.navLink}>
                            Iniciar sesion
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

