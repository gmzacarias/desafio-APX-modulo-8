import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSearchResults } from "../../hooks"
import("./search-form.css")
// import {Mainbutton} from "components/ui/buttons"


export function SearchForm() {
    const history = useNavigate();
    const results = useSearchResults();
    function handleSubmit(e) {
        e.preventDefault()
        const query = e.target.query.value;
        console.log(query)
        history("/search/" + query, { replace: true })

    }

    return (
        <form className="root-search-form" onSubmit={handleSubmit}>
            <input name="query" />
            {/* <Mainbutton>Buscar</Mainbutton> */}
            <h4>Resultados: {results.length}</h4>
        </form>
    )
}