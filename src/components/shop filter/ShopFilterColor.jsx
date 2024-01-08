import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

let arr = [
    {coloe:'Red'},
    {coloe:'Blue'},
    {coloe:'Green'},
    {coloe:'Pink'},
    {coloe:'Yellow'},
    {coloe:'Black'},
    {coloe:'Orange'},
]

function ShopFilterColor() {
  return (
    <div className="shop-color-filter mt">
        <div className="shop-color-head head-fil">
            <p>Color</p>
            <IoIosArrowDown />
        </div>
        <div className="colors-filter">
        {arr.map((items, index) => (
            <div className="shop-cors" key={index}>
                <p>{items.coloe}</p>
            </div>
        ))}    
        </div>
    </div>
  )
}

export default ShopFilterColor
