import React from 'react';
import Cart from '../components/Cart';

it('should display number of items in empty list of selected products to 0', () => {
  const wrapper = shallow(<Cart selectedProducts={[]} />);
  expect(wrapper.find('.number-of-items-in-cart').length).toBe(1);
  expect(wrapper.find('.number-of-items-in-cart').first().text()).toEqual('0');
});

it('should display number of items in list of selected products to 3', () => {
  const wrapper = shallow(<Cart selectedProducts={[0, 1, 2]} />);
  expect(wrapper.find('.number-of-items-in-cart').first().text()).toEqual('3');
});