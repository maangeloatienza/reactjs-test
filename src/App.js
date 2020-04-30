import React, {Component} from 'react';
import './App.css';

import Navbar from './components/header/Navbar';
import RouteLinks from './components/links/RouteLinks';
import {getToken} from './utils/Commons';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }

  componentDidMount(){
    let isLoggedIn = getToken() ? true : false;
    this.setState({
      isLoggedIn : isLoggedIn
    })
  }

  render(){
 
    return (

      <div className="container">
          <Navbar isLoggedIn={this.state.isLoggedIn}/>
          <RouteLinks/>
      </div>
    );
  }
  
}

export default App;
