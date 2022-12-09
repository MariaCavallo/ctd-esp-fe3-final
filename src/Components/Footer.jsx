import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TiktokIcon from '@mui/icons-material/AudiotrackOutlined';


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <footer>
        <button className='goToTopBtn' onClick={scrollToTop}>Go to top👆</button> 
        <div>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' style={{ width: "500px", height: "100px" }}/>
        </div>
        <div>
          <a href="https://www.facebook.com"><FacebookIcon /></a>
          <a href="https://www.instagram.com"><InstagramIcon /></a>
          <a href="https://www.tiktok.com"><TiktokIcon /></a>
          <a href="https://www.whatsapp.com"><WhatsAppIcon/></a>
        </div>
    </footer>
  )
}

export default Footer
