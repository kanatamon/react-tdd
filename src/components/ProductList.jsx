import React from 'react';
import { array } from 'prop-types';

function ProductList({ products }) {
  return (
    <div>
      {
        products.map(product => 
          <li key={product.id}>
            {product.name} {product.brand}
          </li>
        )
      }
    </div>
  );
}

ProductList.propTypes = {
  products: array.isRequired,
};

export default ProductList;
