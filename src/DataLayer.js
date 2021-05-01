import { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

// "children is what is wrapped in the DataLayer (App)"
export const DataLayer = ({ initialState, reducer, children }) => {
   return (<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>)
}

export const useDataLayerValue =
() => useContext(DataLayerContext);
