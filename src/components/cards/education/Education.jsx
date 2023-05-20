import React from 'react'
import './education.css'

const Education = (Info) => {
  return (
    <div className="education">
      <h2>Academic Background</h2>
      {Info.education.map((edu, index) => (
        <div key={index} className="institute">
          <div className="flex justify-between">
            <h3>{edu.institute}</h3>
            {edu.duration ? <h5 className="text-right">{edu.duration}</h5> : ''}
          </div>
          {/* 
              if location exist then just render 
              the degree. else render degree and
              the date with a flex box. if noting 
              exist then don render anything.. lol
          */}{' '}
          {edu.degree ? <h4>{edu.degree}</h4> : ''}
          {/* Render both if location exist */}
          {edu.location ? <h5>{edu.location}</h5> : ''}
          {edu.status ? <p>{edu.status}</p> : ''}
          {edu.gpa ? <div className="gpa">{edu.gpa}</div> : ''}
        </div>
      ))}
    </div>
  )
}

export default Education
