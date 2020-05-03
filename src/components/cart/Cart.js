import React,{Component} from 'react';
import { getToken, getUser } from '../../utils/Commons';
import { getUserCart } from './../../api/apiCall';
import { withGlobalState } from 'react-globally'

import CheckoutForm from './../forms/CheckoutForm';
import Checkout from './Checkout';

class Cart extends Component{
    constructor(props){
        super(props);

        this.state = {
            cart: [],
            count : 0,
            total : 0.0,
            user : null
        }

        this.getCartItems = this.getCartItems.bind(this);
    }

    componentDidMount(){
        this.getCartItems();
    }

    getCartItems(){
        
        let params = getToken() ? `user=${getUser().id}` : `guest=${localStorage.getItem('guest')}`;

        getUserCart(params).then((cart) => {
            this.setState({ cart: cart.data, total : cart.total, count : cart.count }
        )});
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Checkout cart={this.state.cart} total={this.state.total} count={this.props.globalState.badge} />
                    </div>
                    <div  className='col-sm-12 col-md-8 col-lg-8 '>
                        {/* <CartItem cart={this.state.cart} total={this.state.total}/> */}
                        {
                            <CheckoutForm cart={this.state.cart} />
                        }
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default withGlobalState(Cart);