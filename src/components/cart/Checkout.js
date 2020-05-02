import React from 'react';

function Checkout(props){
    let {cart,total,count} = props;

    const cartItems=()=>{
        
        // if(cart){
        cart.map((item,index)=>{
            return  <li className="list-group-item d-flex justify-content-between lh-condensed" key={item.id}>
                        <div>
                            <h6 className="my-0">{item.name}</h6>
                            <small className="text-muted">x{item.quantity}</small>
                        </div>
                        <span className="text-muted">P{item.subtotal}</span>
                    </li>
            })
        // }
    }

    return  <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{count}</span>
                </h4>
                    <ul className="list-group mb-3">
                    {
                        // cart ? cartItems() :  <li className="list-group-item d-flex justify-content-between lh-condensed">Empty Cart</li>
                        cart ? cart.map((item,index)=>{
                            return  <li className="list-group-item d-flex justify-content-between lh-condensed" key={item.id}>
                                        <div>
                                            <h6 className="my-0">{item.name}</h6>
                                            <small className="text-muted">x{item.quantity}</small>
                                        </div>
                                        <span className="text-muted">P{item.subtotal}</span>
                                    </li>
                            })
                            : 
                            <li className="list-group-item d-flex justify-content-between lh-condensed">Empty Cart</li>
                    }
                   
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total </span>
                        <strong>P{total||0.0}</strong>
                    </li>
                </ul>
            </div>
}

export default Checkout;