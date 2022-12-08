import React, { useContext } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TiktokIcon from '@mui/icons-material/AudiotrackOutlined';
import { Box } from '@mui/material';
import { ContextGlobal } from './utils/global.context';


const Footer = () => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <Box component='footer'>
        <button className='goToTopBtn' onClick={scrollToTop}>Go to top👆</button> 
        <div className='footerContainer'>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' style={{ width: "500px", height: "100px" }}/>
        </div>
        <div className={`dark ${isDarkMode ? "dark" : "light"}`}>
          <a href="https://www.facebook.com"><FacebookIcon /></a>
          <a href="https://www.instagram.com"><InstagramIcon /></a>
          <a href="https://www.tiktok.com"><TiktokIcon /></a>
          <a href="https://www.whatsapp.com"><WhatsAppIcon/></a>
        </div>
    </Box>
  )
}

export default Footer
