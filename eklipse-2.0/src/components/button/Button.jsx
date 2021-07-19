import React from 'react'

function Button({text, className, actionButton}) {
    return (
        <button
            className={className}
            onClick={actionButton}
        >
            {text}
        </button>
    )
}

export default Button;
