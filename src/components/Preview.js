import React from 'react';
import LineItemTable from './LineItemTable.js'
import Total from './Total.js';


import './styles/Preview.scss';

const Preview = (props) => {

  return (
      <div className="Preview"><h1>Preview Invoice</h1>
        <div className="AddressPreview">
          <p>{props.addressDetails.id}</p>
          <p>{props.addressDetails.sender}</p>
          <p>{props.addressDetails.receiver}</p>
          <p>{props.addressDetails.sent}</p>
          <p>{props.addressDetails.due}</p>
        </div>
        <LineItemTable lineItems={props.lineItems} />
        <Total subtotal={props.subtotal} taxRate={props.taxRate} />
      </div>
  )

}

export default Preview
