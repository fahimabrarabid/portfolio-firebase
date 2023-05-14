import React from 'react'
import './skills.css'

const Skills = (Info) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {Info.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
