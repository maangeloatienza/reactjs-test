import React, {Component} from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  
  
  render(){
    const {products} = this.props;
    console.log(products)

    return (
      <div className="container">
          <div className="row">
            {
              products.map((value, index)=>{
              return <ProductCard product={value} key={value.id}/>
              })
            }
          </div>
      </div>
    )
  }
  
}

export default ProductList;
