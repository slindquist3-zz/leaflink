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
    let subtotal = props.subtotal,
        taxes,
        total,
        discount;

    return subtotal + calculateTaxes() - props.discount;
  }

  const taxValue = calculateTaxes();
  const total = calculateTotal();

  return (

    <div className="Total">
      <div className="subtotal">Subtotal: ${props.subtotal}</div>

      <label >Tax Rate</label>
      <input placeholder="Enter Tax Rate"
               value={props.taxRate}
               type="number"
               onChange={event => props.handleTaxRateUpdate(event)}
                className="taxRate"/>

              <div className="taxes">Taxes: ${taxValue}</div>

      <label >Discounts </label>
      <input placeholder="Apply Relevent Discounts"
               value={props.discount}
               type="number"
               onChange={event => props.handleDiscountUpdate(event)}
               className="discounts"/>

             <div className="total">Total: ${total}</div>
      </div>
  )
}

export default Total
