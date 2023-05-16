import React from 'react'
import './skills.css'

const Skills = (Info) => {
  return (
    <div className="skills">
      <h2>Core Competencies</h2>
      <ul>
        {Info.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
