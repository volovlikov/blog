import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps } from 'shared/types/router';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
            </div>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
