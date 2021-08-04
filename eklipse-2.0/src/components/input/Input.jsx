import React from 'react'

import './input.css';

function Input({text, className, actionInput, value, name, type}) {
    return (
        <input
            className={className}
            onChange={actionInput}
            placeholder={text}
            value={value}
            name={name}
            type={type}
        />
    )
}

export default Input;