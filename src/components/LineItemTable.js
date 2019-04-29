import React, { Component } from 'react';
import LineItem from './LineItem'

import './styles/LineItemTable.scss'

const LineItemTable = (props) =>    {

  const lineItems = props.lineItems.map((item, index) =>
    <LineItem key={index}
              index={index}
              handleDeleteLineItem={props.handleDeleteLineItem}
              handleUpdateDescription={props.handleUpdateDescription}
              handleUpdateRate={props.handleUpdateRate}
              handleUpdateQuantity={props.handleUpdateQuantity}
              handleUpdateBalance={props.handleUpdateBalance}
              description={props.lineItems[index].description}
              quantity={props.lineItems[index].quantity}
              rate={props.lineItems[index].rate}
              balance={props.lineItems[index].balance}/>

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
      </div>
    )


}

export default LineItemTable;
