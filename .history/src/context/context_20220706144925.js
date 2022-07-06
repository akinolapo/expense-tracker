import React, {useReducer, createContext} from "react";
import contextReducer from "./contextReducer";


const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch( {type: 'DELETE_TRANSACTION', payload: id} )
    }

    const addTransaction = (transaction) => {
        dispatch( {type: 'ADD_TRANSACTION', payload: tra} )
    }

    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}