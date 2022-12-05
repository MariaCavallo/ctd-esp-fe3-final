import React from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';


const Navbar = () => {
  return (
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Typography style={{color: "black"}} variant='h6' noWrap component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                <span style={{ color: "red"}}>D</span>H ODONTO
              </Typography>
              <Link to="/home">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/Favs">Favs</Link>
              <button>🌙</button>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    );
  };

export default Navbar