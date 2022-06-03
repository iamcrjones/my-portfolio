import { AppBar, Button, IconButton, Menu, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";


const Navigation2 = () => {
    return (
        <AppBar>
            <Toolbar>
                <Button variant="contained">
                    <Link to="header" spy={true} smooth={true} offset={-60} duration={550}>Home</Link>
                </Button>

                <Button variant="contained">
                    <Link to="aboutContainer" spy={true} smooth={true} offset={-60} duration={550}>About</Link>
                </Button>

                <Button variant="contained">
                    <Link to="projectContainer" spy={true} smooth={true} offset={-60} duration={550}>Projects</Link>
                </Button>

                <Button variant="contained">
                    <Link to="contactContainer" spy={true} smooth={true} offset={-60} duration={550}>Contact</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
  }
  export default Navigation2;