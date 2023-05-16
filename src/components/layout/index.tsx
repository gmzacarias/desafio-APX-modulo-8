import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { SearchForm } from "../search-form"
import { Header } from "components/header";
import { Footer } from "components/footer"

// import ("./layout.css") //importacion dinamica;
import css from "./layout.css"
console.log(css)


const footerStyle = { backgroundColor: "black", border: "solid 3px black", padding: 40, color: "white" }

export function Layout() {

    return (
        <main className={css.layoutContainer}>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </main>
    )
}