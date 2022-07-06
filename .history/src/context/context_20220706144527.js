import React, {useReducer, createContext} from "react";
import contextReducer from "./contextReducer";

import ContextReducer from './contextReducer'

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(contextReducer, initialState)
    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}