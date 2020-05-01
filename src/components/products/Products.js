import React, {Component} from 'react';
import ProductList from './ProductList';
import {getProducts} from './../../api/apiCall';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : []
    }
  }
  
  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    getProducts().then((products) => this.setState({ products: products }));
  }



  render(){
    return (
      <div className="container">
          <div className="row">
            <ProductList products={this.state.products} />
          </div>
      </div>
    )
  }
  
}

export default Products;
