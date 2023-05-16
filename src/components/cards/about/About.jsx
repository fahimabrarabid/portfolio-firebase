import React from 'react'
import './about.css'

const About = (props) => {
  return (
    <div className="about">
      <div className="left">
        <div className="sec-1">
          <h2>About</h2>
          <p>{props.info.about} </p>
        </div>
        <div className="sec-2">
          <h2>Pro-bono Services I Provide</h2>
          <ul>
            {props.info.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <span>Pie Chart Here</span>
      </div>
    </div>
  )
}

export default About
