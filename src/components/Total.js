import React from 'react';
import './styles/Total.scss';

const Total = (props) => {

  const calculateTaxes = () => {
    let taxes;
    if (props.taxRate) {
      taxes = props.subtotal * props.taxRate;
    } else {
      taxes = 0;
    }

    return taxes;
  }

  const calculateTotal = () => {
    var subtotal = props.subtotal,
        taxes,
        total,
        discount;

    return subtotal + calculateTaxes() - props.discount;
  }

  const taxValue = calculateTaxes();
  const total = calculateTotal();

  return (

    <div className="Total">
      <div>Subtotal: {props.subtotal}</div>

      <label>Tax Rate:</label>
      <input placeholder="Local Tax Rate"
             value={props.taxRate}
             type="number"
             onChange={event => props.handleTaxRateUpdate(event)}/>

      <div>Taxes: {taxValue}</div>

      <label>Discounts: </label>
      <input placeholder="Relevent Discounts"
             value={props.discount}
             type="number"
             onChange={event => props.handleDiscountUpdate(event)}/>

      <div>Total: {total}</div>
    </div>

  )

}

export default Total
