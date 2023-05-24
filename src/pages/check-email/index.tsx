import React, { useState } from "react";
import css from "./check-email.css";
import { useNavigate, Link } from 'react-router-dom';
import { Login } from "pages/login";
import { Title } from "components/ui/title";
import { TextDisplay } from "components/ui/text-display";
import { Input } from "components/ui/inputs";
import { Button } from "components/ui/buttons";
import { Label } from "components/ui/label";

export function CheckEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")


  function handleInput({ target }) {
    setEmail(target.value)
    console.log("input", email)
  }

  function handleLogin() {
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/)) {
      return console.log("no se puede avanzar")
    } else {
      const login = navigate("/auth/signin");
      console.log("redirect", login)

    }

  }



  return (
    <main className={css.checkEmailContainer}>
      <Title>Bienvenido</Title>
      <div className={css.imagen}></div>
        <Label>Ingrese su email</Label>
        <Input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}" placeholder="example@email.com" value={email} onChange={handleInput} width="300px" required />
        <Button onClick={handleLogin} color="primary" width="300px">Continuar</Button>
        <Label>Aún no tenes cuenta?</Label>
        <Link className={css.links} to="/auth/signup">
          <Button color="secondary" width="300px">Registrarse</Button>
        </Link>
    </main>
  );
}