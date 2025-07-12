import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube logo" />
        <img src={twitter_icon} alt="Twitter logo" />
        <img src={instagram_icon} alt="Instagram logo" />
        <img src={facebook_icon} alt="Facebook logo" />
      </div>
      <ul>
        <li>Audio Description</li>
         <li>Help Center</li>
          <li>Gift Cards</li>
           <li>Media Centre</li>
            <li>Investor Relation</li>
             <li>Jobs</li>
              <li>Terms Of Use</li>
               <li>Privacy</li>
                <li>Legal Notices</li>
                 <li>Cookie Prefrences</li>
                  <li>Corporate Information</li>
                   <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
