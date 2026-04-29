import React, { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Child3 = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <div>
            <button className='btn' onClick={toggleTheme}>Change theme, {theme}</button>
        </div>
    );
}

export default Child3;
