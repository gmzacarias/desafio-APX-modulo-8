import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue, selector, useSetRecoilState } from "recoil";

const queryState = atom({
    key: "query",
    default: "",
})

const resultsState = selector({
    key: "searchResults",
    get: async ({ get }) => {
        const valorDeQuery = get(queryState)
        if (valorDeQuery) {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery);
            const json = await response.json();
            return json.results;
        } else {
            return []
        }
    }
})




export function useSearchResults() {
    const params = useParams();
    const query = params.query;
    // 1 -escuchar la URL()
    console.log("el router me dice que query cambio", query)

    //3- 
    const setRecoilQuery = useSetRecoilState(queryState)

    // const [results, setResults] = useState([])
    // async function pullResults() {
    //     const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + query)
    //     const dataSearch = await response.json()
    //     console.log(dataSearch)
    //     setResults(dataSearch.results)
    // }


    // 2- avisarle a recoil(useEffect)
    useEffect(() => {
        if (query) {
            // pullResults()
            console.log("soy el custom hook", query)
            setRecoilQuery(query)
        }

    }, [query])
    const results = useRecoilValue(resultsState)
    return results
}



