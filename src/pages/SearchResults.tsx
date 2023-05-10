import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchResults } from "../hooks"




export function SearchResults() {


    const results = useSearchResults()
    return (
        <ul>
            {results.map((r) => (
                <li>
                    <Link to={"/item/" + r.id}>
                        <h2>{r.title}</h2>
                    </Link>
                </li>))}</ul>
    )
}