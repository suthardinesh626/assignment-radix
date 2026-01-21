import React from 'react'

const Input = ({ inputName, style }) => {
    return (
        <div>
            <input type="text" placeholder={inputName} className={style} />
        </div>
    )
}

export default Input