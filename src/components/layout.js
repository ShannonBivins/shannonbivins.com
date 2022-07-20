import * as React from "react"
import Social from "./social"
import Header from "./header"
import "./layout.css"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <><Header/><Social/>
      <div style={{ margin: `0 auto`, maxWidth: `var(--size-content)` }}>
        <main style={{ display: `flex`, justifyContent: `center` }}>{ children }</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
