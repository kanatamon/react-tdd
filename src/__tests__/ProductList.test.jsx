import React from 'react';
import ProductList from '../components/ProductList';

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  productSelectFn = jest.fn();
  wrapper = shallow(
    <ProductList
      products={mockProducts} 
      onProductSelect={productSelectFn}
      filterKeyword=""
    />
  );
});

afterEach(() => {
  productSelectFn.mockReset();
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

it('should invoke `onProductSelect` when a item is clicked', () => {
  expect(productSelectFn.mock.calls.length).toBe(0);
  wrapper.find('li').first().simulate('click');
  expect(productSelectFn.mock.calls.length).toBe(1);
});

it('should pass all the stuff about the product to `onProductSelect`', () => {
  wrapper.find('li').first().simulate('click');
  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
});

it('should display list of products if keyword is empty', () => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  wrapper = shallow(
    <ProductList
      products={mockProducts} 
      onProductSelect={() => null}
      filterKeyword=""
    />
  );
  expect(wrapper.find('li').length).toBe(3);
});

it('should display list of products if keyword is empty', () => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  wrapper = shallow(
    <ProductList
      products={mockProducts} 
      onProductSelect={() => null}
      filterKeyword="MockBrandA"
    />
  );
  expect(wrapper.find('li').length).toBe(1);
});