import React from 'react';
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
                   onChange={event => props.handleUpdateLineItem(event, props.index, "description")}
                   className="input-description"
                   value={props.description}/>
          </td>

          <td>
            <label className="mobile-label">Quantity</label>
            <input name="quantity"
                   type="number"
                   onChange={event => props.handleUpdateLineItem(event, props.index, "quantity")}
                   className="input-description"
                   value={props.quantity}/>
          </td>

          <td>
            <label className="mobile-label">Rate</label>
            <input name="rate"
                   type="number"
                   onChange={event => props.handleUpdateLineItem(event, props.index, "rate")}
                   className="input-rate"
                   value={props.rate}/>
          </td>

          <td>
            <label className="mobile-label">Balance</label>
            <input name="balance"
                   type="number"
                   onChange={event => props.handleUpdateLineItem(event, props.index, "balance")}
                   className="input-balance"
                   value={props.balance}/>
          </td>

          <td>
            <input className="delete-button" type="button" value="x" onClick={deleteItem}/>
          </td>
        </tr>
    )

}

export default LineItem;
