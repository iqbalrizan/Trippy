import React, {useState} from 'react'
import {AiFillHome, AiFillContacts} from "react-icons/ai"
import {IoLogoBuffer} from "react-icons/io"
import {MdMiscellaneousServices} from "react-icons/md"
import './NavbarStyles.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
        <div className="nav-logo">
            <h1>TRIPPY</h1>
        </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/"><AiFillHome />Home</a>
        <a href="/-about"><IoLogoBuffer />About</a>
        <a href="/-services"><MdMiscellaneousServices />Service</a>
        <a href="/-contacts"><AiFillContacts />Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar