import React from 'react'
import { Skill } from '../Skill'
import { SkillDescription } from '../SkillDescription'

const MY_SKILLS = [
    { skillName: 'JavaScript', skillProficiency: 3 },
    { skillName: 'TypeScript', skillProficiency: 1 },
    { skillName: 'React', skillProficiency: 1 },
    { skillName: 'HTML', skillProficiency: 4 },
    { skillName: 'CSS', skillProficiency: 4 },
    { skillName: 'SCSS', skillProficiency: 3 },
    { skillName: 'Git', skillProficiency: 2 },
    { skillName: 'Webpack', skillProficiency: 1 }
]

const SkillsList = () => {
    return (
        <div className='skills'>
            <h1 className='skills_title'>Skills</h1>
            <div className='skills_wrapper'>
                <div className='skills_list'>
                    {MY_SKILLS.map((skill, index) => <Skill key={index} {...skill} />)}
                </div>
                <SkillDescription /> 
            </div>
            
            {/* <Skill skillName={skill.skillName} skillProficiency={skill.skillProficiency}/>)} 
            это то же самое что и {...skill} O_O */}
            {/* <br /> */}
            <div className='languages'>
                <Skill skillName='English' level='A2' />
                <Skill skillName='French' level='A2' />
                <Skill skillName='Russian' level='Native' />
            </div>
            
        </div>
    )
}

export { SkillsList }
