import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';

import Products from './../products/Products';
import Login from './../forms/Login';
import Logout from './../forms/Logout';
import Cart from './../cart/Cart';
import CheckoutSuccess from './../cart/CheckoutSuccess';
import Transactions from './../transactions/Transactions';


class RouteLinks extends Component {

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component ={Products}/>
          <Route path='/login' component ={Login}/>
          <Route path='/logout' component={Logout} />
          <Route exact path='/cart' component={Cart} />
          <Route path='/cart/checkout-success' component={CheckoutSuccess}/>
          <Route exact path='/transactions/' component={Transactions} />

        </Switch>
      </div>
    )
  }
}

export default RouteLinks;