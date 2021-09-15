import React from 'react'
import { Button } from '../Button'

const IMAGE_LINK = 'https://i.pinimg.com/564x/36/c1/d3/36c1d3ae572d37a1e8a0152859590d27.jpg'

const Navigation = (props) => {
    const {
        isInfo,
        isSkills,
        isExperience,
        setCurrentTab
    } = props

    const setInfo = () => setCurrentTab('info')
    const setSkills = () => setCurrentTab('skills')
    const setExperience = () => setCurrentTab('experience')

    return (
        <div className='navigation'>
            <div className='wrapper_info'>
                <img className='photo' src={IMAGE_LINK} alt='photo' />
                <span className='name'>Lilianna Ruzhynskaya</span>
            </div>

            <div className='nav_buttons'>
                <Button isActive={isInfo} onClick={setInfo}>
                    info
                </Button>
                <Button isActive={isSkills} onClick={setSkills}>
                    skills
                </Button>
                <Button isActive={isExperience} onClick={setExperience}>
                    experience
                </Button>
            </div>
        </div>
    )

}

export { Navigation }
