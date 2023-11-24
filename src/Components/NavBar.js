import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix Logo'></img>
        <div className='left'>
        <a href='#' style={{color:'white' ,textDecoration:'none'}}>Home</a>
        <a href='#' style={{color:'white' ,textDecoration:'none'}}>TV Shows</a>
        <a href='#' style={{color:'white' ,textDecoration:'none'}}>Movies</a>
        <a href='#' style={{color:'white' ,textDecoration:'none'}}>New & Popular</a>
        <a href='#' style={{color:'white' ,textDecoration:'none'}}>My List</a>
        <a href='#' style={{color:'white' ,textDecoration:'none'}}>Browse by languages</a>
        </div>
        <div className='right'>
          <a href='#' style={{color:'white' ,textDecoration:'none'}}>Children</a>
        <img className='avathar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avathar'></img>
        </div>
    </div>
  )
}

export default NavBar