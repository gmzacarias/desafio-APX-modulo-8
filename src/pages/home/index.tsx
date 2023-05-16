
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainButton } from "components/ui/buttons";
import {Dropzone}from "components/dropzone";
import css from "./home.css"
import BackgroundHome from "../../assets/background-home.png"



export function Home() {
    


    
function handleClick(){
   
}



    return (
        <section className={css.homeContainer}>
            <p>Encontrá y reportá mascotas perdidas cerca de tu ubicación</p>
            {/* <Dropzone /> */}
            
            {/* <Mapbox location={{ center: [-58.3815704, -34.6037389] }} /> */}
            <MainButton onClick={handleClick} className="my-location" color={"blue"}>dar mi ubicacion actual</MainButton>
           <img src={BackgroundHome} alt="background-home" className={css.backgroundImage} /> <h1>mascotas perdidas cerca tuyo</h1>
        </section>
    )

}