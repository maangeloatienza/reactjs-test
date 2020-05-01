import React,{Component} from 'react';
import { Link  } from 'react-router-dom';

class Navbar extends Component {

    render (){

        return (
            <nav className="navbar navbar-expand-md navbar-inverse justify-content-right">

                <div className="container-fluid">
                    <ul className="navbar-nav mr-auto">
                        <li >
                            <Link 
                                to={'/'}
                                className="nav-link text-dark">
                                Home
                            </Link>
                        </li>
                        <li>
                            {
                                this.props.isLoggedIn ? 
                                <Link 
                                    to={'/logout'}
                                    className="nav-link text-dark">
                                    Logout
                                </Link>
                                :
                                <Link 
                                    to={'/login'}
                                    className="nav-link text-dark">
                                    Login
                                </Link>
                            }
                        </li>
                        <li>
                            <Link
                                to={'/cart'}
                                className="nav-link text-dark">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
          )
    }
}

export default Navbar;
