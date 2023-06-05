import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { Header } from "components/header";
import { Footer } from "components/footer"

// import ("./layout.css") //importacion dinamica;
import css from "./layout.css"
console.log(css)

export function Layout() {

    return (
        <div className={css.layoutContainer} >
            <header>
                <Header />
            </header>
            <Outlet></Outlet>
            <footer className={css.footer}>
                <Footer />
            </footer>
        </div>
    )
}