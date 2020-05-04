import React from 'react';
import { Link  } from 'react-router-dom';
import { withGlobalState } from 'react-globally';
import "bootstrap/js/src/collapse.js";

import PizzaLogo from './pngfuel.com.png';


function Navbar (props) {
    const {isLoggedIn} = props;
    return <nav className="navbar navbar-expand-lg navbar-dark bg-warning static-top mb-5">

                <div className="container">
                    <Link to={'/'} className="navbar-brand" >
                <img className='img-fluid' style={{ height: '70px', width: '70px',}} src={PizzaLogo} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navList" aria-controls="navList" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    <div className="collapse navbar-collapse" id='navList'>
                        <ul className="navbar-nav ml-auto text-center">
                            <li  className="nav-item active">
                                <Link
                                    to={'/'}
                                    className="nav-link text-dark font-weight-bolder">
                                    Home
                                    </Link>
                            </li>
                            {
                                isLoggedIn ?
                                    <Link
                                        to={'/transactions'}
                                        className="nav-link text-dark font-weight-bolder">
                                        Orders
                                    </Link>
                                    : ''
                            }
                            <li className="nav-item">
                                {
                                    isLoggedIn ?
                                        <Link
                                            to={'/logout'}
                                        className="nav-link text-dark font-weight-bolder" >
                                            Logout
                                        </Link>
                                        :
                                        <Link
                                            to={'/login'}
                                        className="nav-link text-dark font-weight-bolder">
                                            Login
                                        </Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={'/cart'}
                                    className="nav-link text-dark font-weight-bolder">
                                        <span className="badge badge-secondary badge-pill"><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className={props.globalState.badge? 'text-white' : 'text-danger'}>{props.globalState.badge || 0}</span> </span>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
}

export default withGlobalState(Navbar);
