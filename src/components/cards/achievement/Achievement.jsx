import React from 'react'
import './achievement.css'

const Achievement = (Info) => {
  return (
    <div className="achievements">
      <h2>Achievements</h2>
      {Info.achievements.map((achievement, index) => (
        <div key={index} className="achievement">
          <div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
          <div className="achievement-bottom">
            <h4>{achievement.year}</h4>
            <a target="_blank" href={achievement.link}>
              Link
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Achievement
