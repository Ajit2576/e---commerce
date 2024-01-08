import React from 'react'
import './deal.css'
import {proCat1, proCat2, proCat3, proCat4, proCat5, proCat6, proCat7, outPut} from "../../assets"

function Deal() {

    let arr = [
        {
            image: proCat1,
            name: "August Gift Voucher",
            offer: "10%",
            time: "0 0 0 0",
            coupStatus: "Coupon",
            coupCode: "ABCD675"
        },
        {
            image: proCat2,
            name: "August Gift Voucher",
            offer: "10%",
            time: "0 0 0 0",
            coupStatus: "Coupon",
            coupCode: "ABCD675"
        },
        {
            image: proCat3,
            name: "August Gift Voucher",
            offer: "10%",
            time: "0 0 0 0",
            coupStatus: "Coupon",
            coupCode: "ABCD675"
        },
        {
            image: proCat7,
            name: "August Gift Voucher",
            offer: "10%",
            time: "0 0 0 0",
            coupStatus: "Coupon",
            coupCode: "ABCD675"
        }
    ]

  return (
    <div className="deal-main">
        <div className="deal-title">
            <h1>Deal of The Day</h1>
            <button>View All Products</button>
        </div>
        <div className="deal-offer-box">
            {arr.map((item, index) => (
                <div className="deal-box" key={index}>
                    <div>
                        <img src={item.image} />  
                    </div>
                    <div className='offer-box-left'>
                        <h5>{item.name}</h5>
                        <h3>{item.offer} <span>Off</span></h3>
                        <p>{item.time}</p>
                    </div>
                    <div className="center">
                    </div>
                    <div className='offer-box-right'>
                        <p>{item.coupStatus} <span>Inactive</span></p>
                        <h4>{item.coupCode}</h4>
                </div>
            </div> 
            ))}
        </div>
    </div>
  )
}

export default Deal
