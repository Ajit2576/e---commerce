import React from 'react'
import './shop.css'
import { IoHomeOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { PiSquaresFourLight } from "react-icons/pi";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import ShopFilterCatgory from '../../components/shop filter/ShopFilterCatgory';
import ShopFilterBrand from '../../components/shop filter/ShopFilterBrand';
import ShopFilterColor from '../../components/shop filter/ShopFilterColor';
import ShopFilterPrice from '../../components/shop filter/ShopFilterPrice';

function Shop() {

  return (

    <div className='shop-main'>

      <div className="shop-route">
        <IoHomeOutline />
        <p><Link to='/'>Home</Link></p>
        <GrFormNext />
        <p>Product</p>
      </div>

      <div className="shop-result">
        <p>Showing 1-9 of 27 results</p>
            <div className="shop-result-right">
                <PiSquaresFourLight />
                <VscThreeBars />
                <div className="shop-sorting">
                    <Link>Short Filtering</Link>
                    <MdKeyboardArrowDown />  
                </div>
            </div>
      </div>

    <div className="shop-main-container">
      <div className="shop-left-container">
          <ShopFilterCatgory />
          <ShopFilterBrand />
          <ShopFilterColor />
          <ShopFilterPrice />
        <button>Reset Filter</button>
      </div>
      <div className="shop-right-container">
      
      </div>
    </div>

  </div>
  )
}

export default Shop
