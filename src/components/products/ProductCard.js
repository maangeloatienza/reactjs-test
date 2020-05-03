import React, {useState,useEffect} from 'react';
import { generate } from '../../utils/Generator';
import { addCart, getUserCart } from './../../api/apiCall';
import { getToken,getUser } from '../../utils/Commons';
import Toast from './../../utils/Toast';


function ProductCard(props) {
  const {product } = props;

  const [count, setCount] = useState(0);
  
  const guest = !getToken() && localStorage.getItem('guest') ?  localStorage.getItem('guest') : localStorage.setItem('guest',generate());  
  const user =  getToken() ? getUser() : [];  

  useEffect(()=>{
    getCartbadge();
  })

  const getCartbadge = () => {
    let params = getToken() ? `user=${getUser().id}` : `guest=${localStorage.getItem('guest')}`;

    getUserCart(params).then((cart) => {
      setCount(cart.count)
    });
  }

  const addToCart=()=> {
    let body = {};
    
    getToken()? body.user_id = user.id: body.guest_user = guest;

    body.product_id = product.id;
    body.quantity = 1;
  
   
    addCart(`user=${getToken()? body.user_id = user.id: body.guest_user = guest}`,body).then(response=>{
      Toast(response);
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

export default ProductCard;