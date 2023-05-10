
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainButton } from "components/ui/buttons";
import css from "./home.css"


export function Home() {
    
function handleClick(){

}



    return (
        <section className={css.homeContainer}>
            <h1>mascotas perdidas cerca tuyo</h1>
            <p>Encontrá y reportá mascotas perdidas cerca de tu ubicación</p>
            <MainButton onClick={handleClick} className="my-location" color={"blue"}>dar mi ubicacion actual</MainButton>
        </section>
    )

}