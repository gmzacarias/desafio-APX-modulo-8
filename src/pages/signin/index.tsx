import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { emailState, isLoggedState, passwordState, tokenState } from "state/atoms";
import { useNavigate, Link } from 'react-router-dom';
import { Title } from "components/ui/title"
import { Label } from "components/ui/label";
import { Input } from "components/ui/inputs";
import { Button } from "components/ui/buttons";
import css from "./signin.css"
import { SubTitle } from "components/ui/subtitle";
import { signIn } from "lib/api";
import { handleSignIn } from "hooks";
import { toast } from "sonner";
import { loginTrue } from "components/sonner";
import { Login } from "components/login";


export function SignIn() {
  //  const navigate = useNavigate();
  // const emailValue = useRecoilValue(emailState)
  // const [password, SetPassword] = useRecoilState(passwordState)
  // const setAuthToken = useSetRecoilState(tokenState)
  // const islogged = useSetRecoilState(isLoggedState)

  // function handlePassword({ target }) {
  //   SetPassword(target.value)
  // }



  // function handleSignIn() {
  //   if (emailValue && password) {
  //     signIn(emailValue, password,).then((response) => {
  //       const { token } = response;

  //       if (token !== null) {
  //         console.log("bienvenido", emailValue);
  //         setAuthToken(token)
  //         islogged(true)
  //         loginTrue()
  //         navigate("/")

  //       } else {
  //         console.log("contraseña mal ingresada")
  //         alert("error en la contraseña")
  //       }
  //     })

  //   } else {
  //     console.log("por favor ingrese un correo electronico y una contraseña", emailValue, password)
  //   }

  // }


  return (
    <main className={css.loginContainer}>
    <Login/>
    </main>
  )

}