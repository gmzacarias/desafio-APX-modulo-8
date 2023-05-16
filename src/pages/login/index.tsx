import React from "react";

import css from "./login.css"


export function Login() {
    

    return (
        <main className={css.loginContainer}>
            <input type="text"  />
            <input type="password" /> 
            <button>Iniciar Sesion</button>
            <button>Crear Cuenta</button>  
        </main>
    )

}