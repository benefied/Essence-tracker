import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import React from 'react';

const App = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </div>
  )
}

export default App;
