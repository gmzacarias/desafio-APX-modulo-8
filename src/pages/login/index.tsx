import React from "react";

import css from "./login.css"


export function Login() {
    

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
    )

}