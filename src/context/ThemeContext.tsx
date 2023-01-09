import React from 'react'
import { createContext } from 'react';

type AuthContextProps = {

}

const ThemeContext = createContext({} as AuthContextProps);

const ThemeProvider = ({ children }: any) => {

    return (
        <ThemeContext.Provider
            value={{
                
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
