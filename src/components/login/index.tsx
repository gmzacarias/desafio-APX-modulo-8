import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { emailState, isLoggedState, passwordState, tokenState } from "state/atoms";
import { useNavigate, Link } from 'react-router-dom';
import { Title } from "components/ui/title"
import { Label } from "components/ui/label";
import { Input } from "components/ui/inputs";
import { Button } from "components/ui/buttons";
import css from "./login.css"
import { SubTitle } from "components/ui/subtitle";
import { signIn } from "lib/api";
import { useEmailValue } from "hooks";
import { toast } from "sonner";
import { loginError, loginTrue } from "components/sonner";



export function Login() {
  const navigate = useNavigate();
  const emailValue = useRecoilValue(emailState)
  const [password, SetPassword] = useRecoilState(passwordState)
  const setAuthToken = useSetRecoilState(tokenState)
  const islogged = useSetRecoilState(isLoggedState)

  function handlePassword({ target }) {
    SetPassword(target.value)
  }



  function handleSignIn() {
    if (emailValue && password) {
      signIn(emailValue, password,).then((response) => {
        const { token } = response;

        if (token !== null) {
          console.log("bienvenido", emailValue);
          setAuthToken(token)
          islogged(true)
          loginTrue()
          navigate("/")

        } else {
          console.log("contraseña mal ingresada")
          loginError()

        }
      })

    } else {
      console.log("por favor ingrese un correo electronico y una contraseña", emailValue, password)
    }

  }



  return (<div className={css.loginContainer}>
    <Title >Inicio de Sesion</Title>
    <SubTitle>bienvenido:{emailValue}</SubTitle>
    <Label>password</Label>
    <Input type="password" name="password" placeholder="Ingrese su contraseña" value={password} onChange={handlePassword} width="300px" required></Input>
    <Button type="button" onClick={handleSignIn} color="primary" width="300px">Iniciar sesion</Button>
    <Link className={css.links} to="/forgot-password">
      <p>olvide mi contraseña</p>
    </Link>
  </div>
  )
}