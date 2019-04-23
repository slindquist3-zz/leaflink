import React, {Component } from 'react';

class LineItem extends Component {

  constructor(props) {
    super(props);

    this.state = { description: '',
                    quantity: '',
                    rate: '',
                    total: ''
                 };
  }

  render() {

    return (
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
    )

  }

}

export default LineItem;
