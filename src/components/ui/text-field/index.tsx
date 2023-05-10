import React from "react";
import css from "./index.css"

export function TextField({value,onChange}){
    return <input  value={value} onChange={onChange} className={css.root}></input>
}

export function texto2(props){
    return <input  {...props} className={css.root}></input>//le paso todas las props al input
}

export function Texto3({name}){
    return <input name={name} className={css.root}></input>
}
