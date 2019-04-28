import React, { Component } from 'react';

import { isEquivalent } from './helper.js'

class LineItem extends Component {

  constructor(props) {
    super(props);

    this.state = { description: '', quantity: '', rate: '', balance: '', id: props.id };
  }
  //
  componentDidUpdate( prevProps, prevState ) {
    if ( isEquivalent( prevState, this.state )) {
      return false;
    } else {
      this.updateLineItem();
    }
  }

  updateLineItem = () => {

    console.log("hi");
    const lineItemData = { description: this.state.description,
                       quantity: this.state.quantity,
                       rate: this.state.rate,
                       balance: this.state.balance,
                       id: this.state.id }


    this.props.handleUpdateLineItem( lineItemData);
  }

  deleteLineItem = () => {
    this.props.handleDeleteLineItem(this.props.id)
  }

  render() {

    return (
        <tr className="LineItem">
          <td>
            <input name="description"
                   type="text"
                   onChange={event => this.setState({description: event.target.value})}
                   className="input-description"
                   value={this.state.description}>
            </input>
          </td>

          <td>
            <input name="quantity"
                   type="number"
                   onChange={event => this.setState({quantity: event.target.value})}
                   className="input-description"
                   value={this.state.quantity}>
            </input>
          </td>

          <td>
            <input name="rate"
                   type="number"
                   onChange={event => this.setState({rate: event.target.value})}
                   className="input-rate"
                   value={this.state.rate}>
            </input>
          </td>

          <td>
            <input name="balance"
                   type="number"
                   onChange={event => this.setState({balance: parseInt(event.target.value)})}
                   className="input-balance"
                   value={(this.state.balance)}>
            </input>
          </td>

          <td>
            <input type="button" value="delete" onClick={this.deleteLineItem}/>
          </td>
        </tr>
    )

  }

}

export default LineItem;
