import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ContextGlobal } from './utils/global.context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  return (
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Typography variant='h6' noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                <Link to="/">
                <span style={{ color: "red"}}>D</span>H ODONTO
                </Link>
              </Typography>
              <Box>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/Favs">Favs</Link>
              </Box>
              <Button variant="contained"
                onClick={() =>  dispatch({type: "theme"})}>
                {state.Dark ? <LightModeIcon/> : <DarkModeIcon />}
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    );
  };

export default Navbar