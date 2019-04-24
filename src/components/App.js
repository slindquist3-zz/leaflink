import React, { Component } from 'react';
//
// import Form from './Form.js';
// import Preview from './Preview.js'

class App extends Component {

  constructor(props) {

    super(props);
    //includes the constructor of App's parents component class

    this.state = {lineItems : []};
  }

  addLineItem = (obj) => {
    this.state.lineItems.push(obj)
  }

  render() {
    return (
      <div className="App">

        {/* <button onClick={() => alert("hi!")} className="btn-add">Preview PDF</button>
        <button onClick={() => alert("hi!")} className="btn-add">Email</button> */}
        <button onClick={() => alert("hi!")} className="btn-add">Add Item</button>


        <div className="LineItemList">

        {  this.state.lineItems.map(item => {
          return( <LineItem key={lineItem.id} addLineItem={this.addLineItem}/> )
        })}

        </div>



      </div>
    )
  }

}

export default App
