import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import LineItemTable from './LineItemTable.js';
import Header from './Header.js';
import AddressDetails from './AddressDetails.js'
import Total from './Total.js'
import LineItem from './LineItem.js'
import Preview from './Preview.js'

import './styles/App.scss'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { lineItems: [{ description: '', quantity: 0, rate: 0, balance: 0 }],
                    subtotal: 0,
                    addressDetails: {},
                    taxes: 0,
                    taxRate: '',
                    discount: 0
                 };
  }

  handleAddLineItem = () => {
    this.setState({
        lineItems: [
          ...this.state.lineItems,
          { description: '', quantity: 0, rate: 0, balance: 0 },
        ],
    });
  }

  handleDeleteLineItem = (index) => {

    if (this.state.lineItems.length === 1) {
      alert('Invoices must contain at least 1 line item.')
      return;
    }

    const lineItems = this.state.lineItems;
          lineItems.splice(index, 1);

    this.setState({lineItems: lineItems});
  }

  handleUpdateLineItem = (event, index, type ) => {
    const array = this.state.lineItems;
    const value = event.target.value;
    array[index][type] = value

    this.setState({lineItems: array})

    if (type === "balance") {
      this.calculateSubtotal();
    }
  }

  handleUpdateAddress = ( addressDetails ) => {
    this.setState({ addressDetails })
  }

  calculateSubtotal = () => {
    const lineItems = this.state.lineItems;
    let subtotal = 0;

    for (let i = 0; i < lineItems.length; i++) {
    subtotal += parseInt(lineItems[i].balance);
    }

    this.setState({subtotal})
  }

  handleTaxRateUpdate = (event) => {
    const taxRate = event.target.value;
    this.setState({taxRate})
  }

  handleDiscountUpdate = (event) => {
    const discount = event.target.value;
    this.setState({discount})
  }

  downloadDocument = () => {
    const input = document.getElementById('preview');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
  }


  render() {

    return (

      <div className="App">
        <div >
        <Header/>
        <AddressDetails handleUpdateAddress={this.handleUpdateAddress}/>

        <LineItemTable lineItems={this.state.lineItems}
                       handleDeleteLineItem={this.handleDeleteLineItem}
                       handleUpdateLineItem={this.handleUpdateLineItem}
                       handleAddLineItem={this.handleAddLineItem}/>

        <Total subtotal={this.state.subtotal}
               taxRate={this.state.taxRate}
               taxes={this.state.taxes}
               discount={this.state.discount}
               handleDiscountUpdate={this.handleDiscountUpdate}
               handleTaxRateUpdate={this.handleTaxRateUpdate} />
        </div>
        <button className="download-as-pdf" onClick={this.downloadDocument}>Download PDF</button>

        <h3 className="preview-header">Invoice Preview</h3>

        <Preview lineItems={this.state.lineItems}
                 addressDetails={this.state.addressDetails}
                 taxRate={this.state.taxRate}
                 discount={this.state.discount}
                 subtotal={this.state.subtotal}/>

      </div>
    )
  }
}

export default App
