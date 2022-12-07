import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { CssBaseline } from "@mui/material";


function App() {
  const location = useLocation;
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/'){
      navigate("/home")
    }
  })

  return (
    <div className="App">
        <CssBaseline />
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  );
}

export default App;
