import React, { Component } from 'react';
import LineItemTable from './LineItemTable.js';
import Header from './Header.js';
import AddressDetails from './AddressDetails.js'
import Total from './Total.js'
import AddItemButton from './AddItemButton.js'
import LineItem from './LineItem.js'

import './styles/App.scss'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { lineItems: [{ description: '', quantity: 0, rate: 0, balance: 0 }],
                    subtotal: 0,
                    addressDetails: {},
                    taxes: 0,
                    taxRate: '',
                    discount: 0
                 };
  }

  handleAddLineItem = () => {

    this.setState({
        lineItems: [
          ...this.state.lineItems,
          { description: '', quantity: 0, rate: 0, balance: 0 },
        ],
    });
  }

  handleDeleteLineItem = (index) => {
    const lineItems = this.state.lineItems;
          lineItems.splice(index, 1);

    this.setState({lineItems: lineItems});
  }

  handleUpdateAddress = ( addressDetails ) => {
    this.setState({ addressDetails })
  }

  handleUpdateDescription = (event, index ) => {
    const array = this.state.lineItems;
    const description = event.target.value;
    array[index].description = description;

    this.setState({lineItems: array})
  }

  handleUpdateQuantity = (event, index ) => {
    const array = this.state.lineItems;
    const quantity = event.target.value;
    array[index].quantity = quantity;

    this.setState({lineItems: array})
  }

  handleUpdateRate = (event, index ) => {
    const array = this.state.lineItems;
    const rate = event.target.value;
    array[index].rate = rate;

    this.setState({lineItems: array})
  }

  handleUpdateBalance = (event, index ) => {
    const array = this.state.lineItems;
    const balance = event.target.value;
    array[index].balance = balance;

    this.setState({lineItems: array});

    this.calculateSubtotal();

  }

  calculateSubtotal = () => {
    const lineItems = this.state.lineItems;
    let subtotal = 0;

    for (var i = 0; i < lineItems.length; i++) {
    subtotal += parseInt(lineItems[i].balance);
    }

    this.setState({subtotal})
  }

  handleTaxRateUpdate = (event) => {
    const taxRate = event.target.value;
    this.setState({taxRate})
  }

  handleDiscountUpdate = (event) => {
    const discount = event.target.value;
    this.setState({discount})
  }


  render() {

    return (

      <div className="App">
        <Header />
        <AddressDetails handleUpdateAddress={this.handleUpdateAddress}/>

        <LineItemTable lineItems={this.state.lineItems}
                       handleDeleteLineItem={this.handleDeleteLineItem}
                       handleUpdateDescription={this.handleUpdateDescription}
                       handleUpdateQuantity={this.handleUpdateQuantity}
                       handleUpdateRate={this.handleUpdateRate}
                       handleUpdateBalance={this.handleUpdateBalance} />

        <AddItemButton lineItems={this.state.lineItems} handleAddLineItem={this.handleAddLineItem}  />

        <Total subtotal={this.state.subtotal}
               taxRate={this.state.taxRate}
               taxes={this.state.taxes}
               discount={this.state.discount}
               handleDiscountUpdate={this.handleDiscountUpdate}
               handleTaxRateUpdate={this.handleTaxRateUpdate} />
      </div>
    )
  }
}

export default App
