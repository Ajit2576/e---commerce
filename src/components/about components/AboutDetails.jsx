import React from 'react'
import './aboutComponents.css'
import { abt1, abt2, abt3 } from '../../assets'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

function AboutDetails() {

  return (

    <div className="about-details-main">
      
      <div className="about-d1 hov">
        <div className='about-d-icon'>
          <img src={abt1} />
          <span><Link><MdArrowOutward /></Link></span>
        </div>
        <div className='about-d-details'>
          <p>10K</p>
          <h1><Link>Listed Products</Link></h1>
        </div>
      </div>

      <div className="about-d1">
        <div className='about-d-icon'>
          <img src={abt2} />
          <span><Link><MdArrowOutward /></Link></span>
        </div>
        <div className='about-d-details'>
          <p>5K</p>
          <h1><Link>Lovely Customer</Link></h1>
        </div>
      </div>

      <div className="about-d1">
        <div className='about-d-icon'>
          <img src={abt3} />
          <span><Link><MdArrowOutward /></Link></span>
        </div>
        <div className='about-d-details'>
          <p>24h</p>
          <h1><Link>Support</Link></h1>
        </div>
      </div>
        
    </div>
  )
}

export default AboutDetails
