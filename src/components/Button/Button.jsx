import React from 'react'

const Button = (props) => {
    const {
        isActive,
        children,
        onClick
    } = props

    const buttonClasses = `btn ${isActive && 'btn_active'}`

    const handleClick = event => {
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <button className={buttonClasses} onClick={handleClick}>
            {children}
        </button>
    )
}

export { Button } 
