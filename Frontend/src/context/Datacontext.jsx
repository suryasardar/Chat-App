import {  createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
    return useContext(DataContext);
}

export const DataContextProvider = ({ children }) => {
    const [DataUser, setDataUser] = useState('');

    return <DataContext.Provider value={{ DataUser, setDataUser }}>
        {children}
    </DataContext.Provider>
}