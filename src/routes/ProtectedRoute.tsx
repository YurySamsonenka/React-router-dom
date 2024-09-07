import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PATH } from './router';

type ProtectedRoutePropsType = {
	children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRoutePropsType) => {
		const logged = true;

		return logged ? children : <Navigate to={PATH.LOGIN} />;

	}
;
