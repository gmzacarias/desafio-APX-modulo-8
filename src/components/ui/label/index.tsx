import React from "react";
import css from "./label.css"

type Props={
    children:string|any
}

export function Label(props:Props){
    return <h3 className={css.label}>{props.children}</h3>
}
