import React,{Component} from 'react';
import { checkout } from './../../api/apiCall';
import { getToken, getUser } from '../../utils/Commons';



class CheckoutForm extends Component{
    
    constructor(props){
        super(props);

        this.state = {

        };

        this.onCheckout = this.onCheckout.bind(this);
    }

    onCheckout(){
        
    
        let body = {};
        
        
        body.first_name = this.firstNameInput.value;
        body.last_name = this.lastNameInput.value;
        body.delivery_address = this.deliveryAddressInput.value;
        body.user_id = localStorage.getItem('guest');
    
        console.log(body)
        checkout(body);
    }

    render(){
        return  (
            <div>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Billing information</span>
                    
                </h4>
                <form>
                    
                    <div className="form-row mb-2">
                        <div className="col">            
                            <input type="text" className='form-control' ref={firstNameInput => this.firstNameInput = firstNameInput} placeholder='First name' required autoFocus />
                        </div>
                        <div className="col">                  
                            <input type="text" className='form-control' ref={lastNameInput => this.lastNameInput = lastNameInput} placeholder='Last name' required autoFocus />
                        </div>
                    </div>

                    <div className="form-row mb-2">
                        <div className="col">
                            <input type="text" className='form-control' ref={deliveryAddress => this.deliveryAddress = deliveryAddress} placeholder='Delivery address' required autoFocus />
                        </div>
                    </div>


                    <button className="mt-2 btn btn-sm btn-primary btn-block" onClick={this.checkout}>Checkout</button>

                </form>
            </div >
        )
    }

}

export default CheckoutForm;