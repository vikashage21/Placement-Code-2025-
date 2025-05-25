import { useContext } from 'react'
import ThemeContext from '../context/context.js' 
import AppTheme from '../color.js'  

function HeroSection() {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return (
        <div style={{
            padding :"1rem",
            backgroundColor: currentTheme.backgroundColor,
            color: currentTheme.textColor,
            border: currentTheme.border
        }}>
            <h1>Context API Theme Toggler</h1>
            <p>This is a nice paragraph</p>
            <button 
                style={{
                    backgroundColor: currentTheme.backgroundColor,
                    color: currentTheme.textColor,
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                Click Me
            </button>
        </div>
    )
}

export default HeroSection
