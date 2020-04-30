import React, {Component} from 'react';
import ProductCard from './ProductCard';

function ProductList (props){
  
  const { products } = props;

  return <div className="container-fluid">
            <div className="row">
            {
              products.map((value, index)=>{
              return <ProductCard product={value} key={value.id}/>
              })
            }
            </div>
          </div>
}
  

export default ProductList;
