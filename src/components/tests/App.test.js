import React from 'react';
import { mount, unmount } from 'enzyme';
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
  app.unmount()
  const newApp = mount(<App/>);

  newApp.find('.add-item-button').simulate('click');
  newApp.find('.add-item-button').simulate('click');
  expect(newApp.state().lineItems.length).toEqual(3);
  newApp.find('.delete-button').at(1).simulate('click');
  expect(newApp.state().lineItems.length).toEqual(2);
});
