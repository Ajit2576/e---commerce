import React from 'react'
import './home.css'
import { FiArrowRight } from "react-icons/fi"
import homeImg from '../../assets/home.png'
import Categories from '../../components/categories/Categories'
import Popular from '../../components/popular products/Popular'
import Deal from '../../components/deal/Deal'
import Banner from '../../components/ads banner/Banner'
import Options from '../../components/options/Options'
import Subscribe from '../../components/subscribe/Subscribe'
import { Link } from 'react-router-dom'


function Home() {
    return(
        <>
            <div style={{backgroundColor:'#e3ecda65'}}>
                <div className="home-main" >
                    <div className="home-left-container">
                        <p>Best Ear<br/>Headphones</p>
                        <h1>Find your<br/>Beats Studio.</h1>
                        <div>
                            <Link to='/shop'><button>Shop Now<FiArrowRight /></button></Link>
                        </div>
                    </div>
                    <div className="home-right-container">
                        <img src={homeImg} alt="Home" />
                    </div>
                </div>
            </div>
            <div className="home">
                <Categories />
                <Popular />
                {/* <Deal /> */}
                <Banner />
                <Options />
                {/* <Subscribe /> */}
            </div>
        </>
    )
}

export default Home