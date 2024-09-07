import * as React from 'react';
import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router-dom';
import App from '../App';
import { Error404 } from '../components/pages/Error404';
import { Adidas } from '../components/pages/Adidas';
import { Puma } from '../components/pages/Puma';
import { Abibas } from '../components/pages/Abibas';
import { Prices } from '../components/pages/Prices';
import { Model } from '../components/pages/Model';
import { ProtectedPage } from '../components/pages/ProtectedPage';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../components/pages/Login';
import { ReactNode } from 'react';

export const PATH = {
	ADIDAS: '/adidas',
	PUMA: '/puma',
	ABIBAS: '/abibas',
	PRICES: '/prices',
	PROTECTED: '/protected',
	MODEL: '/:model/:id',
	ERROR: '/error',
	LOGIN: '/login',
} as const;

const publicRoutes: RouteObject[] = [
	{
		path: PATH.ADIDAS,
		element: <Adidas />,
	},
	{
		path: PATH.PUMA,
		element: <Puma />,
	},
	{
		path: PATH.ABIBAS,
		element: <Abibas />,
	},
	{
		path: PATH.PRICES,
		element: <Prices />,
	},
	{
		path: PATH.MODEL,
		element: <Model />,
	},
	{
		path: PATH.ERROR,
		element: <Error404 />,
	},
	{
		path: PATH.LOGIN,
		element: <Login />,
	},
];
const privateRoutes: RouteObject[] = [
	{
		path: PATH.PROTECTED,
		element: (<ProtectedRoute>
			<ProtectedPage />
		</ProtectedRoute>),
	},
];

// import React, { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';
// import { PATH } from './router';

type ProtectedRoutePropsType = {
	children: ReactNode
}

export const PrivateRoutes = () => {
		const isAuth = true;

		return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />;

	}
;

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Navigate to={PATH.ERROR} />,
		children: [
			{
				element: <PrivateRoutes />,
				children: privateRoutes,
			},

			...publicRoutes,
		],
	},
]);
