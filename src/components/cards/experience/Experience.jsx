import React from 'react'
import './experience.css'

const Experience = (Info) => {
  return (
    <div className="experience">
      {Info.title ? <h2>{Info.title}</h2> : ''}

      {Info.experience.map((exp, index) => (
        <div key={index} className="job">
          <div className="flex justify-between">
            <h3>{exp.company}</h3>
            {exp.duration ? <h5>{exp.duration}</h5> : ''}
          </div>
          {exp.position ? <h4>{exp.position}</h4> : ''}
          {exp.location ? <h5>{exp.location}</h5> : ''}
          <ul>{exp.details ? exp.details.map((detail, i) => <li key={i}>{detail}</li>) : ''}</ul>
        </div>
      ))}
    </div>
  )
}

export default Experience
