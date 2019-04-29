import React, { Component } from 'react';
import './styles/AddressDetails.scss';

import { isEquivalent } from './helper.js'

class AddressDetails extends Component {

  constructor(props) {
    super(props);

    this.state = { id: '', sender: '', receiver: '', sent: '', due: '' };
  }

  sendAddressDetails = () => {

    const addressDetails = { id: this.state.id,
                             sender: this.state.sender,
                             receiver: this.state.receiver,
                             sent: this.state.sent,
                             due: this.state.due };

    this.props.handleUpdateAddress(addressDetails);
  }

  componentDidUpdate(prevProps, prevState) {
    if (isEquivalent(prevState, this.state)) {
      return false;
    } else {
      this.sendAddressDetails();
    }
  }



  render() {
    return (

      <div className="AddressDetails">
          <div className="invoice-num">
          <label htmlFor="invoiceNum">Invoice #:</label>
          <input onChange={event => this.setState({id: event.target.value})}
                 value={this.state.id}
                 name="invoiceNum"
                 type="text"></input>
          </div>
          <div className="persons">
            <div className="from">
              <label htmlFor="sender">From: </label>
              <input value={this.state.sender}
                     onChange={event => this.setState({sender: event.target.value})}
                     name="sender"
                     type="text"
                     className="address"></input>
            </div>
            <div className="to">
              <label htmlFor="receiver">To: </label>
              <input name="receiver"
                     value={this.state.receiver}
                     onChange={event => this.setState({receiver: event.target.value})}
                     type="text"
                     className="address"></input>
            </div>
          </div>

          <label htmlFor="sent">Sent: </label>
          <input name="sent"
                 value={this.state.sent}
                 onChange={event => this.setState({sent: event.target.value})}
                 type="date"
                 className="address"></input>

          <label htmlFor="due">Due: </label>
          <input name="due"
                 value={this.state.due}
                 onChange={event => this.setState({due: event.target.value})}
                 type="date"
                 className="address"></input>
      </div>


    )
  }

}

export default AddressDetails
