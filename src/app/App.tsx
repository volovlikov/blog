import {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPageAsync} from 'pages/AboutPage/AboutPage.async';
import {MainPageAsync} from 'pages/MainPage/MainPage.async';
import {useTheme} from 'shared/lib/hooks/useTheme/useTheme';
import {classNames} from 'shared/classNames/classNames';
import './styles/index.scss';


export const App = () => {
    const {toggleTheme, theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />}  />
                    <Route path="/" element={<MainPageAsync />}  />
                </Routes>
            </Suspense>
        </div>
    )
}