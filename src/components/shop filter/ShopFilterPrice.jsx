import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

let arr = [
    {price:'$10.00 - $49.00'},
    {price:'$50.00 - $99.00'},
    {price:'$100.00 - $199.00'},
    {price:'$200.00+'}
]

function ShopFilterPrice() {
  return (
    <div className="filter-price-m mt">
        <div className="price-head head-fil">
            <p>Price</p>
            <IoIosArrowDown />
        </div>
        <div className="filter-p">
            {arr.map((items, index) => (
                <div className="price" key={index}>
                    <p><input type="checkbox" className='largerCheckbox'/>  {items.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShopFilterPrice
