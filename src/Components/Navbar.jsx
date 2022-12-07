import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { ContextGlobal } from './utils/global.context';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  return (
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Typography style={{color: "black"}} variant='h6' noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                <span style={{ color: "red"}}>D</span>H ODONTO
              </Typography>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/Favs">Favs</Link>
              <button onClick={() => dispatch({ type: state.bgFlag })}><DarkModeIcon/></button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    );
  };

export default Navbar