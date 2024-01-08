import {useEffect,useRef,useState} from 'react';
import './navbar.css'
import NavLogo from '../../assets/logo.png'
import { RiSearch2Line } from "react-icons/ri"
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom'
import Cart from '../cart/Cart';

function Navbar(){

    const location = useLocation();

    const [colorChange, setColorchange] = useState(false);
      const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
      }
   
      useEffect(() => {
          changeNavbarColor()
          window.addEventListener("scroll", changeNavbarColor);
      })

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const canvasRef = useRef(null);

    const handleClickOutside = (event) => {
        if (canvasRef.current && !canvasRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClose, canvasRef]);

    const handleHumBur = () => {
      console.log('clicked');
    }

    return(
        <>
        <div className={location.pathname === "/" ? colorChange ? "nav-main white-bg brd-box-sd"  : "nav-main" : "nav-main brd-box-sd white-bg"} >
          <div className="nav-menu">
              <ul>
                <Link to='/'><img src={NavLogo} alt="logo" style={{width:'40px', height:'40px'}}/></Link>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
          </div>
          <div className="nav-icons">
              <ul>
                  <div className={location.pathname === "/" ? colorChange ? "nav-search  nav-brd " : "nav-search" : "nav-search  nav-brd"}>
                    <input type="text" placeholder='Search for Products... ' />
                      <button><RiSearch2Line /></button>
                    </div>
                  <button className='search-hid'><RiSearch2Line /></button>
                  <li><Link onClick={handleShow}><LuShoppingCart /></Link></li>
                  <li><Link to='/login'><FiUser /></Link></li>
                  <div className="hamburger-icon" onClick={handleHumBur}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
              </ul>
          </div>
        </div>
        <Cart show={show} handleClose={handleClose} refer={canvasRef } />
        </>
    )
}

export default Navbar