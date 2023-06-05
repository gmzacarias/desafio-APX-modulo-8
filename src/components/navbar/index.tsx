import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emailState, isLoggedState } from "state/atoms";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import css from "./navbar.css"


export function NavBar() {
    const userEmail = useRecoilValue(emailState);
    const isLoggedIn = useRecoilValue(isLoggedState);
    const setLoggedIn = useSetRecoilState(isLoggedState);
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

    const handleLogout = () => {
        // Lógica para cerrar sesión
        setLoggedIn(false);
        closeMenu()
        // Limpiar cualquier otro estado relacionado con la sesión, si es necesario
    };


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
                <ul className={`${css.navBar} ${isOpen ? css.show : "none"}`}>
                    {isLoggedIn ? (
                        <div>
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
                                <Link to="/mydata" className={css.navLink} onClick={closeMenu}>
                                    {userEmail}
                                </Link>
                            </li>
                            <li className={css.navItem}>
                                <Link to="/" className={css.navLink} onClick={handleLogout}>
                                  Cerrar Sesion
                                </Link>
                            </li>

                        </div>
                    ) : (<div>
                        <li className={css.navItem}>
                            <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                                Reportar mascota
                            </Link>
                        </li>
                        <li className={css.navItem}>
                            <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                                Mis reportes
                            </Link>
                        </li>
                        <li className={css.navItem}>
                            <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                                Mis datos
                            </Link>
                        </li>
                        <li className={css.navItem}>
                            <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                                Iniciar sesion
                            </Link>
                        </li>
                    </div>
                    )
                    }
                </ul>
            </div>
        </nav>
    )
}

