import React from 'react'
import './subscribe.css'
import subImg from '../../assets/sas.jpg'

function Subscribe() {

  return (
    <div className='sub-main'>
      <div className="sub-container">
        <img src={subImg} alt="subsribe" />
      </div>
      <div className="sub-inner">
        <h1>Subscribe for<br/> Latest Trends & Offers</h1>
        <div className="sub-inp">
          <input type="email" name='subEmail' id='subEmail' placeholder='Enter Your Email'/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
