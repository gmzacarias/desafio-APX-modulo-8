import React from "react";
import css from "./check-email.css";
import { useNavigate, Link } from 'react-router-dom';
import { Login } from "pages/login";

export function CheckEmail() {
  const navigate = useNavigate();

  function handleLogin() {
   const login= navigate("/auth/signin");
   console.log("redirect" ,login)
  }

  return (
    <main className={css.checkEmailContainer}>
      <h1>bienvenido</h1>
      <p>ingrese su email</p>
      <input type="text" />
      <button onClick={handleLogin}>Continuar</button>
      <p>aun no tenes cuenta?
      <Link to="/auth/signup">
        <button>Registrarse</button>
      </Link>
      </p>
    </main>
  );
}