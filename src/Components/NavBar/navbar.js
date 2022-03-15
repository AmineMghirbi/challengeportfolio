import React from 'react';
import  './navbar.css';
const Navbar = () => {
  return (
    <div className='container-navbar'>
        <h1 className='nabvar-title'>JOHN DON</h1>
        <ul className='container-list'>
            <li><a href='#' className='container-list-item'>About</a></li>
            <li><a href='#' className='container-list-item'>Projects</a></li>
            <li><a href='#' className='container-list-item'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar

