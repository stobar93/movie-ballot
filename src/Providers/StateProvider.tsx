import React, {createContext, useReducer} from "react";
import { initialState, reducer } from "../State/reducer";
import { State, Action } from "../State/types";

export const StateContext = 
    createContext<{state: State, dispatch: React.Dispatch<Action>}>(
        {state: initialState, dispatch: () => null}
        );

const StateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider> 
    )
}

export default StateProvider;