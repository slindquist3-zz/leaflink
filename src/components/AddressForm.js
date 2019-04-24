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

        <label for="sent">Sent:</label>
        <input name="sent" type="text"></input>

        <label for="due">Due:</label>
        <input name="due" type="text"></input>
      </div>
    </div>
  )

}

export default Form;
