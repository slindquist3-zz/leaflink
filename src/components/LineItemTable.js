import React, { Component } from 'react';

import './styles/LineItemTable.scss'

const LineItemTable = (props) =>    {

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      handleDeleteLineItem: props.handleDeleteLineItem,
      handleUpdateLineItem: props.handleUpdateLineItem
    });
  });

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
           {children}
         </tbody>
       </table>
      </div>
    )


}

export default LineItemTable;
