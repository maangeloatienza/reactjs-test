import React,{Component,useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { getToken, getUser } from '../../utils/Commons';
import {getTransactions} from './../../api/apiCall';

// class CheckoutSuccess extends Component{

//     state = {
//         transactions: []
//     }

//     componentDidMount(){
//         this.getTransactions();
       
//     }

//     getTransactions(){
//         let user = getToken() ? getUser().id : localStorage.getItem('guest');

//         getTransactions(`user=${user}&sort_id=created&sort_desc=DESC&limit=1`).then(cart=>{
//             this.setState({
//                 transactions : cart.data[0]
//             })
//         });
//     }

//     goBack(event){
//         event.preventDefault();
//         this.props.history.push('/');
//     }

//     render(){
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-sm-12 col-md-8 col-lg-8 mx-auto'>
//                         <div className='text-center'>
//                             <h3>Thank you!</h3>
//                             <p className='lead'>Your order will now be processed.</p>
                            
                            
//                             <div className='col-12'>
//                                 <ul className='list-group mb-3'>
//                                     <li className="list-group-item d-flex justify-content-between lh-condensed">
//                                         <div className='text-left'>
//                                             <h6 className="my-0 font-weight-bolder">Reference number </h6>
//                                         </div>
//                                         <span className="text-muted text-right">{this.state.transactions.code}</span>
//                                     </li>

//                                     <li className="list-group-item d-flex justify-content-between lh-condensed">
//                                         <div className='text-left'>
//                                             <h6 className="my-0 font-weight-bolder">Billed to </h6>
//                                         </div>
//                                         <span className="text-muted text-right">{this.state.transactions.first_name + ' ' + this.state.transactions.last_name}</span>
//                                     </li>

//                                     <li className="list-group-item d-flex justify-content-between lh-condensed">
//                                         <div className='text-left'>
//                                             <h6 className="my-0 font-weight-bolder">Delivery address </h6>
//                                         </div>
//                                         <span className="text-muted text-right">{this.state.transactions.delivery_address}</span>
//                                     </li>

//                                     <li className="list-group-item d-flex justify-content-between lh-condensed">
//                                         <div className='text-left'>
//                                             <h6 className="my-0 font-weight-bolder">TOTAL</h6>
//                                         </div>
//                                         <span className="text-muted text-right">P{this.state.transactions.total}</span>
//                                     </li>
//                                 </ul>
//                                 <button className='btn btn-md btn-success' onClick={this.goBack}>Continue shopping</button>
//                             </div>    
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

function CheckoutSuccess(props){
    const [transactions,setTransactions] = useState([]);
 
    useEffect(()=> {
        getTransactions();
        console.log('TRANSACTIONS', transactions);
    })

    const getTransactions = () => {
        let user = getToken() ? getUser().id : localStorage.getItem('guest');

        getTransactions(`user=${user}&sort_id=created&sort_desc=DESC&limit=1`).then(cart => {
            // this.setState({
            //     transactions: cart.data[0]
            // })
            setTransactions(cart.data[0]);
        });
    }

    const goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    
        return  <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8 col-lg-8 mx-auto'>
                            <div className='text-center'>
                                <h3>Thank you!</h3>
                                <p className='lead'>Your order will now be processed.</p>


                                <div className='col-12'>
                                    <ul className='list-group mb-3'>
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div className='text-left'>
                                                <h6 className="my-0 font-weight-bolder">Reference number </h6>
                                            </div>
                                            <span className="text-muted text-right">{transactions.code}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div className='text-left'>
                                                <h6 className="my-0 font-weight-bolder">Billed to </h6>
                                            </div>
                                            <span className="text-muted text-right">{transactions.first_name + ' ' + transactions.last_name}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div className='text-left'>
                                                <h6 className="my-0 font-weight-bolder">Delivery address </h6>
                                            </div>
                                            <span className="text-muted text-right">{transactions.delivery_address}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div className='text-left'>
                                                <h6 className="my-0 font-weight-bolder">TOTAL</h6>
                                            </div>
                                            <span className="text-muted text-right">P{transactions.total}</span>
                                        </li>
                                    </ul>
                                    <button className='btn btn-md btn-success' onClick={goBack}>Continue shopping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   
}


export default withRouter(CheckoutSuccess);