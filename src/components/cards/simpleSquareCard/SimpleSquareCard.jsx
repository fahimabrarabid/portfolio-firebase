import React from 'react'
import './simnple-square-card.css'

const SimpleSquareCard = (props) => {
  return (
    <div className="sscs">
      {props.title ? <h2>props.title</h2> : ''}
      <div className="ssc-container">
        {props.data.map((d, index) => (
          <div key={index} className="ssc">
            <div>
              {d.titleLink ? (
                <a href={d.titleLink} target="_blank">
                  {d.title ? <h3>{d.title}</h3> : ''}
                </a>
              ) : d.title ? (
                <h3>{d.title}</h3>
              ) : (
                ''
              )}
              <p>{d.description}</p>
            </div>
            <div className="ssc-bottom">
              {d.year ? <h4>{d.year}</h4> : ''}
              {d.link ? (
                <a target="_blank" href={d.link}>
                  {d.linkText ? d.linkText : 'Link'}
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimpleSquareCard
