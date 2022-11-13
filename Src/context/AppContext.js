import React, {createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const register = (email, password, name) => {};
    const login = (email, password) => {};
    const logout = () => {};
    return (
        <AppContext.Provider value={{user, setUser, register, login, logout}}>
            {children}
        </AppContext.Provider>
    );
};

export const GlobalVariable = () => useContext(AppContext);
