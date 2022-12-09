import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


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
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  );
}

export default App;
