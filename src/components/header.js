import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Logo">
      <Link to="/"><img src={require('../images/logo.svg')} /></Link>
    </div>
    <div className="Section">
      <h1>Hello,I am DowneyChow.<br />A produt designer from China who focuses on high quality vision and technology solutions to create good experience for digital products.</h1>
    </div>
    <nav>
      <Link to="/Creation">Creation</Link>
      <Link to="/Work">Work</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Photogragy">Photogragy</Link>
    </nav>
  </div>

)

export default Header
