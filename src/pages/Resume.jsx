import React from 'react'
import './resume.css'
import useDocumentTitle from '../assets/js/useDocumentTitle'
import Info from '../configs/data'
import ProfilePicture from '../components/cards/profile/ProfilePicture'
import Profile from '../components/cards/profile/Profile'
import Contact from '../components/cards/contacts/Contacts'
import Education from '../components/cards/education/Education'
import Skills from '../components/cards/skills/Skills'
import Projects from '../components/cards/projects/Projects'
import Experience from '../components/cards/experience/Experience'
import Achievements from '../components/cards/achievements/Achievements'
import { Login } from '../components/googleAuth/Login'
import Calendar from '../components/googleCalendar/Calendar'
import About from '../components/cards/about/About'

const Resume = () => {
  useDocumentTitle(Info.profile.name + "'s Profile")

  return (
    <div className="container">
      <div className="top-header">
        <ProfilePicture picture={Info.profile.picture} />
        <Profile info={Info.profile} />
        <About info={Info.profile} />
      </div>
      <div className="bottom">
        <div className="left-side">
          {/* <Login /> */}
          <Contact contact={Info.contact} showTitle="true" />
          <Education education={Info.education} />
          {/* <Achievements achievements={Info.achievements} /> */}
        </div>
        <div className="right-side">
          <Skills skills={Info.skills} />
          {/* <Projects projects={Info.projects} />
          <Experience experience={Info.experience} /> */}
        </div>
      </div>
      {/* <Calendar id={Info.calendarID } /> */}
    </div>
  )
}

export default Resume
