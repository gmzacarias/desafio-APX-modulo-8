// 
import React, { useState } from 'react';
import css from "./inputs.css";


type Props = {
    type: string
    name: string | any
    placeholder: string
    value: string | any
    width?: String | any
    required: true | false
    onChange?: (e?) => void | null
};

export function Input(props: Props) {
    const { type, name, placeholder, value, required, width, onChange } = props;

    return <input
        className={css.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        style={{ width: props.width }}
    />
}