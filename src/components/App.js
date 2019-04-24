import React, { Component } from 'react';
import Total from './Total.js';
import LineItemTable from './LineItemTable.js';
import Header from './Header.js'

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {lineItems : []};
  }

  addLineItem = (obj) => {
    this.state.lineItems.push(obj)
  }

  render() {
    return (
      <div className="App">

      <Header />

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

        <div className="LineItem">
          <label for="description">Description:</label>
          <input name="description"
                 type="text"
                 onChange={event => this.setState({description: event.target.value})}
                 className="input-description"></input>

          <label for="quantity">Quantity:</label>
          <input name="quantity"
                 type="number"
                 onChange={event => this.setState({quantity: event.target.value})}
                 className="input-quantity"></input>
        </div>
        <button>Add Item</button>

        <LineItemTable lineItems={this.state.lineItems} />>

        <Total subtotal={this.state.subtotal} taxRate={this.state.taxRate}/>

      </div>
    )
  }

}

export default App
