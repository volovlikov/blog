import {Suspense, useCallback} from 'react'
import {Route, Routes} from 'react-router-dom'
import {AppRoutesProps} from 'shared/types/router'
import {routeConfig} from '../config/routeConfig'


export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={'...Loading'}>{route.element}</Suspense>
        )

        return (
            <Route  
                key={route.path}
                path={route.path}
                element={element}
            />
        )
    }, [])


    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}