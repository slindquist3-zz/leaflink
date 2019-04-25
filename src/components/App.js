import React, { Component } from 'react';
import Total from './Total.js';
import LineItemTable from './LineItemTable.js';
import Header from './Header.js';
import AddressDetails from './AddressDetails.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { lineItems : [], subtotal: 0,
                   description: '', quantity: '', rate: '', balance: ''};
  }

  addLineItem = () => {

    this.setState({subtotal: this.state.subtotal + this.state.balance})

    const lineItem = { description: this.state.description,
                       quantity: this.state.quantity,
                       rate: this.state.rate,
                       balance: this.state.balance }

    this.state.lineItems.push( lineItem );

    this.setState({ description: '',
                    quantity: '',
                    rate: '',
                    balance: '' });
  }

  render() {
    return (

      <div className="App">
        <Header />
        <AddressDetails/>

        <div className="LineItem">
          <label htmlFor="description">Description:</label>
          <input name="description"
                 type="text"
                 onChange={event => this.setState({description: event.target.value})}
                 className="input-description"
                 value={this.state.description}></input>

          <label htmlFor="quantity">Quantity:</label>
          <input name="quantity"
                 type="number"
                 onChange={event => this.setState({quantity: event.target.value})}
                 className="input-description"
                 value={this.state.quantity}></input>

          <label htmlFor="rate">Rate:</label>
          <input name="rate"
                 type="number"
                 onChange={event => this.setState({rate: event.target.value})}
                 className="input-rate"
                 value={this.state.rate}></input>

          <label htmlFor="balance">Balance:</label>
          <input name="balance"
                 type="number"
                 onChange={event => this.setState({balance: parseInt(event.target.value)})}
                 className="input-balance"
                 value={(this.state.balance)}></input>

               <button onClick={this.addLineItem}>Add Item</button>
        </div>

        <LineItemTable lineItems={this.state.lineItems} />
        <Total subtotal={this.state.subtotal} taxRate={this.state.taxRate}/>
      </div>
    )
  }
}

export default App
