import React, { Component } from 'react';

class LineItem extends Component {

  constructor(props) {
    super(props);

    this.state = { description: '', quantity: '', rate: '', balance: ''};
  }

  addLineItem = () => {

    const lineItem = { description: this.state.description,
                       quantity: this.state.quantity,
                       rate: this.state.rate,
                       balance: this.state.balance }

    this.props.handleAddItem(lineItem);
  }

  render() {

    return (
      <div className="LineItem">
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
      </div>
    )

  }



}

export default LineItem;
