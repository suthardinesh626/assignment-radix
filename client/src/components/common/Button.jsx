import React from 'react'

const Button = ({ ButtonName, onClick, className, disabled = false, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {ButtonName}
        </button>
    )
}

export default Button