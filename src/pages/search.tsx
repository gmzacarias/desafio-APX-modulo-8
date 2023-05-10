
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";




export function Search() {
    const params = useParams();
    useEffect(() => {
        console.log("aca harias el fetch usando el param, params.busqueda")
    }, [params])
    return (
        <div>
            <h1>soy el buscador</h1>
            <Link to="/">link a la home</Link>
            <Link to="/search/termos">busqueda</Link>

        </div>
    )

}