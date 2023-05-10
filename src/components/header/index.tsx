import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';
import css from "./header.css"
import logo from "../../assets/logo.svg"


export function Header() {
    


    return (
        <section className={css.headerContainer}>
            <Link className={css.links} to="/login">
                <img src={logo} className={css.logo} />
            </Link>
            <Hamburger />
<div className={css.navLinksContainer}>
    <ul className={css.listLinks}>
        <li>Mis Datos</li>
        <li>Mis Reportes</li>
        <li>Reportar Mascota</li>
        <li>Iniciar Sesion</li>
    </ul>
</div>


        </section>
    )




}