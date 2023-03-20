import React from 'react'
import Style from "./home.module.css"
import Users from './Users'
import CreateUsers from './CreateUsers'
import {Link} from 'react-router-dom'


const HomeCurd = () => {
  return (
    <div id={Style.nav}>
        <Link to='/user'>CREATE-USERS</Link>
        <Link to='/'>USER</Link>
    </div>
  )
}

export default HomeCurd