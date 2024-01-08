import React from 'react';
import './options.css';
import { deliveryIcon, chatIcon, dollerIcon, paymentIcon } from '../../assets';

function Options() {
  let arr = [
    {
      heading: 'Free Shipping',
      para: 'Free Shipping for orders over $120',
      icon: deliveryIcon,
    },
    {
      heading: 'Refund',
      para: 'Within 30 days for an exchange.',
      icon: dollerIcon,
    },
    {
      heading: 'Support',
      para: '24 hours a day, 7 days a week',
      icon: chatIcon,
    },
    {
      heading: 'Payment',
      para: 'Pay with Multiple Credit Cards',
      icon: paymentIcon,
    },
  ];

  return (
    <div className="option-main">
      {arr.map((item, index) => (
        <div className="option-sub-main" key={index}>
          <div>
            <img src={item.icon} alt={item.heading} />
          </div>
          <div className="option-1">
            <h3>{item.heading}</h3>
            <p>{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Options;
