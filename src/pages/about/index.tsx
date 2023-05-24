import React from "react";
import css from "./about.css";
import { useNavigate, Link } from 'react-router-dom';
import { Login } from "pages/login";
import { Title } from "components/ui/title";


import {TextDisplay} from "components/ui/text-display";

export function About() {
  return (
    <main className={css.aboutContainer}>
      <Title>¿Cómo funciona Pets App?</Title>
      <TextDisplay>En nuestra aplicación, puedes reportar mascotas perdidas y ayudar a encontrarlas.El proceso es sencillo: simplemente regístrate, completa un formulario con detalles importantes como el nombre de la mascota, una foto y su ubicación.<br></br> Esto nos ayudará a difundir la información y aumentar las posibilidades de encontrarla.<br></br> Además, si te encuentras cerca de un lugar donde se ha reportado una mascota perdida, puedes ver las mascotas cercanas en nuestro mapa. <br></br> Esto te permite estar atento y, si las ves, puedes enviarnos un aviso rápidamente. Solo necesitarás completar un formulario con tu nombre, información de contacto y el lugar exacto donde viste a la mascota.<br></br> En "Pets App", nos preocupamos por reunir a las mascotas con sus dueños lo más rápido posible. ¡Únete a nuestra comunidad y ayuda a hacer la diferencia en la vida de estas adorables criaturas!.<br></br> ¡Regístrate hoy mismo y forma parte de nuestra red solidaria para encontrar mascotas perdidas!</TextDisplay>
    </main>
  );
}

