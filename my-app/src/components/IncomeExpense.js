import React from 'react'

const IncomeExpense = () => {
  return (
    <div className='inc-exp-container'>
        <div className='income'>
            <h4>Income</h4>
            <p id='money-plus' className='money plus'>+0.00</p>
        </div>
        <div className='expense'>
            <h4>Expense</h4>
            <p id='money-minus' className='money minus'>-0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpense;