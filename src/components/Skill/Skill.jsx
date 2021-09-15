import React from 'react'

const FIVE_SQUARES = Array(5).fill(0)

const Skill = (props) => {
    const { skillName, skillProficiency, level } = props

    return (
    <div className='skill'>
        <span className='skill_name'>{skillName}</span>
        <div className='dashes' />
        <div className='skill_proficiency'>
            {level || FIVE_SQUARES.map((_, index) => {
                const isFilled = (index + 1 <= skillProficiency)

                return <div key={index} className={`square ${isFilled ? 'filled' : ''}`}></div>
            })}
        </div>
    </div>
    )
}

export { Skill }
