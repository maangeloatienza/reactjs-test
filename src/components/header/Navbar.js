import React from 'react';
import { Link  } from 'react-router-dom';
import { withGlobalState } from 'react-globally'

function Navbar (props) {
    const {isLoggedIn} = props;
        return <nav className="navbar navbar-expand-md navbar-inverse justify-content-right">

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
                                isLoggedIn ? 
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
                                Cart <span className="badge badge-secondary badge-pill">{props.globalState.badge || 0}</span>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </nav>
}

export default withGlobalState(Navbar);
