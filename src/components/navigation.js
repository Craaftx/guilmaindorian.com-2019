import React from "react"
import PropTypes from "prop-types"

const Navigation = ({ items }) => {
  return (
    <nav className="navigation">
      <div className="navigation-brand">
        <p>Guilmain Dorian</p>
        <span>Developer &amp; CSS Wizard</span>
      </div>
      <div className="navigation-items">
        <ul>
          {items.map(item => 
            <li onClick={item.handler}>{item.label}</li>
          )}
        </ul>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  children: PropTypes.array,
}

export default Navigation;
