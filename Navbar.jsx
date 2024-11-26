import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>KFC</h2>
        </div>
      
        <ul className='nav-list'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>

    </div>
  )
}

export default Navbar
