import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

let arr = [
    {name:'Logitech'},
    {name:'Sony'},
    {name:'Samsung'},
    {name:'Apple'},
    {name:'Deepcool'}
]

function ShopFilterBrand() {
  return (
    <div className="filterBrand-main mt">
        <div className="filterBrand-head head-fil">
            <p>Brands</p>
            <IoIosArrowDown />
        </div>
        <div className="search-brand">
            <input type="text" placeholder='Search Brands'  />
            <div className="shop-search-icon">
                <button><RiSearch2Line /></button>
            </div>
        </div>
        <div className='brand-srch-m'>
        {arr.map((items, index) => (
            <div className="brand-list" key={index}>
                <p><input type="checkbox" className='largerCheckbox'/>  {items.name}</p>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default ShopFilterBrand
