import React, { Component } from 'react';
import LineItem from './LineItem.js';
import AddItemButton from './AddItemButton.js';

import './styles/LineItemTable.scss';

const LineItemTable = (props) => {

  const lineItems = props.lineItems.map((item, index) =>
    <LineItem key={index}
              index={index}
              description={props.lineItems[index].description}
              quantity={props.lineItems[index].quantity}
              rate={props.lineItems[index].rate}
              balance={props.lineItems[index].balance}
              handleDeleteLineItem={props.handleDeleteLineItem}
              handleUpdateLineItem={props.handleUpdateLineItem}/>

  );

  return (
    <div className="LineItemTable">
    <table>
      <thead>
         <tr>
           <th>Description</th>
           <th>Quantity</th>
           <th>Rate</th>
           <th>Balance</th>
           <th><span className="invisible">Delete</span></th>
         </tr>
      </thead>
      <tbody>

         {lineItems}

      </tbody>
    </table>
    <AddItemButton handleAddLineItem={props.handleAddLineItem} />
    </div>
  )
}

export default LineItemTable;
