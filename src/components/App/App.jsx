import React from 'react'
import { Navigation } from '../Navigation'
import { SkillsList } from '../SkillsList'
import { Info } from '../Info'
import { Experience } from '../Experience'

const App = () => {
    const [currentTab, setCurrentTab] = React.useState('info')

    const isInfo = currentTab === 'info'
    const isSkills = currentTab === 'skills'
    const isExperience = currentTab === 'experience'

    return (
        <div className='app'>
            <Navigation
                isInfo={isInfo}
                isSkills={isSkills}
                isExperience={isExperience}
                setCurrentTab={setCurrentTab}
            />

            {isInfo && <Info />}
            {isSkills && <SkillsList />}
            {isExperience && <Experience />}
        </div>
    )
}

export { App }
