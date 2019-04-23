import React from 'react';

const Form = (props) => {

  return (
    <div className="Form">
      <div>Address Info
        <label for="invoiceNum">Invoice #:</label>
        <input name="invoiceNum" type="text"></input>

        <label for="sender">From:</label>
        <input name="sender" type="text"></input>

        <label for="receiver">To:</label>
        <input name="receiver" type="text"></input>
      </div>
      <div>Line Items

        <label for="description">Description:</label>
        <input name="description" type="text"></input>

        <label for="quantity">Quantity:</label>
        <input name="quantity" type="text"></input>

        <label for="rate">Rate:</label>
        <input name="rate" type="text"></input>

        <label for="total">Total:</label>
        <input name="total"></input>

        <button>Add</button>
      </div>
    </div>
  )

}

export default Form;
