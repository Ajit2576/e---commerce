import React from 'react'
import { Link } from 'react-router-dom'
import './shopfilter.css'
import { AiOutlineRight } from "react-icons/ai";

function ShopFilterCatgory() {

  return (
    <div className="shop-filter-main">
        <div className="shop-filter-container">
            <ul>
                <li><Link>Ipad Phones & Tablets<AiOutlineRight /></Link></li>
                <li><Link>Planer & Virtual<AiOutlineRight /></Link></li>
                <li><Link>Wireless & Watches<AiOutlineRight /></Link></li>
                <li><Link>Computers Monitor & Laptop<AiOutlineRight /></Link></li>
                <li><Link>Exercise Bike & Shaver Clean<AiOutlineRight /></Link></li>
                <li><Link>Spinning Reel & Kettle<AiOutlineRight /></Link></li>
                <li><Link>Camera Bluetooth & Headse<AiOutlineRight /></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default ShopFilterCatgory
