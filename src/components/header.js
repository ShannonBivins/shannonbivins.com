import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  function toggleMenu(btn)
  {
      if(document.getElementById('menu').classList.contains('active'))
      {
          document.getElementById('menu').classList.remove('active');
          btn.classList.remove('fa-x');
          btn.classList.add('fa-bars');
      }
      else
      {
          document.getElementById('menu').classList.add('active');
          btn.classList.remove('fa-bars');
          btn.classList.add('fa-x');
      }
  }

  return (
    <header
      style={{
        padding: 0,
        display: `flex`,
        alignItems: `flex-start`,
        justifyContent: `space-between`,
        height: `100px`,
        zIndex: 9,
      }}
    >
      <Link id="sb-logo" to="/">
        <StaticImage src="../images/sb-logo-circuits.svg" alt="" />
      </Link>

      <div id="menu">
          <div id="menu-btn">
              <FontAwesomeIcon icon={'fa-bars'} id="menu-btn-inner" className={ 'fa-solid fa-bars' } onClick={(e) => { toggleMenu(e.nativeEvent.srcElement) }} active="false"/>
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
