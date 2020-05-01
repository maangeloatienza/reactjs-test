import React from 'react';
import { generate } from '../../utils/Generator';
import { addCart } from './../../api/apiCall';
import { getToken, verifyUser } from '../../utils/Commons';


function ProductCard(props) {
  let {product } = props;
    
  const addToCart=()=> {
    localStorage.setItem('guest',generate());
    let body = {};
    let user = verifyUser(generate());
    
    
    getToken()? body.user_id = user.id: body.guest_user = user;

    body.product_id = product.id;
    body.quantity = 1;
  
   
    addCart(`user=${user}`,body);
    
  }

  return <div className='col-xs-6 cold-sm-6 col-md-4 col-lg-3 mx-auto px-1 my-2 card ' key={product.id}>
          <img className='card-img-top img-fluid' style={{height:'180px'}} src={product.image} alt={product.name}/>
          <div className='card-body'>
            <h5 className='card-title'>{product.name} </h5>
            <p className='text-right'>P{product.price}</p>  
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