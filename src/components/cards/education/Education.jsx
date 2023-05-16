import React from 'react'
import './education.css'

const Education = (Info) => {
  return (
    <div className="education">
      <h2>Academic Background</h2>
      {Info.education.map((edu, index) => (
        <div key={index} className="institute">
          <h3>{edu.institute}</h3>
          <h4>{edu.degree}</h4>
          <p>{edu.duration}</p>
        </div>
      ))}
    </div>
  )
}

export default Education
