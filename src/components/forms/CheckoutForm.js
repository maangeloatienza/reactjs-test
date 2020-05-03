import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import { getToken, getUser } from '../../utils/Commons';
import {checkout} from './../../api/apiCall';


class CheckoutForm extends Component{
    
    constructor(props){
        super(props);

        // this.state = {

        // };

        this.onCheckout = this.onCheckout.bind(this);
        
    }

    onCheckout(event){
        event.preventDefault();
        
        let body = {};
        let verifiedUser = getToken() ? getUser(): [];
        
        
        body.first_name = this.firstNameInput.value;
        body.last_name = this.lastNameInput.value;
        body.delivery_address = this.deliveryAddressInput.value;
        body.user_id = getToken() ? verifiedUser.id : localStorage.getItem('guest');
        body.delivery_cost = 50.0;
        
    
        checkout(body).then(response=>{
            console.log(response);
            if(response.success) return this.props.history.push('/cart/checkout-success');

        })
        
    }

    render(){
        return  (
            <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Billing information</span>
                    
                </h4>
                <form onSubmit={this.onCheckout}>
                    
                    <div className="form-row mb-4">
                        <div className="col">            
                            <input type="text" className='form-control' ref={firstNameInput => this.firstNameInput = firstNameInput} placeholder='First name' required autoFocus />
                        </div>
                        <div className="col">                  
                            <input type="text" className='form-control' ref={lastNameInput => this.lastNameInput = lastNameInput} placeholder='Last name' required autoFocus />
                        </div>
                    </div>

                    <div className="form-row mb-4">
                        <div className="col">
                            <input type="text" className='form-control' ref={deliveryAddressInput => this.deliveryAddressInput = deliveryAddressInput} placeholder='Delivery address' required autoFocus />
                        </div>
                    </div>


                    <button className="mt-2 btn btn-sm btn-primary btn-block" >Checkout</button>

                </form>
            </div >
        )
    }

}

export default withRouter(CheckoutForm);