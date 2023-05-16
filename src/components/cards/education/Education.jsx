import React from 'react'
import './education.css'

const Education = (Info) => {
  return (
    <div className="education">
      <h2>Academic Background</h2>
      {Info.education.map((edu, index) => (
        <div key={index} className="institute">
          <h3>{edu.institute}</h3>
          {/* 
              if location exist then just render 
              the degree. else render degree and
              the date with a flex box. if noting 
              exist then don render anything.. lol
          */}
          {!edu.location ? (
            <div className="flex justify-between">
              {edu.degree ? <h4>{edu.degree}</h4> : ''}
              <h5>{edu.duration}</h5>
            </div>
          ) : edu.degree ? (
            <h4>{edu.degree}</h4>
          ) : (
            ''
          )}
          {/* Render both if location exist */}
          {edu.location ? (
            <div className="flex justify-between">
              <h5>{edu.location}</h5>
              <h5>{edu.duration}</h5>
            </div>
          ) : (
            ''
          )}
          {edu.status ? <p>{edu.status}</p> : ''}
          {edu.gpa ? <div className="gpa">{edu.gpa}</div> : ''}
        </div>
      ))}
    </div>
  )
}

export default Education
