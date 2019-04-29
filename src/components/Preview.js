import React from 'react';

import './styles/Preview.scss';

const Preview = (props) => {

  const lineItems = props.lineItems.map((item, index) =>
    <tr key={index}>
      <td>{item.description}</td>
      <td>{item.rate}</td>
      <td>{item.quantity}</td>
      <td>{item.balance}</td>
    </tr>
  );


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

  return(
    <div className="Preview" id="preview">

      <div className="preview-address">
        <p>Invoice Number: {props.addressDetails.id}</p>
        <p>From: {props.addressDetails.sender}</p>
        <p>To: {props.addressDetails.receiver}</p>
        <p>Sent: {props.addressDetails.sent}</p>
        <p>Due: {props.addressDetails.due}</p>
      </div>

      <table className="preview-lineItems">
        <thead>
         <tr>
           <th>Description</th>
           <th>Quantity</th>
           <th>Rate</th>
           <th>Balance</th>
         </tr>
       </thead>
       <tbody>

         {lineItems}

       </tbody>
     </table>
     <div className="preview-total">
       <p>Subtotal: ${props.subtotal}</p>
       <p>Tax Rate: {props.taxRate}</p>
       <p>Taxes: ${taxValue}</p>
       <p>Discount: ${props.discount}</p>
       <p>Total: ${total}</p>
     </div>
    </div>

  )
}

export default Preview;
