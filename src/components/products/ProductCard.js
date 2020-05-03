import React from 'react';
import { generate } from '../../utils/Generator';
import { addCart, getUserCart } from './../../api/apiCall';
import { getToken,getUser } from '../../utils/Commons';
import { withGlobalState } from 'react-globally'

import Toast from './../../utils/Toast';


function ProductCard(props) {
  const {product } = props;

  const guest = !getToken() && localStorage.getItem('guest') ?  localStorage.getItem('guest') : localStorage.setItem('guest',generate());  
  const user =  getToken() ? getUser() : [];  

  const addToCart=()=> {
    let body = {};
    
    getToken()? body.user_id = user.id: body.guest_user = guest;

    body.product_id = product.id;
    body.quantity = 1;
  
   
    addCart(`user=${getToken()? body.user_id = user.id: body.guest_user = guest}`,body).then(response=>{
      let params = getToken() ? `user=${body.user_id}` : `guest=${body.guest_user}`;

      getUserCart(params).then((cart) => {
        props.setGlobalState({
          badge : cart.count
        })
      
          Toast(response);

      });
    });
    
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

export default withGlobalState(ProductCard);