import { AppBar } from "@mui/material";
import React from "react";
import {Link} from 'react-scroll'

const Navigation = () => {
  return (
    <AppBar>
      <nav className="navBar">
        <ul>
          <li className="navItem">
            <Link to="header" spy={true} smooth={true} offset={-60} duration={600}>Home</Link>
          </li>
          <li className="navItem">
            <Link to="aboutContainer" spy={true} smooth={true} offset={-60} duration={600}>About</Link>
          </li>
          <li className="navItem">
            <Link to="projectContainer" spy={true} smooth={true} offset={-60} duration={600}>Projects</Link>
          </li>
          <li className="navItem">
            <Link to="contactContainer" spy={true} smooth={true} offset={-60} duration={600}>Contact</Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  )
}

export default Navigation;