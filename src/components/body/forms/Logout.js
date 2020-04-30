import React from 'react';
import { withRouter } from 'react-router-dom';
import { removeUserSession } from './../../../utils/Commons';


class Logout extends React.Component {

  constructor(props){
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    removeUserSession();
    
    this.props.history.push('/');

    window.location.reload(false);

  }

  render(){
        
    return (
      
        <button  onClick={this.onLogout}>Logout</button>
      
      )
  }
}

export default withRouter(Logout);