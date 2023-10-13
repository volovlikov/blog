import {useTheme} from 'shared/lib/hooks/useTheme/useTheme';
import {classNames} from 'shared/classNames/classNames';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/Navbar/ui/Navbar';
import './styles/index.scss';


export const App = () => {
    const {toggleTheme, theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}