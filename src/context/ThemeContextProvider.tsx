import {createContext, useState} from "react";
import * as React from "react";


type ThemeContextType = {
    theme: string;
    setTheme:(theme:string)=>void;
}

type ThemeProviderProps = {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType|undefined>(undefined);


export default function ThemeContextProvider({children}:ThemeProviderProps) {





    const [theme,setTheme] = useState<string>('dark')

    return(<ThemeContext.Provider value={{theme,setTheme}}>

        {children}

    </ThemeContext.Provider>)
}