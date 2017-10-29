import React from 'react';
import { array, func, string } from 'prop-types';

function ProductList({ products, onProductSelect, filterKeyword }) {
  return (
    <div>
      {
        products
          .filter(product => product.brand.includes(filterKeyword))
          .map(product => 
            <li 
              key={product.id}
              onClick={() => onProductSelect(product)}
            >
              {product.name} {product.brand}
            </li>
          )
      }
    </div>
  );
}

ProductList.propTypes = {
  products: array.isRequired,
  onProductSelect: func.isRequired,
  filterKeyword: string.isRequired,
};

export default ProductList;
