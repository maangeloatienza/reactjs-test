import React,{Component} from 'react';
import { getToken, verifyUser, getUser } from '../../utils/Commons';
import { getUserCart } from './../../api/apiCall';
import CheckoutForm from './../forms/CheckoutForm';
import CartItem from './CartItem';
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
        console.log('isGuest',localStorage.getItem('guest'));
        console.log('isLoggedIn',getToken());

        getUserCart(params).then((cart) => {
            console.log(cart)
            this.setState({ cart: cart.data, total : cart.total, count : cart.count }
        )});
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Checkout cart={this.state.cart} total={this.state.total} count={this.state.count} />
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

export default Cart;