import {Link} from 'react-scroll'

const Navigation = () => {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li className="navItem">
            <Link to="header" spy={true} smooth={true} offset={0} duration={750}>Home</Link>
          </li>
          <li className="navItem">
            <Link to="aboutContainer" spy={true} smooth={true} offset={0} duration={750}>About</Link>
          </li>
          <li className="navItem">
            <Link to="projectContainer" spy={true} smooth={true} offset={0} duration={750}>Projects</Link>
          </li>
          <li className="navItem">
            <Link to="contactContainer" spy={true} smooth={true} offset={0} duration={750}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;