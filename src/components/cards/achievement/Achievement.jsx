import React from 'react'
import './achievement.css'

const Achievement = (Info) => {
  return (
    <div className="achievements">
      <h2>Achievements</h2>
      <div className="achievement-container">
        {Info.achievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <div>
              {achievement.titleLink ? (
                <a href={achievement.titleLink} target="_blank">
                  <h3>{achievement.title}</h3>
                </a>
              ) : (
                <h3>{achievement.title}</h3>
              )}
              <p>{achievement.description}</p>
            </div>
            <div className="achievement-bottom">
              {achievement.year ? <h4>{achievement.year}</h4> : ''}
              {achievement.link ? (
                <a target="_blank" href={achievement.link}>
                  {achievement.linkText ? achievement.linkText : 'Link'}
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

export default Achievement
