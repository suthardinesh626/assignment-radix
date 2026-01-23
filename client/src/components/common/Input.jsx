import React from 'react'

const Input = ({ inputName, style, value, onChange, type = "text" }) => {
    return (
        <div>
            <input 
                type={type} 
                placeholder={inputName} 
                className={style}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input