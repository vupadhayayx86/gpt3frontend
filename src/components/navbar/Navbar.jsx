import React, { useState } from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import Menu from './Menu'
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3_navbar-menu">
          {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />}
          {toggleMenu  && (
            <div className="gpt3_navbar-menu_container scale-up-center">
                <div className="gpt3_navbar-menu_container-links">
                  <Menu />
                  <div className="gpt3_navbar-menu_container-links-sign">
                    <p>Sign In</p>
                    <button type="button">Sign Up</button>
                  </div>
                </div>
            </div>
          )}
      
      </div>
    </div>
  )
}

export default Navbar