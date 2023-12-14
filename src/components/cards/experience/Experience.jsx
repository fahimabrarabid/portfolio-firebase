import React from 'react'
import parse from 'html-react-parser'
import './experience.css'

const Experience = (Info) => {
  const { title, experiences } = Info

  return (
    <div className="experience">
      {title ? <h2>{title}</h2> : ''}

      {experiences.map((exp, index) => (
        <div key={index} className="job">
          <h3>{parse(exp.title)}</h3>
          <div className="flex justify-between">
            {exp.subtitle ? <h4>{exp.subtitle}</h4> : ''}
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
