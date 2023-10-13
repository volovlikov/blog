import {Link} from 'react-router-dom';
import {useTheme} from 'shared/lib/hooks/useTheme/useTheme';
import {classNames} from 'shared/classNames/classNames';
import {AppRouter} from './providers/router';
import './styles/index.scss';


export const App = () => {
    const {toggleTheme, theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    )
}