import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class App extends Component {

  constructor(props) {

    super(props);
    //includes the constructor of App's parents component class

    this.state = {gifts: []};
  }

  addGift = () => {

    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);

    const max_id = ids.length > 0 ? Math.max(...ids) : 0;


    gifts.push({ id: max_id + 1})

    this.setState({ gifts });

  }



  render() {
    return (
      <div className="App">
        <Button onClick={this.addGift} className="btn-add"></Button>
      </div>
    )
  }

}

export default App
