import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <div class="container">
      <p>&copy; 2023 Iqbal Rizan. All Rights Reserved.</p>
      <ul className='footer-ul'>
        <li><a href="/">Home</a></li>
        <li><a href="/-about">About</a></li>
        <li><a href="/-contacts">Contact</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer