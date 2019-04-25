import React, { Component } from 'react';
import Total from './Total.js';
import LineItemTable from './LineItemTable.js';
import Header from './Header.js';
import AddressDetails from './AddressDetails.js'
import LineItem from './LineItem.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { lineItems : [], subtotal: 0,
                   description: '', quantity: '', rate: '', balance: ''};
  }

  onAddItem = (lineItem) => {
    this.setState({
      lineItems: [
        ...this.state.lineItems,
        lineItem,
      ],
    });
  }



  render() {
    return (

      <div className="App">
        <Header />
        <AddressDetails/>
        <LineItem onAddItem={this.onAddItem} />
        <LineItemTable lineItems={this.state.lineItems} />
        <Total subtotal={this.state.subtotal} taxRate={this.state.taxRate}/>
      </div>
    )
  }
}

export default App
