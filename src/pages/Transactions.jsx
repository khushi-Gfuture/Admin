import React, { useState } from 'react';
import './Transactions.css';

const Transactions = () =>{
const [Transactions] = useState([
    { id:1, Name:'Henry', Amount:'237', Date:'27-11-2025', status:'credited'},
    { id:2, Name:'sam', Amount:'50', Date:'27-11-2025', status:'Debited'},
    { id:3, Name:'Jenifer', Amount:'533', Date:'26-11-2025', status:'Debited'},
    { id:4, Name:'Mariya', Amount:'700', Date:'27-11-2025', status: 'credited'},
]);

return(
    <div className='Transactions-container'>
        <h2>Transactions Details</h2>
        <table className='Transactions-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AMOUNT</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {Transactions.map((Transactions)=>(
                    <tr key={Transactions.id}>
                        <td>{Transactions.id}</td>
                        <td>{Transactions.Name}</td>
                        <td>{Transactions.Amount}</td>
                        <td>{Transactions.Date}</td>
                        <td>{Transactions.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
};

export default Transactions;

