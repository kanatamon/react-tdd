import React from 'react';
import { array } from 'prop-types';

function Cart({ selectedProducts }) {
  return (
    <div>
      <p>
        You have selected <span className="number-of-items-in-cart">{selectedProducts.length}</span> product(s).
      </p>
    </div>
  );
}

Cart.propTypes = {
  selectedProducts: array.isRequired,
};

export default Cart;