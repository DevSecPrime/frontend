import React, { createContext, useState } from 'react'

//Step 1: create context
const ThemeDataContext = createContext()
const ThemeContext = ({ children }) => {


    const [theme, setTheme] = useState("light")

    console.log({ theme })
    return (
        <div>
            <ThemeDataContext.Provider value={[theme, setTheme]}>
                {children}
            </ThemeDataContext.Provider>
        </div>
    )
}

export default ThemeContext
export { ThemeDataContext }
