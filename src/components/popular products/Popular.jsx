import React from 'react'
import './popular.css'
import {product1, product10, product11, product12, product2, product3, product4, product5, product6, product7, product8, product9, } from "../../assets"
import { Link } from 'react-router-dom'
import { LuEye } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";


function Popular() {

    let arr = [
        {
            imgs: product1,
            names: 'Buy Guild Planer - 900w',
            price: '$239.00'
        },
        {
            imgs: product2,
            names: 'Apple Watch Series 8',
            price: '$188.00',
            sale: 'Sale',
            discount: '-12%'
        }
        ,
        {
            imgs: product3,
            names: 'TECLAST Tablet Protective Cover Case',
            price: '$719.12',
            sale: 'Sale',
            discount: '-6%'
        },
        {
            imgs: product4,
            names: 'Bluefin Fitness Unisex Adult Tour',
            price: '$996.00'
        },
        {
            imgs: product5,
            names: 'E68 Wireless Headphone Bluetooth',
            price: '$239.00'
        },
        {
            imgs: product6,
            names: 'ViewSonic Professional Monitor',
            price: '$281.00',
            sale: 'Sale',
            discount: '-15%'
        },
        {
            imgs: product7,
            names: 'Xiaomi Poco M4 pro 5G',
            price: '$239.00'
        },
        {
            imgs: product8,
            names: 'VR Virtual Reality Headset',
            price: '$67.00',
            sale: 'Sale',
            discount: '-10%'
        },
        {
            imgs: product9,
            names: 'Tempo Sphera Spinning Reel',
            price: '$799.00',
            sale: 'Sale',
            discount: '-12%'
        },
        {
            imgs: product10,
            names: 'Stariver Electric Kettle',
            price: '$59.00'
        },
        {
            imgs: product11,
            names: 'Braun Series Electric Shaver Clean',
            price: '$263.12'
        },
        {
            imgs: product12,
            names: 'STANLEY STPP7502 750W 2mm Planer',
            price: '$356.00'
        }
    ]

    const handleCart = () => {
        
    }

  return (
    <div className="popular-main">
        <div className="popular-outbox">
            <h1>Popular Products</h1>
            <div className="right-option">
                <span><p>Top Rated</p></span>
                <p>Best Selling</p>
                <p>Latest Product</p>
            </div>
        </div>
        <div className="pop-container">
            {arr.map((item, index) =>(
                <div className="pop-cont" key={index}>
                    <div className='abc'>
                        <img src={item.imgs}/>
                            <div className='pop-discount'>
                                <p style={{backgroundColor:"rgb(239, 45, 106)"}}>{item?.sale}</p> 
                                <p style={{backgroundColor:"#000"}}>{item?.discount}</p>
                            </div>
                        <div className="hover-details">
                            <button onClick={handleCart}><PiShoppingCartSimple className='icon-shop'/>Add to Cart</button>
                            <div className='pop-icons'>
                                <FiHeart className='bg-wt' title='Add to Wishlist'/>  
                                <LuEye className='bg-wt' title='Quick view'/>
                                <FaLink className='bg-wt' title='Product Details'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><Link>{item.names}</Link></p>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Popular
