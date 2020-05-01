import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';

import Products from './../products/Products';
import Login from './../forms/Login';
import Logout from './../forms/Logout';
import Cart from './../cart/Cart';


class RouteLinks extends Component {

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component ={Products}/>
          <Route path='/login' component ={Login}/>
          <Route path='/logout' component={Logout} />
          <Route path='/cart' component={Cart}/>
        </Switch>
      </div>
    )
  }
}

export default RouteLinks;