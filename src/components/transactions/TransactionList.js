import React, {useEffect} from 'react';

function TransactionList(props){

    const dateConvert=(date)=>{
        let dateTime = new Date(date.toString());

        return dateTime.toDateString();
    }

    return  <div className='col-sm-12 col-md-8 col-lg-8'>
                <h4 className="d-flex justify-content-between align-items-center mb-3 ">
                    <span className="text-muted">Order History  </span>
                    <span className="text-muted">Total Orders: {props.count} </span>
                </h4>
                <table className='table table-dark'>
                    <thead>
                
                        <th>Code</th>
                        <th>Name</th>
                        <th>Date ordered</th>
                        <th>Total</th>
                    
                    </thead>
                    <tbody>
                        {

                            props.transactions ? props.transactions.map((item, index) => {
                                return  <tr className="" key={item.id}>
                                            <td>
                                                <small className="text-white">{item.code}</small>
                                            </td>
                                            <td>
                                                <small className="text-white">{item.first_name + ' ' + item.last_name}</small>
                                            </td>
                                            <td>
                                                <small className="text-white">{dateConvert(item.created)}</small>
                                            </td>
                                            <td>
                                                <small className="text-white">{item.total}</small>
                                            </td>
                                            
                                        </tr>
                            }) : <tr className="">No order history!</tr>


                        }
                    </tbody>
                </table>
            </div>
                
}

export default TransactionList;