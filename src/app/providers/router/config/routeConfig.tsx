import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {AppRoutes, getRouteAbout, getRouteMain} from 'shared/const/router';
import {AppRoutesProps} from 'shared/types/router';


export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />
    }
}