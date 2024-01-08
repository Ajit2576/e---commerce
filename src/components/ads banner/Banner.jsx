import React from 'react'
import './banner.css'
import { FiArrowRight } from "react-icons/fi"
import BannerImg from '../../assets/banner.jpg'


function Banner() {
  return (
    <div className="banner-main">
      <div>
        <img src={BannerImg} alt="iphone 15" />
      </div>
        <div className="banner">
            <div className="banner-container">
                <p>Apple IPhone 15 Pro</p>
                <h1>The wait is on: IPhone<br/>15 max pro</h1>
                  <div className="banner-offer">
                    <p>Last call for up to <span className='offer-per'>32%</span> off!</p>
                    <button>Buy Now<FiArrowRight /></button>
                  </div>  
            </div>
        </div>
    </div>
  )
}

export default Banner
