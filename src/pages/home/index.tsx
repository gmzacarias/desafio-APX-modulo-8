import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components/ui/buttons";
import { Dropzone } from "components/dropzone";

import { FiMapPin } from "react-icons/fi";
import { Title } from "components/ui/title";
import { SubTitle } from "components/ui/subtitle";
import { TextDisplay } from "components/ui/text-display";
import css from "./home.css"

export function Home() {
    const navigate = useNavigate();


    function handleClick() {
        const redirect = navigate("/about")
    }

    return (
        <section className={css.homeContainer}>
            <Title>Bienvenido a Pets</Title>
            <SubTitle>Nos dedicamos a ayudar a reportar y encontrar mascotas perdidas!</SubTitle>
            <TextDisplay>En nuestra plataforma, entendemos la importancia de encontrar mascotas perdidas lo más rápido posible.<br></br>Por eso, hemos implementado una función especial que utiliza tu ubicación para mostrarte las mascotas reportadas como perdidas en tu área cercana.</TextDisplay>
            <div className={css.buttonsContainer}>
                <Button type="button"  className={css.button} onClick={null} color="primary" width="200px">
                    <FiMapPin className={css.icons} />
                    Mi ubicación</Button>
                <Button type="button" onClick={handleClick} color="green" width="200px">¿Cómo funciona Pets App?</Button>
            </div>
        </section>
    )
}