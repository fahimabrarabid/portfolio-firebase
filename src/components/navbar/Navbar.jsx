import React, { useState } from 'react'
import './navbar.css'
import { RiMenu4Line } from 'react-icons/ri'
import Info from '../../configs/data'
import ContactsIcon from '../cards/contacts-icon/ContactsIcon'
import NavItem from './NavItem'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  let toggleState = open ? 'top-[-50%]' : 'top-[-1000%]'

  function handleClick() {
    setOpen((open) => !open)
  }

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center w-full mx-auto relative z-[1]">
        <div className="flex items-center mt-4 relative z-10 ml-4">
          <RiMenu4Line className="text-3xl cursor-pointer md:hidden text-slate-600" onClick={handleClick} size={30} />
        </div>
        <div className={`${toggleState} duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto  w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-7 gap-5">
            <NavItem onClick={handleClick} to="/" text="Home" />
            <NavItem onClick={handleClick} to="/academic" text="Academic" />
            <NavItem onClick={handleClick} to="/experiences" text="Experience" />
            <NavItem onClick={handleClick} to="/achievements" text="Achievements" />
            <NavItem onClick={handleClick} to="/5" text="Research & Publications" />
            <NavItem onClick={handleClick} to="/6" text="Certification & Participation" />
          </ul>
        </div>
        <div className="flex items-center mt-4 relative z-10 mr-4">
          <ContactsIcon contact={Info.contact} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
