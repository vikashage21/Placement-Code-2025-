import React, { useContext } from 'react'
import ThemeContext from '../context/context.js';

function ThemeToggler() {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div
            onClick={
                () => {
                    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

                }
            }>

                <span>
            {

                themeMode === 'light' ? 'turn off ' : 'turn on'     
                
            }
        </span>

        </div>
        


    )
}

export default ThemeToggler
