import React from 'react'

function Input({text, className, actionInput, value, name, type}) {
    return (
        <input
            className={className}
            onChange={actionInput}
            placeholder={text}
            value={value}
            name={name}
            type={type}
        >
            {text}
        </input>
    )
}

export default Input;