import React,{Component} from 'react';
import { Link  } from 'react-router-dom';

class Navbar extends Component {

    render (){

        return (
            <nav className="navbar navbar-expand-md navbar-inverse">
                <div className="container-fluid">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <Link 
                                to={'/'}
                                className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            {
                                this.props.isLoggedIn ? 
                                <Link 
                                    to={'/logout'}
                                    className="nav-link">
                                    Logout
                                </Link>
                                :
                                <Link 
                                    to={'/login'}
                                    className="nav-link">
                                    Login
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
          )
    }
}

export default Navbar;
