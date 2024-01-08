import React from 'react';
import './locations.css';
import { ausIcon, sanIcon, egpIcon } from '../../assets';
import { Link } from 'react-router-dom';

function Locations() {
    let arr = [
        {
            locationName: 'Australia Office',
            locationImg: ausIcon,
            locationEmail: 'contact.australia@website.com',
            locationPhone: '686-324-6838'
        },
        {
            locationName: 'San Francisco Office',
            locationImg: sanIcon,
            locationEmail: 'contact.sanfrancisco@website.com',
            locationPhone: '686-324-6838'
        },
        {
            locationName: 'Egypt Office',
            locationImg: egpIcon,
            locationEmail: 'contact.egypt@website.com',
            locationPhone: '686-324-6838'
        },
    ];

    return (
        <div className="location-main">
            <div className="location-container">

            <div className="loc-head">
                <p>LOCATIONS</p>
                <h1>Come and visit our offices around the world</h1>
            </div>

            <div className="location-detail-main" >

                {arr.map((items, index) => (
                    <div className="map-loc" key={index}>
                        <div className="location-name">
                            <h3>{items.locationName}</h3>
                        </div>
                        <div className="location-details">
                            <img src={items.locationImg} alt={items.locationName} />
                                <div className="detail-of-location">
                                    <p><Link>{items.locationEmail}</Link></p>
                                    <p><Link>{items.locationPhone}</Link></p>
                                </div>
                        </div>
                            <button>View Location</button>
                    </div>
                 ))}

            </div>


            </div>
        </div>
    );
}

export default Locations;
