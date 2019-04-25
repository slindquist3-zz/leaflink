import React, { Component } from 'react';
import LineItemTable from './LineItemTable.js';
import Header from './Header.js';
import AddressDetails from './AddressDetails.js'
import LineItem from './LineItem.js'
import Preview from './Preview.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { lineItems : [], subtotal: 0, addressDetails: {} };
  }

  handleAddItem = (lineItem) => {
    this.setState({
      lineItems: [
        ...this.state.lineItems,
        lineItem,
      ],
    });
  }

  handleUpdateAddress = ( addressDetails ) => {
    this.setState({ addressDetails })
  }





  render() {
    return (

      <div className="App">
        <Header />
        <AddressDetails handleUpdateAddress={this.handleUpdateAddress}/>
        <LineItem handleAddItem={this.handleAddItem} />
        <Preview lineItems={this.state.lineItems}
                 addressDetails={this.state.addressDetails}
                 subtotal={this.state.subtotal}
                 taxRate={this.state.taxRate}/>
      </div>
    )
  }
}

export default App
