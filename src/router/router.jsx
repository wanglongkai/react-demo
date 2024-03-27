import { createBrowserRouter } from 'react-router-dom';
import {lazy} from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            hello, react!
        </div>
    },
    {
        path: '/about',
        Component: lazy(() => import('pages/about')), // 路由懒加载
    }
])