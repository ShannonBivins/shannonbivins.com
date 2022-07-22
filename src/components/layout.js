import React from "react"
import Social from "./social"
import Header from "./header"
import "./layout.css"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Social/>
      <main>{ children }</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout