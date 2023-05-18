import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavItem = (props) => {
  const isActiveLink = () => {
    return props.to === window.location.pathname
  }

  return (
    <li>
      <NavLink onClick={props.onClick} to={props.to}>
        <span className="hover:text-gray-500 text-gray-700 md:hover:text-gray-400 md:text-gray-100 text-center font-semibold">{props.text}</span>
      </NavLink>
      {isActiveLink() && <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring', stiffness: 100 }} className="h-1 w-full bg-white"></motion.div>}
    </li>
  )
}

export default NavItem
