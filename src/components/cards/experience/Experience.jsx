import React from 'react'
import parse from 'html-react-parser'
import './experience.css'

const Experience = (Info) => {
  return (
    <div className="experience">
      {Info.title ? <h2>{Info.title}</h2> : ''}

      {Info.experience.map((exp, index) => (
        <div key={index} className="job">
          <h3>{parse(exp.company)}</h3>
          <div className="flex justify-between">
            {exp.position ? <h4>{exp.position}</h4> : ''}
            {exp.duration ? <h5 className="text-right">{exp.duration}</h5> : ''}
          </div>

          {exp.location ? <h5>{exp.location}</h5> : ''}
          <ul>
            {exp.details
              ? exp.details.map((detail, i) => <li key={i}>{parse(detail)}</li>)
              : ''}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Experience
