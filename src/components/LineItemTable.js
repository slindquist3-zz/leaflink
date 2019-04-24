import React from 'react';

const LineItemTable = (props) => {

  return (

    <div className="LineItemTable">

      {props.lineItems.map( item => {

        <div>{item}</div>
        
      })}

    </div>


  )

}
