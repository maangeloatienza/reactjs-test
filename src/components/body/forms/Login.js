import React, {Component} from 'react';
import API from './../../../utils/API';
import { withRouter } from 'react-router-dom';
import { setUserSession } from './../../../utils/Commons';

class Login extends Component {

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();

        API.post('user/login',{
            username : this.usernameInput.value,
            password : this.passwordInput.value
        })
        .then(response=>{
            let data = response.data;
            console.log('user',data);

            if(data.success) {
         
                setUserSession(data.token, data.user);

                this.props.history.push('/');
                window.location.reload(false);

            }
            
            this.props.history.push('/');
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render (){

        
        return (
            <div className="container">
                
                <form onSubmit={this.onSubmit}>
                    <input type='text' ref={usernameInput => this.usernameInput = usernameInput} placeholder='Username'/>
                    <input type='password' ref={passwordInput => this.passwordInput = passwordInput} placeholder='Password'/>
                    <button>Login</button>
                </form>
                
            </div>
        )
    }
}

export default withRouter(Login);