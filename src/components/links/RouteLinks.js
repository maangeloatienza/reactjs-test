import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';

import Products from './../body/products/Products';
import Login from './../body/forms/Login';
import Logout from './../body/forms/Logout';


class RouteLinks extends Component {

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component ={Products}/>
          <Route path='/login' component ={Login}/>
          <Route path='/logout' component ={Logout}/>
        </Switch>
      </div>
    )
  }
}

export default RouteLinks;