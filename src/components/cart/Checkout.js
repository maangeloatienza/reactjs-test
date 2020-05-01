import React from 'react';

function Checkout(props){
    let {cart,total,count} = props;

    const checkout= ()=>{

    }

    return  <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{count}</span>
                </h4>
                    <ul className="list-group mb-3">
                    {
                        cart.map((item,index)=>{
                        return  <li className="list-group-item d-flex justify-content-between lh-condensed" key={item.id}>
                                    <div>
                                        <h6 className="my-0">{item.name}</h6>
                                        <small className="text-muted">x{item.quantity}</small>
                                    </div>
                                    <span className="text-muted">P{item.subtotal}</span>
                                </li>
                        })
                    }
                    
                   
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total </span>
                        <strong>P{total}</strong>
                    </li>
                </ul>
                <form onSubmit={checkout}>
                    <button className='btn btn-sm btn-primary text-ce'>Checkout</button>
                </form>
            </div>
}

export default Checkout;