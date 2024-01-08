import React from 'react'
import './contact.css'
import { contactBg, contact1, contact2, contact3 } from '../../assets'
import Form from '../../components/form/Form'
import Locations from '../../components/location/Locations'
import SocialMedia from '../../components/SocialMedia'

function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <img src={contactBg} />
        <div className="contact-container-details">
          <p>GET TO KNOW US</p>
          <h1>Have a project in mind? Let's talk.</h1>
        </div>
      </div>

      <div className="contact-details">
          <div className="conatct">
            <img src={contact1} />
            <p>Contact</p>
            <div className="contact-sub">
              <h4>location@website.com</h4>
              <h4>+(91)9779922576</h4>
            </div>
          </div>

          <div className="conatct loc-img-icon">
            <img src={contact3} />
            <p>Location</p>
            <div className="contact-sub">
              <h4>88 New South Head Rd, Triple, New York</h4>
            </div>
          </div>

          <div className="conatct">
            <img src={contact2} />
            <p>Social Media</p>
            <div className="contact-sub">
              <h4>Follow on social media</h4>
              <div className="social-media-icon">
                <SocialMedia />
              </div>
            </div>
          </div>
          
        </div>
      <Form />
      <Locations />
    </div>
  )
}

export default Contact
