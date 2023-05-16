import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import css from "./signup.css"

export function SignUp() {
    const navigate = useNavigate();



    function handleRedirect() {
        const redirect= navigate("/login/signup");
        console.log(redirect)


    }


    
   
    
    
    
        return (
            <main className={css.signUpContainer}>
            <h1>registrate</h1>
            <img src="" alt="" />
            <input type="text" placeholder="nombre" />
            <input type="text" placeholder="nombre" />
            <input type="text" placeholder="nombre" />

            </main>
        )
    
    }