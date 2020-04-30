import React, {Component} from 'react';

class ProductCard extends Component {

  render(){
    let {product} = this.props;

    return (
      <div className='col-xs-12 cold-sm-6 col-md-4 col-lg-3 mx-2 my-2 card' key={product.id}>
        <img className='card-img-top' src='' alt={product.name}/>
        <div className='card-body'>
          <h5 className='card-title'>{product.name} </h5>
          <span className='lead'>{product.price}</span>  
          <div className='text-center'>
            <button className='btn btn-success text-white'>Add to Cart</button>
          </div>
        </div>
      </div> 
    )
  }
}

export default ProductCard;