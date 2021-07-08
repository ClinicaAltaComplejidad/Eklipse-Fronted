import useToken from '../hooks/useToken';
import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider= ({children}) => {


    const [isLogin, setLogin] = useState({
        login: useToken() === null ? false : true,
    });

    return (
        <DataContext.Provider value={{
            isLogin,
            setLogin
        }}>
            {children}
        </DataContext.Provider>
    );
}