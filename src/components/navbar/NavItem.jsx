import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
  return (
    <li>
      <NavLink onClick={props.onClick} to={props.to} className={({ isActive }) => (isActive ? 'border-b-4 border-slate-800 md:border-slate-300' : '')}>
        <span className="hover:text-gray-500 text-gray-700 md:hover:text-gray-400 md:text-gray-100 text-center font-semibold">{props.text}</span>
      </NavLink>
    </li>
  )
}

export default NavItem
