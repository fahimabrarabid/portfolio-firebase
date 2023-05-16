import React, { useState } from 'react'
import './navbar.css'
import { RiMenu4Line } from 'react-icons/ri'
import Info from '../../configs/data'
import ContactsIcon from '../cards/contacts-icon/ContactsIcon'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  let toggleState = open ? 'top-[12%]' : 'top-[-100%]'

  function handleClick() {
    setOpen((open) => !open)
  }

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div className="flex items-center mt-4">
          <RiMenu4Line className="text-3xl cursor-pointer md:hidden text-slate-600" onClick={handleClick} size={30} />
        </div>
        <div className={`${toggleState} duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto  w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-7 gap-5">
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                About Me
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                Academic Background
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                Experiences
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                Achievements
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                Certification
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                Mentionable Participations
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500 text-gray-700 font-semibold" href="#">
                Hobby
              </a>
            </li>
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
