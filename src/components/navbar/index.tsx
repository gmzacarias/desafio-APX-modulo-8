import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import { MdPets,MdReport } from "react-icons/md";
import { useEmailValue, useLogged, useLoggedValue } from "hooks";
import css from "./navbar.css"

export function NavBar() {
    const email = useEmailValue()
    const isLogged = useLoggedValue()
    const setLogged = useLogged()
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
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
        setLogged(false);
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
                    {isOpen ? <FiX className={css.iconsMenu} /> : <FiMenu className={css.iconsMenu} />}
                </div>
                <ul className={`${css.navBar} ${isOpen ? css.open : "none"}`}>
                    <li className={css.navItem}>
                        <Link to="/reportpet" className={css.navLink} onClick={closeMenu}>
                            <MdPets className={css.icons} />
                            Reportar mascota
                        </Link>
                    </li>
                    <li className={css.navItem}>
                        <Link to="/myreports" className={css.navLink} onClick={closeMenu}>
                        <MdReport className={css.icons} />
                            Mis reportes
                        </Link>
                    </li>
                    {isLogged ?
                        (
                            <>
                                <li className={css.navItem}>
                                    <Link to="/mydata" className={css.navLink} onClick={closeMenu}>
                                        <FiUser className={css.icons} />
                                        {email}
                                    </Link>
                                </li>
                                <li className={css.navItem}>
                                    <Link to="/" className={css.navLink} onClick={handleLogout}>
                                        <FiLogOut className={css.icons} />
                                        Cerrar Sesion
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={css.navItem}>
                                    <FiUser className={css.icons} />
                                    <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                                        Mis datos
                                    </Link>
                                </li>
                                <li className={css.navItem}>
                                    <Link to="/auth" className={css.navLink} onClick={closeMenu}>
                                        <FiLogIn className={css.icons} />
                                        Iniciar sesion
                                    </Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

