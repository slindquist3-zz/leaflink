import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const app = mount(<App/>);

it( 'can render', () => {
  expect(app).toMatchSnapshot();
});

it( 'can add lineItems to state', () => {
  app.find('.add-item-button').simulate('click');
  expect(app.state().lineItems.length).toEqual(2);
  expect(app.state().lineItems[0].balance).toEqual(0);
  expect(app.state().lineItems[1].balance).toEqual(0);

});

it( 'can delete lineItems to state', () => {
  app.find('.add-item-button').simulate('click');
  app.find('.add-item-button').simulate('click');
  expect(app.state().lineItems.length).toEqual(3);
  app.find('.delete-button').at(1).simulate('click');
  expect(app.state().lineItems.length).toEqual(2);
});
