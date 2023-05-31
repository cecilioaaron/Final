import React from 'react'
import { routes } from './routes'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const NavBar = () => {
  return (

    <>
      <h1 className='tittle'>Trabajo Aaron</h1>
      <nav className='navbar'>
      

        {
          routes.map(({ path, name }) => (
            <NavLink
              className="opcion"
              to={path}>
              {name}
            </NavLink>
          ))
        }
      </nav>
    </>
  )
}
// {
//   routes.map(({ path, name }) => (
//     <NavLink
//       className="opcion"
//       to={path}>
//       {name}
//     </NavLink>
//   ))
// }