import React from 'react';

const Total = (props) => {

  const taxes = props.subtotal * taxRate;

  return (

    <div className="Total">
      <div>Subtotal: {props.subtotal}</div>
      <div>Tax Rate: {props.taxRate}</div>
      <div>Taxes: {taxes}</div>
      <div>Total: {props.subtotal + taxes}</div>
    </div>

  )

}
