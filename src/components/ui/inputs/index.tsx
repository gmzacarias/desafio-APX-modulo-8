// 
import React, { useState } from 'react';
import css from "./inputs.css";


type Props = {
    type: string
    pattern: string | null
    placeholder: string
    value: string
   width?:String|any
    required: true | false
    onChange?: (e?) => void | null
};

export function Input(props: Props) {
    const { type, pattern, placeholder, value, required,width, onChange } = props;

    return <input
    className={css.input}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        style={{ width: props.width }}
    />
}