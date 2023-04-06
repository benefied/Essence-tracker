import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
       { id: 1, text: 'flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 300 },
       { id: 3, text: 'Book', amount: -10 },
       { id: 4, text: 'Camera', amount: 150 }
    ]
}

//creating context
export const GlobalContext = createContext(initialState);

//creating providers
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransactions = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
    })
    }

    return(<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransactions }}>
        { children }
    </GlobalContext.Provider>);
}