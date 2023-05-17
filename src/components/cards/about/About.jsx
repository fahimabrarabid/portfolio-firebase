import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = (props) => {
  return (
    <div className="about">
      <div className="left">
        <div className="sec-1">
          <h2>About</h2>
          <p>{props.info.about} </p>
        </div>
        <div className="sec-2">
          <h2>Pro-bono Service</h2>
          <ul>
            {props.info.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <Link to="/appointment">Book an Appointment</Link>
        <span>Pie Chart Here</span>
      </div>
    </div>
  )
}

export default About
