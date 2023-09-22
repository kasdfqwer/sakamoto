import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
  return (
    <>
     <div className="menu-area">
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/List'>album</NavLink>
        <div className="sns">
          <a href='https://www.facebook.com/ryuichisakamoto/'><FontAwesomeIcon icon={faFacebookF} style={{color: "#000000",}} />FaceBook >=</a>
          <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fryuichisakamoto%2F'><FontAwesomeIcon icon={faXTwitter} style={{color: "#000000",}} />twitter >=</a>
          <a href='https://www.instagram.com/skmtgram/'><FontAwesomeIcon icon={faSquareInstagram} style={{color: "#000000",}} />Instagram >=</a>
          <a href='https://www.youtube.com/ryuichisakamotoarchive'><FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} />Youtube >=</a>
        </div>
     </div>
    </>
  )
}

export default NavBar
