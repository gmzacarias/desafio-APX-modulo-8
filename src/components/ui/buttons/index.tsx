import React, { useState, useEffect } from "react"
import css from "./buttons.css"

const colors = {
    primary: css.primary,
    secondary: css.secondary,
    green: css.green,
    red: css.red,
};




type ButtonProps = {
    children: String|any;
    className?: any
    width?:String|any
    color: keyof typeof colors // solo se puedan pasar colores válidos.
    onClick?: (e?) => void | null
}

export function Button(props: ButtonProps) {
    const {color} = props;
    const buttonColors = colors[color] || "";

    return <button className={`${css.button} ${buttonColors}`} onClick={props.onClick} style={{ width: props.width }}>{props.children}</button>
}


