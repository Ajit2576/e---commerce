import React from 'react'
import './aboutComponents.css'
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

function OurAward() {
  return (
    <div className='award-main'>
      <div className="award-heading">
        <h1>Our Awards.</h1>
      </div>

      <div className="award-details">
        <div className='lft-res'>
          <p>FREE SHIPPING</p>
        </div>

        <div >
          <h1>Modern painting award jump</h1>
          <p>Runner Up - "Decor of the week"</p>
        </div>

        <div className="award-arrow lft-res">
          <Link><HiArrowRight /></Link>
        </div>  
      </div>

      <div className="award-details">
        <div>
          <p>FREE RETURN</p>
        </div>

        <div>
          <h1>People's choice: best design</h1>
          <p>Runner Up - "Decor of the week"</p>
        </div>

        <div className="award-arrow">
          <Link><HiArrowRight /></Link>
        </div>  
      </div>

      <div className="award-details">
        <div>
          <p>SECURE PAYMENT</p>
        </div>

        <div>
          <h1>Webby's, Site of the Year</h1>
          <p>Runner Up - "Decor of the week"</p>
        </div>

        <div className="award-arrow">
          <Link><HiArrowRight /></Link>
        </div>  
      </div>

      <div className="award-details">
        <div>
          <p>BEST QUALITY</p>
        </div>

        <div>
          <h1>Awwwards site of the day</h1>
          <p>Runner Up - "Decor of the week"</p>
        </div>

        <div className="award-arrow">
          <Link><HiArrowRight /></Link>
        </div>  
      </div>
      
    </div>
  )
}

export default OurAward
