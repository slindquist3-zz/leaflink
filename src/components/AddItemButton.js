import React from 'react';
import './styles/AddItemButton.scss';


const AddItemButton = (props) => {

  return(
    <button className="add-item-button" onClick={props.handleAddLineItem}>Add Item

    </button>

  )
}

export default AddItemButton;
