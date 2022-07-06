import React, {useReducer, createContext} from "react";

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    useRed
    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}