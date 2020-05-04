import React, {useState,useEffect} from 'react';
import { getTransactions} from './../../api/apiCall';
import { getToken, getUser } from '../../utils/Commons';

import TransactionList from './TransactionList';


function Transactions(props){

    const [transactions, setTransactions] = useState([]);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        fetchTransactions();
    },[]);

    const fetchTransactions = () =>{
        let params = getToken() ? `user=${getUser().id}` : `user=${localStorage.getItem('guest')}`;

        getTransactions(params).then(response =>{
            
            setTransactions(response.data);
            setCount(response.count);
        });
    }

    return  <div className='container'>
                <div className='row'>
                    <TransactionList count={count} transactions={transactions}/>
                </div>
            </div>
}

export default Transactions;