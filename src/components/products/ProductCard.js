import React, {useState, useEffect} from 'react';
import { generate } from '../../utils/Generator';
import { addCart, getUserCart } from './../../api/apiCall';
import { getToken,getUser } from '../../utils/Commons';
import { withGlobalState } from 'react-globally'

import Toast from './../../utils/Toast';



function ProductCard(props) {
  const {product } = props;
  let [quantity, setQuantity] = useState(0);
  let [guest_user, setGuest] = useState(null);
  let [user, setUser] = useState(null);

  
  let body = {};

  useEffect(()=>{
    !getToken() && localStorage.getItem('guest') ? setGuest(localStorage.getItem('guest')) : localStorage.setItem('guest', generate());
    setUser(getToken() ? getUser() : []); 
  },[]);

  const addToCart=(event)=> {
    event.preventDefault();

    
    
    body.product_id = product.id;
    body.quantity = parseInt(quantity);
    console.log('USER',user);
    console.log('GUEST_USER',guest_user);
   
    addCart(`user=${getToken() ? body.user_id = user.id : body.guest_user = guest_user}`,body).then(response=>{
      let params = getToken() ? `user=${body.user_id}` : `guest=${body.guest_user}`;
      getUserCart(params).then((cart) => {
        
        props.setGlobalState({
          badge : cart.count
        })
        setQuantity(0)

        Toast(response);

      });
    });
    
  }

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return <div className='col-xs-6 cold-sm-6 col-md-4 col-lg-3 mx-auto px-1 my-2 card ' key={product.id}>
          <img className='card-img-top img-fluid' style={{height:'180px'}} src={product.image} alt={product.name}/>
          <div className='card-body'>
            <h5 className='card-title'>{product.name} </h5>
            <p className='text-right'>P{product.price}</p>  
            {
              product.availability ?
              <div className='text-center'>
                <div>
                  <input type='number' className='form-control mb-2' value={quantity} onChange={onChangeQuantity}/>
                </div>
                
                  <button className='btn btn-success text-white' onClick={addToCart}>Add to Cart</button>
              </div>
              :
              <p className='text-danger text-center'>Not available</p>
             }
          </div>
        </div> 
    
}

export default withGlobalState(ProductCard);