import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  function toggleMenu(btn)
  {
      if(document.getElementById('menu').classList.contains('active'))
      {
          document.getElementById('menu').classList.remove('active');
      }
      else
      {
          document.getElementById('menu').classList.add('active');
      }
  }

  return (
    <header>
      <Link id="sb-logo" to="/">
        <StaticImage src="../images/sb-logo-circuits.svg" alt="Shannon Bivins Logo" loading="eager" placeholder="none"/>
      </Link>

      <div id="menu">
          <div id="menu-btn">
              <FontAwesomeIcon icon={'fa-bars'} id="menu-btn-inner" className={ 'fa-solid fa-bars' } onClick={ toggleMenu } active="false"/>
          </div>
          
          <div id="menu-items">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
          </div>
      </div>
    </header>
  )
}

export default Header
