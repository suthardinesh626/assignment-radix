import React from 'react'

const Button = ({ ButtonName, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {ButtonName}
        </button>
    )
}

export default Button