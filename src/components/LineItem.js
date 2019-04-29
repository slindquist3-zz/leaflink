import React, { Component } from 'react';

const LineItem = (props) => {

  const deleteItem = () => {
    props.handleDeleteLineItem(props.index)
  }

    return (
        <tr className="LineItem">
          <td>
            <input name="description"
                   type="text"
                   onChange={event => props.handleUpdateDescription(event, props.index, "description")}
                   className="input-description"
                   value={props.description}>
            </input>
          </td>

          <td>
            <input name="quantity"
                   type="number"
                   onChange={event => props.handleUpdateQuantity(event, props.index, "quantity")}
                   className="input-description"
                   value={props.quantity}>
            </input>
          </td>

          <td>
            <input name="rate"
                   type="number"
                   onChange={event => props.handleUpdateRate(event, props.index, "rate")}
                   className="input-rate"
                   value={props.rate}>
            </input>
          </td>

          <td>
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
