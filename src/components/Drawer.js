import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from "react-scroll";

// import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
//import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <Button variant="contained">
  //       <Link to="header" spy={true} smooth={true} offset={-10} duration={550}>Home</Link>
  //     </Button>

  //     <Button variant="contained">
  //       <Link to="aboutContainer" spy={true} smooth={true} offset={-10} duration={550}>About</Link>
  //     </Button>

  //     <Button variant="contained">
  //       <Link to="projectContainer" spy={true} smooth={true} offset={-10} duration={550}>Projects</Link>
  //     </Button>

  //     <Button variant="contained">
  //       <Link to="contactContainer" spy={true} smooth={true} offset={-10} duration={550}>Contact</Link>
  //     </Button>
  //   </Box>
  // );


  return (
    <div className='menu'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{'Menu'}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
          <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <Button variant="contained" >
              <Link to="header" spy={true} smooth={true} offset={-10} duration={550} onClick={toggleDrawer(anchor, false)}>Home</Link>
            </Button>

            <Button variant="contained">
              <Link to="aboutContainer" spy={true} smooth={true} offset={-10} duration={550} onClick={toggleDrawer(anchor, false)}>About</Link>
            </Button>

            <Button variant="contained">
              <Link to="projectContainer" spy={true} smooth={true} offset={-10} duration={550} onClick={toggleDrawer(anchor, false)}>Projects</Link>
            </Button>

            <Button variant="contained">
              <Link to="contactContainer" spy={true} smooth={true} offset={-10} duration={550} onClick={toggleDrawer(anchor, false)}>Contact</Link>
            </Button>
          </Box>
            {/* {list} */}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
