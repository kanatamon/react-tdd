import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      selectedProducts: [],
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Yeezy', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ],
    };
    this.handleProductSelect = this.handleProductSelect.bind(this);
    this.handleOnFilterInputChange = this.handleOnFilterInputChange.bind(this);
  }

  handleProductSelect(product) {
    this.setState(prevState => ({
      selectedProducts: prevState.selectedProducts.concat(product),
    }))
  }

  handleOnFilterInputChange(event) {
    this.setState({
      keyword: event.currentTarget.value,
    })
  }

  render() {
    return (
      <div>
        <h1>My Product Store</h1>
        <Cart selectedProducts={this.state.selectedProducts} />
        <input 
          type="text" 
          value={this.state.keyword}
          onChange={this.handleOnFilterInputChange}
        />
        <ProductList 
          products={this.state.products} 
          onProductSelect={this.handleProductSelect}
          keyword={this.state.keyword}
        />
      </div>
    );
  }
}

export default App;
