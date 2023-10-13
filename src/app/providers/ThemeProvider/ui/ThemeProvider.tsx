import {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY} from 'shared/const/localStorage';
import {Theme} from 'shared/const/theme';
import {ThemeContext} from 'shared/lib/context/ThemeContext/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}