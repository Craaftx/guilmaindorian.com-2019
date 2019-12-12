import React from "react"
import PropTypes from "prop-types"

import "../scss/index.scss"

import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
