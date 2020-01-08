import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-brand">
        <p>Guilmain Dorian</p>
        <span>Developer &amp; CSS Wizard</span>
      </div>
      <div className="navigation-items">
        <ul>
            <li>
              <AnchorLink href='#about'>About</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#projects'>Projects</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#contact'>Contact</AnchorLink>
            </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation;
