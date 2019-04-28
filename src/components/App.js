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

    this.state = { lineItems: [{id: 0, key: 0}], subtotal: 0, addressDetails: {}, keyHistory: 0 };
  }

  handleAddLineItem = () => {

    this.setState({
        keyHistory: this.state.keyHistory + 1,
        lineItems: [
          ...this.state.lineItems,
          {id: this.state.keyHistory, key: this.state.keyHistory + 1},
        ],
    });
  }

  handleDeleteLineItem = (id) => {
    const lineItems = this.state.lineItems,
          result = lineItems.filter(item => item.id !== id);

    this.setState({lineItems: result});
  }

  handleUpdateAddress = ( addressDetails ) => {
    this.setState({ addressDetails })
  }

  handleUpdateLineItem = (lineItemData) => {

    const id = lineItemData.id;

    const lineItems = [...this.state.lineItems];

    const index = lineItems.indexOf(lineItemData)

    lineItems.splice(index, 1, lineItemData)
    this.setState({lineItems: lineItems})

  }


  render() {

    const lineItems = this.state.lineItems.map(( item ) =>
      <LineItem id={item.id} key={item.key}/>
    );

    return (

      <div className="App">
        <Header />
        <AddressDetails handleUpdateAddress={this.handleUpdateAddress}/>
        <LineItemTable lineItems={this.state.lineItems} handleUpdateLineItem={this.handleUpdateLineItem} handleDeleteLineItem={this.handleDeleteLineItem}>
          {lineItems}
        </LineItemTable>
        <AddItemButton lineItems={this.state.lineItems} handleAddLineItem={this.handleAddLineItem}  />
        <Total subtotal={this.props.subtotal} taxRate={this.props.taxRate} />
      </div>
    )
  }
}

export default App
