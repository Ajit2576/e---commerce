import React from 'react'
import './cartpage.css'
import { Link } from 'react-router-dom'
import {emptyCart} from '../../assets'
import Subscribe from '../../components/subscribe/Subscribe'

function CartPage() {

  return (
    <>
    <div className='cart-page-main'>

      <div className="cart-page-main-container">

        <div>
          <h1>My Cart</h1>
        </div>

        <div className="cart-page-main-container-2">
          <Link to='/'><p>Home</p></Link>
          <h2>.</h2>
          <p>Cart</p>
        </div>

      </div>

      <div className="cart-page-main-sub-container">
        <img src={emptyCart} alt="" />
        <p>Your Cart is empty</p>
        <button>Go To Shop</button>
      </div>
    </div>
    <Subscribe />
    </>
  )
}

export default CartPage
