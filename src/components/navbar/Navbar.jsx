import React, { useState } from 'react'
import './navbar.css'
import { RiMenu4Line } from 'react-icons/ri'
import Info from '@/configs/data'
import ContactsIcon from '@/components/cards/contacts-icon/ContactsIcon'
import NavItem from './NavItem'
import IsAdmin from '@/configs/IsAdmin'

const Navbar = () => {
  const isAdmin = IsAdmin()

  const [open, setOpen] = useState(false)
  let toggleState = open ? 'top-[-50%]' : 'top-[-1000%]'

  function handleClick() {
    setOpen((open) => !open)
  }
  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center w-full mx-auto relative z-[1]">
        <div className="flex items-center md:hidden mt-4 relative z-10 ml-4 w-1/12">
          <RiMenu4Line
            className="text-3xl cursor-pointer md:hidden text-slate-600"
            onClick={handleClick}
            size={30}
          />
        </div>
        <div className="w-full flex justify-center md:ml-2 lg:ml-0">
          <div
            className={`${toggleState} bg-white md:bg-slate-700 p-1 mt-2 rounded-lg md:shadow-2xl md:ring-4 md:ring-slate-300 duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 md:w-auto  w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-7 gap-5">
              <NavItem onClick={closeMenu} to="/" text="Home" />
              <NavItem onClick={closeMenu} to="/academic" text="Academic" />
              <NavItem
                onClick={closeMenu}
                to="/experiences"
                text="Experience"
              />
              <NavItem
                onClick={closeMenu}
                to="/achievements"
                text="Achievements"
              />
              <NavItem onClick={closeMenu} to="/research" text="Research" />
              <NavItem onClick={closeMenu} to="/gallery" text="Gallery" />
              <NavItem
                onClick={closeMenu}
                to="/certification"
                text="Certification & Participation"
              />
              {isAdmin && (
                <NavItem onClick={closeMenu} to="/admin" text="Admin Panel" />
              )}
            </ul>
            <div className="hidden lg:flex ml-4 md:ml-4">
              <ContactsIcon contact={Info.contact} />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden items-start mt-4 relative z-10 mr-4">
          <ContactsIcon contact={Info.contact} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
