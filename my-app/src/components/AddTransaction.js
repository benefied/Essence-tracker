import React from 'react';
import { useState } from 'react';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


  return (
    <>
        <h3>Add new transactions</h3>
        <form >
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