import React, { Component } from 'react';

class AddressDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (

      <div className="AddressDetails">
        <label htmlFor="invoiceNum">Invoice #:</label>
        <input name="invoiceNum" type="text"></input>

        <label htmlFor="sender">From:</label>
        <input name="sender" type="text"></input>

        <label htmlFor="receiver">To:</label>
        <input name="receiver" type="text"></input>

        <label htmlFor="sent">Sent:</label>
        <input name="sent" type="text"></input>

        <label htmlFor="due">Due:</label>
        <input name="due" type="text"></input>
      </div>


    )
  }

}

export default AddressDetails
