import React from 'react';
import { Outlet } from 'react-router-dom';

export const Croses = () => {
	return (
		<div>
			<div>Header</div>
			<Outlet />
			<div>Footer</div>
		</div>
	);
};
