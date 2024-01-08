import React from 'react'
import './footer.css'
import logoImg from '../../assets/logo.png'
import payLogo from '../../assets/payment.png'
import { Link } from 'react-router-dom';
import SocialMedia from '../SocialMedia';

function Footer() {

    const handleLink = () => {
        
    }

  return (
    <div className='footer-main '>
        <div className="footer-main-conatiner d-grid">
            <div className="footer-container-1">
                <div className='d-flex'>
                    <img src={logoImg} alt="logo" style={{width:'3rem'}}/>
                    <div className='logo-desi'>
                        <p>Kumar.</p>
                        <span style={{fontSize:'13px', fontWeight:'500'}}>SHOP</span>
                    </div>
                </div>
                <p>The Home and elements needed to create beautiful products.</p>
                <SocialMedia />
            </div>
            <div className="footer-container-2">
                <h2>Company</h2>
                <ul>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Store Locations</Link></li>
                    <li><Link>Our Blog</Link></li>
                    <li><Link>Reviews</Link></li>
                </ul>
            </div>
            <div className="footer-container-2">
                <h2>Shop</h2>
                <ul>
                    <li><Link>Game & Video</Link></li>
                    <li><Link>Phone & Tablets</Link></li>
                    <li><Link>Computer & Laptop</Link></li>
                    <li><Link>Sport Watches</Link></li>
                    <li><Link>Discounts</Link></li>
                </ul>
            </div>
            <div className="footer-container-2">
                <h2>Support</h2>
                <ul>
                    <li><Link>FAQs</Link></li>
                    <li><Link>Reviews</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>Shipping</Link></li>
                    <li><Link>Returns</Link></li>
                </ul>
            </div>
            <div className="footer-container-2">
                <h2>Talk To Us</h2>
                <p>Find a location nearest you.<br/>See <a style={{color:'red'}} href='#'>Our Stores</a></p>
                <div className='mob-no'>
                    <h2>+919779922576</h2>
                    <p>support@ajit.com</p>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Copyright &copy; 2023 by <Link onClick={handleLink}>Ajit</Link> All rights reserved.</p>
                <div className="payment-logo">
                    <img src={payLogo} alt="Payment Brand" style={{width:'10rem'}}/>
                </div>
        </div>
    </div>
  )
}

export default Footer
