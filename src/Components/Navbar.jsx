import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ContextGlobal } from './utils/global.context';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const changeTheme = () => {
    if(isDarkMode) setLightTheme();
    else setDarkTheme();
  }
  return (
      <nav className={`navbar navbar-expand-sm ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`} >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Typography variant='h6' noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                <span style={{ color: "red"}}>D</span>H ODONTO
              </Typography>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/Favs">Favs</Link>
              <Button variant='contained' onClick={changeTheme}>
                {isDarkMode ? <LightModeIcon/> : <DarkModeIcon />}
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    );
  };

export default Navbar