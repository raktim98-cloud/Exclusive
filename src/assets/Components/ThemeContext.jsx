import {createContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children})=> {
    return (
        <ThemeContext.Provider value={{value:1}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeProvider, ThemeContext}