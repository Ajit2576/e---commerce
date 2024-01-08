import { useState } from 'react';
import './cart.css'
import {emptyCart} from '../../assets'
import { Link } from 'react-router-dom';


function Cart({show, handleClose, refer}){

  
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };


  return  show &&
    (<div className='cart-main' ref={refer}>

      <div className="cart-heading">
        <h3>SHOPPING CART</h3>
        <button className={`close-button ${isHovered ? 'rotate' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover} onClick={handleClose}>X</button>
      </div>

      <div className="empty-cart">
        <img src={emptyCart} alt="empty Cart" />
        <p>Your Cart is empty</p>
        <button>Go To Shop</button>
      </div>

      <div className="cart-total">
        <h3>Subtotal:</h3>
        <h3>$0.00</h3>
      </div>

      <div className="cart-total-btn">
        <button><Link to='/cart'>View Cart</Link></button>
        <button>Checkout</button>
      </div>

    </div>)
}

export default Cart

