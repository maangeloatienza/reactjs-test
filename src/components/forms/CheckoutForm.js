import React,{Component} from 'react';
import { checkout } from './../../api/apiCall';
import { getToken, getUser } from '../../utils/Commons';
import API from './../../utils/API';


class CheckoutForm extends Component{
    
    constructor(props){
        super(props);

        // this.state = {

        // };

        this.onCheckout = this.onCheckout.bind(this);
        
    }

    onCheckout(){
        console.log('CLICKED!')
        let body = {};
        let verifiedUser = getToken() ? getUser(): [];
        
        
        let first_name = this.firstNameInput.value;
        let last_name = this.lastNameInput.value;
        let delivery_address = this.deliveryAddressInput.value;
        let user_id = getToken() ? verifiedUser.id : localStorage.getItem('guest');
    
    
        API.post('transactions',{
            user_id : user_id,
            first_name : first_name,
            last_name : last_name,
            delivery_address : delivery_address
        })
        .then(response=>{
            let data = response.data;

            if(data.success){
                this.props.history.push('/');
            }
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
                            <input type="text" className='form-control' ref={deliveryAddress => this.deliveryAddress = deliveryAddress} placeholder='Delivery address' required autoFocus />
                        </div>
                    </div>


                    <button className="mt-2 btn btn-sm btn-primary btn-block" >Checkout</button>

                </form>
            </div >
        )
    }

}

export default CheckoutForm;