import React, { useContext } from "react";
import { createContext } from "react";

const authContext = createContext();

export const AuthContextProvider = ({children}) => { 
    return <authContext.Provider></authContext.Provider>
};

export const getAuthContext = ()=>{
    return useContext(authContext)
}
