import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
      selectedProducts: [],
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Yeezy', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ],
    };
    this.handleProductSelect = this.handleProductSelect.bind(this);
    this.handleFilterKeywordInputChange = this.handleFilterKeywordInputChange.bind(this);
  }

  handleProductSelect(product) {
    this.setState(prevState => ({
      selectedProducts: prevState.selectedProducts.concat(product),
    }))
  }

  handleFilterKeywordInputChange(event) {
    this.setState({
      filterKeyword: event.currentTarget.value,
    })
  }

  render() {
    return (
      <div>
        <h1>My Product Store</h1>
        <Cart selectedProducts={this.state.selectedProducts} />
        <input 
          type="text" 
          value={this.state.filterKeyword}
          onChange={this.handleFilterKeywordInputChange}
        />
        <ProductList 
          products={this.state.products} 
          onProductSelect={this.handleProductSelect}
          filterKeyword={this.state.filterKeyword}
        />
      </div>
    );
  }
}

export default App;
