import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./nav.module.css"
const Menu = () => {
  return (
        <ol id={Style.menuBlock}>
            <li><Link to="/expore">Explore Work</Link></li>
            <li><Link to="/hire">Hire Talents</Link></li>
            <li><Link to="/">Challengs</Link></li>
        </ol>
  )
}

export default Menu