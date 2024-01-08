import React from 'react';
import './categories.css';
import { proCat1, proCat2, proCat3, proCat4, proCat5, proCat6, proCat7 } from "../../assets";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let arr = [
        {
            icon: proCat1,
            pera: "Ipad Iphone & Tablets"
        },
        {
            icon: proCat2,
            pera: "Planer & Virtual"
        },
        {
            icon: proCat3,
            pera: "Wireless & Watches"
        },
        {
            icon: proCat4,
            pera: "Computers Monitor & Laptop"
        },
        {
            icon: proCat5,
            pera: " Exercise Bike & Shaver Clean"
        },
        {
            icon: proCat6,
            pera: "Spinning Reel & Kettle"
        },
        {
            icon: proCat7,
            pera: " Camera Bluetooth & Headset"
        }
    ];


    return (
        <div className="categories-main">
            <Slider {...settings}>
                {arr.map((item, index) => (
                    <div className="cat" key={index}>
                        <div className='cat-imgs'>
                            <img src={item.icon} alt="" />
                        </div>
                        <div className='cat-items'>
                            <p>
                                <Link>{item.pera}</Link>
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Categories;
