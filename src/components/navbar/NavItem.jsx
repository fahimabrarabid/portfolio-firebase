import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavItem = (props) => {
  const isActiveLink = () => {
    return props.to === window.location.pathname
  }

  let border = ''

  if (isActiveLink()) border = 'border-b-4 border-slate-700 md:border-b-0'

  return (
    <li>
      <NavLink onClick={props.onClick} to={props.to}>
        <span className={`${border} md:flex md:items-center text-gray-700 md:text-gray-200 hover:text-gray-500 md:hover:text-gray-400 text-center font-semibold`}>{props.text}</span>
        {isActiveLink() && <motion.div className="h-1 hidden md:block md:bg-slate-300" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}></motion.div>}
      </NavLink>
    </li>
  )
}

export default NavItem
