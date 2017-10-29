import React from 'react';
import ProductList from '../components/ProductList';

let mockProducts, wrapper;

beforeEach(() => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
   wrapper = shallow(<ProductList products={mockProducts} />);
});

it('should render list of products as an unordered list', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
});

it('should include the product name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should include the product brand in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});