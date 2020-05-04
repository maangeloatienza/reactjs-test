import React from 'react';

function Checkout(props){
    let {cart,total,count,charge} = props;


    return  <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{count}</span>
                </h4>
                    <ul className="list-group mb-3">
                    {
                        cart ? cart.map((item,index)=>{
                            return  <li className="list-group-item d-flex justify-content-between lh-condensed" key={item.id}>
                                        <div>
                                            <h6 className="my-0">{item.name}</h6>
                                            <small className="text-muted">x{item.quantity}</small>
                                            <div className='form-row'>
                                                <div className='col'>
                                                    <button className='btn btn-sm btn-danger form-control'>-</button>

                                                </div>

                                                <div className='col'>
                                                    <input type='number' value={item.quantity} className='form-control'/> 

                                                </div>

                                                <div className='col'>
                                                    <button className='btn btn-sm btn-success form-control'>+</button>

                                                </div>
                                            </div> 
                                        </div>
                                        <strong className="text-muted">P{item.subtotal}</strong>
                                    </li>
                                    
                            })
                            : 
                            <li className="list-group-item d-flex justify-content-between lh-condensed">Empty Cart</li>
                    }
                    {
                        cart ?  <li className="list-group-item d-flex justify-content-between">
                                    <span>Delivery charge </span>
                                <strong className="text-muted">P{charge}</strong>
                                </li> : ''
                    }
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>P{total+charge||0.0}</strong>
                        </li>
                    </ul>
            </div>
}

export default Checkout;