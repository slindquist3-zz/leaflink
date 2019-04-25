import React from 'react';

import './styles/LineItemTable.scss'

const LineItemTable = (props) => {

  const items = props.lineItems.map((item) =>
    <tr>
      <td>{item.description}</td>
      <td>{item.quantity}</td>
      <td>{item.rate}</td>
      <td>{item.balance}</td>
    </tr>);

  return (

    <div className="LineItemTable"> 

      <table>
      <thead>
         <tr>
           <th>Description</th>
           <th>Quantity</th>
           <th>Rate</th>
           <th>Balance</th>
         </tr>
       </thead>
       <tbody>
        {items}
       </tbody>
     </table>
    </div>

  )

}

export default LineItemTable;
