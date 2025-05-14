import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '40px' }} />
      <nav>
        <a href="#about" style={{ margin: '0 10px' }}>About</a>
        <a href="#services" style={{ margin: '0 10px' }}>Services</a>
        <a href="#contact" style={{ margin: '0 10px' }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
