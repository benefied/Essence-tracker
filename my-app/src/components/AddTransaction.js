import React, { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransactions } = useContext( GlobalContext )
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


    const onSubmit = (e) =>{
        e.preventDefault();

        const newTransaction = {
            id:Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }

        addTransactions(newTransaction)
    }

  return (
    <>
        <h3>Add new transactions</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter the text details..' />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount
                <br />
                (Negative - expense, Positive -Income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Please enter amount..' />
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction