import React from 'react'
import './SideBar.css'
import {IoClose} from 'react-icons/io5'

function SideBar({onClick}) {

  const handleClick = () => {
    onClick (false);
  }

  return (
    <div className='side'>
      <div className='side__container'>
        {/* close btn */}
        <IoClose className='closeBtn' onClick={handleClick}/>
        {/* home btn */}
        <a href='#'>Home</a>
        {/* shop */}
        <a href='#'>Shop</a>
        {/* about */}
        <a href='#'>About</a>
        {/* authentication */}
        <div className='auth'>
          {/* login */}
          <a href='#'>Login</a>
          {/* register */}
          <a href='#'>Register</a>
        </div>
          
          
      </div>
    </div>
  )
}

export default SideBar