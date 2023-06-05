import React, { } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { checkEmail, signIn } from "lib/api";
import { emailState, passwordState, tokenState,isLoggedState } from "state/atoms";

const navigate = useNavigate();




  const emailValue = useRecoilValue(emailState)
  const password = useRecoilValue(passwordState)
  const setAuthToken = useSetRecoilState(tokenState)
  const islogged = useSetRecoilState(isLoggedState)





  export function handleSignIn() {
    if (emailValue && password) {
      signIn(emailValue, password,).then((response) => {
        const { token } = response;

        if (token !== null) {
          console.log("bienvenido", emailValue);
          setAuthToken(token)
          islogged(true)
          navigate("/")

        } else {
          console.log("contraseña mal ingresada")
          alert("error en la contraseña")
        }
      })

    } else {
      console.log("por favor ingrese un correo electronico y una contraseña", emailValue, password)
    }

  }



//   const navigate = useNavigate();
//   const emailValue = useRecoilValue(emailState)
//   const [password, SetPassword] = useRecoilState(passwordState)
//   const setAuthToken = useSetRecoilState(tokenState)
//   const islogged = useSetRecoilState(isLoggedState)

//   function handlePassword({ target }) {
//     SetPassword(target.value)
//   }



//   function handleSignIn() {
//     if (emailValue && password) {
//       signIn(emailValue, password,).then((response) => {
//         const { token } = response;

//         if (token !== null) {
//           console.log("bienvenido", emailValue);
//           setAuthToken(token)
//           islogged(true)
//           navigate("/")

//         } else {
//           console.log("contraseña mal ingresada")
//           alert("error en la contraseña")
//         }
//       })

//     } else {
//       console.log("por favor ingrese un correo electronico y una contraseña", emailValue, password)
//     }

//   }
