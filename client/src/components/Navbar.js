import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="nav-contair, navbar">
      <Link to="/profile" className='nav-link'>Profile</Link>
      <Link to="/post" className='nav-link'>Post</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}