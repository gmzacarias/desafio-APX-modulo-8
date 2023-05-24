import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';
import css from "./header.css"
import logo from "../../assets/logo.svg"
import { NavBar } from "components/navbar";


export function Header() {
    
    
    return (
        <main className={css.headerContainer}>
            <div className={css.logoContainer}>
                 <Link className={css.links} to="/">
                <img src={logo} className={css.logo} />
            </Link>
            </div>
            <NavBar />
        </main>
    )

}