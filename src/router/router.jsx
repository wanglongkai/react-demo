import { createBrowserRouter } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import RootLayout from 'layout';

const Tiktok = lazy(() => import('pages/tiktok'))

const lazyLoad = (component) => {
    return <Suspense fallback={<div>loading...</div>}>
        {component}
    </Suspense>
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '',
                element: <div>
                    hello, react!
                </div>
            },
            {
                path: '/instance/auth',
                element: lazyLoad(<Tiktok/>),
            },
            {
                path: '*',
                element: <div>
                    404
                </div>,
            }
        ]
    },
])