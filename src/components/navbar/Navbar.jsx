import React, { useState } from 'react'
import './navbar.css'
import { RiMenu4Line } from 'react-icons/ri'
import Info from '../../configs/data'
import ContactsIcon from '../cards/contacts-icon/ContactsIcon'
import NavItem from './NavItem'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  let toggleState = open ? 'top-[7%]' : 'top-[-100%]'

  function handleClick() {
    setOpen((open) => !open)
  }

  // Home
  // Academic Background
  // Professional Experience
  // Volunteering Experience
  // Awards and Honors
  // Research and Publications
  // Certification and Mentionable Participation

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div className="flex items-center mt-4">
          <RiMenu4Line className="text-3xl cursor-pointer md:hidden text-slate-600" onClick={handleClick} size={30} />
        </div>
        <div className={`${toggleState} duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto  w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-7 gap-5">
            <NavItem to="/" text="Home" />
            <NavItem to="/1" text="Academic Background" />
            <NavItem to="/2" text="Professional Experience" />
            <NavItem to="/3" text="Volunteering Experience" />
            <NavItem to="/4" text="Awards and Honors" />
            <NavItem to="/5" text="Research and Publications" />
            <NavItem to="/6" text="Certification and Mentionable Participation" />
          </ul>
        </div>
        <div className="flex items-center mt-4">
          <ContactsIcon contact={Info.contact} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
