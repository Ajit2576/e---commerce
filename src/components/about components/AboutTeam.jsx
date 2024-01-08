import React from 'react'
import './aboutComponents.css'
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";
import Slider from "react-slick";
import {team1, team2, team3, team4, team5, team6} from '../../assets'
import { MdMailOutline } from "react-icons/md";
import { PiShareNetworkBold } from "react-icons/pi";

function AboutTeam() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    let arr = [
        {
            img: team1,
            mailIcon: <MdMailOutline />,
            shareIcon: <PiShareNetworkBold />,
            name: "Annette Black",
            designation: "PRODUCT DESIGNER"
        },
        {
            img: team2,
            mailIcon: <MdMailOutline />,
            shareIcon: <PiShareNetworkBold />,
            name: "Annette Black",
            designation: "PRODUCT DESIGNER"
        },
        {
            img: team3,
            mailIcon: <MdMailOutline />,
            shareIcon: <PiShareNetworkBold />,
            name: "Annette Black",
            designation: "PRODUCT DESIGNER"
        },
        {
            img: team4,
            mailIcon: <MdMailOutline />,
            shareIcon: <PiShareNetworkBold />,
            name: "Annette Black",
            designation: "PRODUCT DESIGNER"
        },
        {
            img: team5,
            mailIcon: <MdMailOutline />,
            shareIcon: <PiShareNetworkBold />,
            name: "Annette Black",
            designation: "PRODUCT DESIGNER"
        },
        {
            img: team6,
            mailIcon: <MdMailOutline />,
            shareIcon: <PiShareNetworkBold />,
            name: "Annette Black",
            designation: "PRODUCT DESIGNER"
        }
    ]

  return (
    <div className="about-team-main">
        <div className="about-team-heading">
            <div>
                <h1>One <span style={{color:'rgb(239, 45, 106)'}}>Team</span>,<br/>Many Talents</h1>
            </div>
            <div className='jOt'>
                <Link>
                <p>Join Our Team</p>
                <HiArrowRight />
                </Link>
            </div>
        </div>

        <div className="about-team-slider">
            <Slider {...settings}>
                {arr.map((item, index) => (
                    <div className="about-team-img" key={index}>
                        <div className='team-img'>
                            <img src={item.img} alt={item.img} />
                                <div className="team-icon">
                                    <Link>{item.mailIcon}</Link>
                                    <Link>{item.shareIcon}</Link>
                                </div>
                        </div>
                        <div className="team-desig">
                            <h2>{item.name}</h2>
                            <p>{item.designation}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default AboutTeam
