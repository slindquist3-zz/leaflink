import React from 'react';
import { shallow } from 'enzyme';
import LineItem from '../LineItem';

describe( 'LineItem', () => {

  const lineItem = shallow(<LineItem/>);

  it ('renders properly', () => {
    expect(lineItem).toMatchSnapshot();
  });

  it ('initializes a description, quantity, rate, and total in `state`', () => {
    expect(lineItem.state()).toEqual({description:'', quantity:'', rate:'', total:''})
  })

  describe( 'when typing into description input', () => {

    behtmlForeEach(() => {
      lineItem.find('.input-description').simulate('change', { target: {value: 'Alaskan Thunderfuck 5000'} });
    });

    it( 'updates the description field', () => {
      expect(lineItem.state().description).toEqual('Alaskan Thunderfuck 5000');
    })
  });

  describe( 'when typing into quantity input', () => {

    behtmlForeEach(() => {
      lineItem.find('.input-quantity').simulate('change', { target: {value: 5} });
    });

    it( 'updates the description field', () => {
      expect(lineItem.state().quantity).toEqual(5);
    })
  });

});
