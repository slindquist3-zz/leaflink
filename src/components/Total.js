import React from 'react';
import './styles/Total.scss';

const Total = (props) => {

  return (

    <div className="Total">
      <div>Subtotal: {props.subtotal}</div>
      <div>Tax Rate: </div>
      <div>Taxes: </div>
      <div>Discounts: </div>
      <div>Total: </div>
    </div>

  )

}

export default Total
