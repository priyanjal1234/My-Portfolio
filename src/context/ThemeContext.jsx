import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = ({children}) => {
    const [isDark, setisDark] = useState(false)
    return (
        <div>
        <ThemeDataContext.Provider value={{isDark,setisDark}}>
            {children}
        </ThemeDataContext.Provider>
        </div>
    )
}

export default ThemeContext
