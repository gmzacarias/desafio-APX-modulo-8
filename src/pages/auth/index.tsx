import React, { useState, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { emailState } from "state/atoms";
import css from "./auth.css";

import { Title } from "components/ui/title";
import { Input } from "components/ui/inputs";
import { Label } from "components/ui/label";
import { Button } from "components/ui/buttons";
import { checkEmail } from "lib/api";


export function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useRecoilState(emailState)

  async function handleAuth() {
    const exists = await checkEmail(email)
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}/;

    if (emailRegex.test(email)) {
      if (exists) {
        console.log(email)
        setEmail(email)
        navigate("/auth/signin");
      } else if (!exists) {
        navigate("/auth/signup");
      }
 
    }else{
      console.log("no se puede avanzar")
    }

  }

  function handleInput({ target }) {
    setEmail(target.value)
  }

  function clearInput() {
    setEmail("")
  }

  return (
    <main className={css.checkEmailContainer}>
      <Title>Bienvenido</Title>
      <div className={css.imagen}></div>
      <Label>Ingrese su email</Label>
      <Input type="email" name="email" placeholder="example@email.com" value={email} onChange={handleInput} width="300px" required />
      <Button type="button" onClick={handleAuth} color="primary" width="300px">Continuar</Button>
      <Label>Aún no tenes cuenta?</Label>
      <Link className={css.links} to="/auth/signup">
        <Button type="button" color="secondary" width="300px">Registrarse</Button>
      </Link>
    </main>
  );
}

