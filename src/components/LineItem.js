import React, { Component } from 'react';
import './styles/LineItem.scss';

const LineItem = (props) => {

  const deleteItem = () => {
    props.handleDeleteLineItem(props.index)
  }

    return (
        <tr className="LineItem">
          <td>
            <label className="mobile-label">Description</label>
              <input name="description"
                     type="text"
                     onChange={event => props.handleUpdateDescription(event, props.index, "description")}
                     className="input-description"
                     value={props.description}>
              </input>
          </td>


          <td>
            <label className="mobile-label">Quantity</label>
            <input name="quantity"
                   type="number"
                   onChange={event => props.handleUpdateQuantity(event, props.index, "quantity")}
                   className="input-description"
                   value={props.quantity}>
            </input>
          </td>

          <td>
            <label className="mobile-label">Rate</label>
            <input name="rate"
                   type="number"
                   onChange={event => props.handleUpdateRate(event, props.index, "rate")}
                   className="input-rate"
                   value={props.rate}>
            </input>
          </td>

          <td>
            <label className="mobile-label">Balance</label>

            <input name="balance"
                   type="number"
                   onChange={event => props.handleUpdateBalance(event, props.index, "balance")}
                   className="input-balance"
                   value={props.balance}>
            </input>
          </td>

          <td>
            <input className="delete-button" type="button" value="delete" onClick={deleteItem}/>
          </td>
        </tr>
    )

}

export default LineItem;
