import React from 'react'
import './experience.css'

const Experience = (Info) => {
  return (
    <div className="experience">
      {Info.title ? <h2>{Info.title}</h2> : <h2>Experience</h2>}
      {Info.experience.map((exp, index) => (
        <div key={index} className="job">
          <div>
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
          </div>
          <p>{exp.duration}</p>
        </div>
      ))}
    </div>
  )
}

export default Experience
