import React, {useEffect} from 'react';

function TransactionList(props){

    const dateConvert=(date)=>{
        let dateTime = new Date(date.toString());

        return dateTime.toDateString();
    }

    return  <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0'>
                <h4 className="mb-1 text-center">
                    <span className="text-muted">Order History  </span>
                </h4>
                <p className="text-muted text-right">count : {props.count} </p>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Date ordered</td>
                        <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            props.transactions ? props.transactions.map((item, index) => {
                                return <tr className="" key={item.id}>
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