import React from 'react';
import { array, func, string } from 'prop-types';

function ProductList({ products, onProductSelect, keyword }) {
  return (
    <div>
      {
        products
          .filter(product => product.brand.includes(keyword))
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
  keyword: string,
};

ProductList.defaultProps = {
  keyword: '',
};

export default ProductList;
