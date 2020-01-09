import React, { useRef } from "react"
import PropTypes from "prop-types"

import "../scss/index.scss"

import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <>
      <main style={{minHeight: "100vh"}}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
