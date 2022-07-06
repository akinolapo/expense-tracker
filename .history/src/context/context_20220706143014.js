import React, {useReducer, createContext} from "react";

const initialState = []

const ExpenseTrackerContext = createContext(initialState)