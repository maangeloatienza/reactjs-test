import React from 'react';




function ProductCard(props) {

  const addToCart=()=> {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];


  }

  let {product } = props;

  return <div className='col-xs-6 cold-sm-6 col-md-4 col-lg-3 mx-auto px-1 my-2 card ' key={product.id}>
          <img className='card-img-top img-fluid' style={{height:'180px'}} src={product.image} alt={product.name}/>
          <div className='card-body'>
            <h5 className='card-title'>{product.name} </h5>
            <p className='text-right'>${product.price}</p>  
            <div className='text-center'>
              {
                product.availability ?
                <button className='btn btn-success text-white' onClick={addToCart}>Add to Cart</button>
                :
                  <p className='text-danger'>Not available</p>
              }
            </div>
          </div>
        </div> 
    
}

export default ProductCard;