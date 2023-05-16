import React from 'react'
import './education.css'

const Education = (Info) => {
  return (
    <div className="education">
      <h2>Academic Background</h2>
      {Info.education.map((edu, index) => (
        <div key={index} className="institute">
          <h3>{edu.institute}</h3>
          {edu.degree ? <h4>{edu.degree}</h4> : ''}
          <div className="flex justify-between">
            {edu.location ? <h5>{edu.location}</h5> : ''}
            {edu.duration ? <h5>{edu.duration}</h5> : ''}
          </div>
          {edu.status ? <p>{edu.status}</p> : ''}
          {edu.cgpa ? <div className="gpa">CGPA: {edu.cgpa}</div> : ''}
        </div>
      ))}
    </div>
  )
}

export default Education
